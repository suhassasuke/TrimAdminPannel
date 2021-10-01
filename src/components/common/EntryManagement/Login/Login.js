import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import CustomInput from "../../CustomInput";
import { ReactComponent as Google } from "../../../../assets/images/google.svg";
import { ReactComponent as Facebook } from "../../../../assets/images/facebook.svg";
import { useHistory } from "react-router-dom";
import { commonUrls } from "../../../../urls/routeUrls";
import PageWrapper from "../PageWrapperEM";
import "../styleEM.scss";
import clsx from "clsx";
import ToastService from "../../../../redux/services/toast.services";
import { login } from "../../../../redux/actions/auth/user.action";
import { useDispatch } from "react-redux";

export default function SignIn(props) {
    const history = useHistory();
    const [loginDetails, setLoginDetails] = React.useState({
        email: "",
        password: ""
    });
    const [loginErrors, setLoginErrors] = React.useState({
        email: "",
        password: ""
    });
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
        setLoginDetails((user) => ({ ...user, [_n]: _v }));
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
        if (!validateLoginDetails()) {
            // ToastService.success("Account created successfully");
            dispatch(
                login(loginDetails.email, loginDetails.password, redirectTo)
            );
        }
    }
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
                                        // width="100%"
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
                        >
                            {"Log in"}
                        </Button>
                    </form>

                    {/* <Grid container spacing={4} className="mb-2">
                        <Grid item md={6}>
                            <Typography
                                variant="body1"
                                className="font__size--sm"
                            >
                                {"Remember me"}
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography
                                variant="caption"
                                className="text-decoration__underline cursor__pointer"
                                onClick={() => {
                                    history.push(commonUrls.forgotPassword);
                                }}
                            >
                                {"Forgot Password?"}
                            </Typography>
                        </Grid>
                    </Grid> */}
                    <Typography variant="body1" className="font__size--sm">
                        {"Don’t have an account? "}
                        <Typography
                            variant="caption"
                            className="text-decoration__underline cursor__pointer"
                            onClick={() => {
                                history.push(commonUrls.register);
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
