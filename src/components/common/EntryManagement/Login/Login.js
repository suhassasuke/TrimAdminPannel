import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import CustomInput from "../../CustomInput";
// import { ReactComponent as Google } from "../../../../assets/images/google.svg";
// import { ReactComponent as Facebook } from "../../../../assets/images/facebook.svg";
import { useHistory } from "react-router-dom";
import { routeUrls } from "../../../../urls/routeUrls";
import PageWrapper from "../PageWrapperEM";
import "../styleEM.scss";
import clsx from "clsx";
import { userActions } from "../../../../redux/actions/auth/user.action";
import { useDispatch, useSelector } from "react-redux";
import { setAuthDetails } from "../../../../redux/actions/auth/auth.actions";
import ToastService from "../../../../services/toast.services";
import { userServices } from "../../../../services/user.services";

export default function SignIn(props) {
    const history = useHistory();
    const { status, redirect, userDetails } = useSelector(
        (state) => state.LoginReducer
    );
    const { user, role, authenticated } = useSelector(
        (state) => state.AuthReducer
    );
    const [loginDetails, setLoginDetails] = React.useState({
        email: "",
        password: ""
    });
    const [loginErrors, setLoginErrors] = React.useState({
        email: "",
        password: ""
    });
    const [loginButtonDisabled, setLoginButtonDisabled] = React.useState(false);
    const [redirectTo, setRedirectTo] = React.useState("");
    const dispatch = useDispatch();

    const INPUT_LIST_SIGNIN_FORM = [
        {
            name: "email",
            type: "email",
            label: "Email Address",
            required: true,
            placeholder: "Email Address"
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            required: true,
            placeholder: "Password"
        }
    ];
    function handleChange(_v, _n, _e, _m, _evt) {
        setLoginDetails((_user) => ({ ..._user, [_n]: _v }));
    }
    function validateLoginDetails() {
        let _isError = false;
        if (loginDetails.email === "") {
            _isError = true;
            setLoginErrors((error) => ({
                ...error,
                email: "Email Cannot be empty"
            }));
        } else {
            setLoginErrors((error) => ({
                ...error,
                email: ""
            }));
        }
        if (loginDetails.password === "") {
            _isError = true;
            setLoginErrors((error) => ({
                ...error,
                password: "password cannot be empty"
            }));
        } else {
            setLoginErrors((error) => ({
                ...error,
                password: ""
            }));
        }
        return _isError;
    }
    function loginUser() {
        setLoginButtonDisabled(true);
        if (!validateLoginDetails()) {
            dispatch(
                userActions.login(
                    loginDetails.email,
                    loginDetails.password,
                    redirectTo
                )
            );
        } else {
            setLoginButtonDisabled(false);
        }
    }
    React.useEffect(() => {
        if (status) {
            if (status !== 200) {
                ToastService.error(userDetails.message);
                setLoginButtonDisabled(false);
            } else {
                ToastService.success(userDetails.message);
                dispatch(setAuthDetails(userDetails,'login'));
            }
        }
    }, [status]);
    React.useEffect(() => {
        if (authenticated === true) {
            userServices.setAuthInit(user);
            if (redirect) {
                history.push(redirect);
            }
			props.setIsInitCheck(true);
            history.push(routeUrls.commonUrls.dashboard);
        }
    }, [authenticated]);
    React.useEffect(() => {
        if (
            props.location.state &&
            props.location.state.redirectTo !== undefined &&
            props.location.state.redirectTo !== ""
        ) {
            setRedirectTo(props.location.state.redirectTo);
        }
    }, []);
    return (
        <>
            <PageWrapper>
                <Box component="div">
                    <form className="signin_form mb-4" autoComplete="off">
                        <Box component="div" marginX={"-1rem"}>
                            {INPUT_LIST_SIGNIN_FORM.map((_el, _i) => {
                                return (
                                    <Box
                                        component="div"
                                        display=""
                                        className={clsx("px-3")}
                                        key={_i}
                                    >
                                        <CustomInput
                                            name={_el.name}
                                            placeholder={_el.placeholder}
                                            type={_el.type}
                                            required={_el.required}
                                            label={_el.label}
                                            fullWidth={true}
                                            className={clsx(
                                                "border--primary__2  font__size--md"
                                            )}
                                            key={_el.name}
                                            handleInputChange={handleChange}
                                            isPassword={_el.type === "password"}
                                            value={loginDetails[_el.name]}
                                            errorMsg={loginErrors[_el.name]}
                                            isError={
                                                loginErrors[_el.name] !== ""
                                            }
                                        />
                                    </Box>
                                );
                            })}
                        </Box>
                        <Button
                            variant="contained"
                            className="button--primary w-100 p-3"
                            disableRipple={true}
                            onClick={loginUser}
                            disabled={loginButtonDisabled}
                        >
                            {loginButtonDisabled ? "Logging in ..." : "Log in"}
                        </Button>
                    </form>
                    <Typography variant="body1" className="font__size--sm">
                        {"Don’t have an account? "}
                        <Typography
                            variant="caption"
                            className="text-decoration__underline cursor__pointer"
                            onClick={() => {
                                history.push(routeUrls.commonUrls.register);
                            }}
                        >
                            {"Signup now"}
                        </Typography>
                    </Typography>
                </Box>
            </PageWrapper>
        </>
    );
}
