import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import CustomInput from "../../CustomInput";
import { Link } from "react-router-dom";
import { commonUrls } from "../../../../urls/routeUrls";
import PageWrapper from "../PageWrapperEM";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { register } from "../../../../redux/actions/auth/user.action";
import { userUrls } from "../../../../urls/apiUrls";
import { registrationActions } from "../../../../redux/actions/auth/registration.action";
import ToastService from "../../../../redux/services/toast.services";

export default function SignUp(props) {
    const dispatch = useDispatch();
    const {
        userDetails,
        isRegistering,
        isRegistered,
        isError,
        errors,
        errorMsgs
    } = useSelector((state) => state.RegistrationReducer);

    const INPUT_LIST_SIGNUP_FORM = [
        {
            row: [
                {
                    name: "first_name",
                    type: "text",
                    label: "First name",
                    required: true,
                    placeholder: "",
                    validation: {
                        regex: /^[A-Za-z ]*$/,
                        regexOnInputCheck: true,
                        maxLimit: null,
                        minLimit: null,
                        maxLength: 30,
                        minLength: 1,
                        errorMsg: {
                            regex: "Invalid input",
                            minLength: "First name cannot be empty"
                        }
                    }
                },
                {
                    name: "last_name",
                    type: "text",
                    label: "Last name",
                    required: false,
                    placeholder: "",
                    validation: {
                        regex: /^[A-Za-z.]*$/,
                        maxLimit: null,
                        regexOnInputCheck: true,
                        minLimit: null,
                        maxLength: 30,
                        minLength: null,
                        errorMsg: {
                            regex: "Name should contain only alphabets"
                        }
                    }
                }
            ]
        },
        {
            row: [
                {
                    name: "email",
                    type: "email",
                    label: "Email Address",
                    required: true,
                    placeholder: "",
                    validation: {
                        regex: /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        regexOnInputCheck: false,
                        maxLimit: null,
                        minLimit: null,
                        maxLength: 50,
                        minLength: null,
                        errorMsg: {
                            regex: "Invalid email"
                        }
                    }
                }
            ]
        },
        {
            row: [
                {
                    name: "number",
                    type: "text",
                    label: "Mobile Number",
                    required: true,
                    placeholder: "",
                    startLabel: "+91 ",
                    validation: {
                        regex: /^[0-9]*$/,
                        regexOnInputCheck: true,
                        maxLimit: null,
                        minLimit: null,
                        maxLength: 10,
                        minLength: 10,
                        errorMsg: {
                            regex: "Only numbers allowed",
                            minLength: "Phone Number should be 10 digit"
                        }
                    }
                },
                {
                    name: "gender",
                    type: "select",
                    label: "Gender",
                    required: true,
                    placeholder: "",
                    list: [
                        { id: 1, name: "female", label: "Female" },
                        { id: 2, name: "male", label: "Male" },
                        { id: 3, name: "other", label: "Other" }
                    ]
                }
            ]
        },
        {
            row: [
                {
                    name: "year_of_experience",
                    type: "text",
                    label: "Years of experience",
                    required: true,
                    placeholder: "",
                    endLabel: "years",
                    validation: {
                        regex: /(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$| )/,
                        regexOnInputCheck: false,
                        maxLimit: null,
                        minLimit: null,
                        maxLength: 5,
                        minLength: null,
                        errorMsg: {
                            regex: "Invalid Input"
                        }
                    }
                }
            ]
        },
        {
            row: [
                {
                    name: "password",
                    type: "password",
                    label: "Password",
                    required: true,
                    placeholder: "",
                    descLabel:
                        "Password must be at least 8 characters including a lowercase letter, an upper case letter and a special character",
                    validation: {
                        regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?\W).{8,}$/,
                        regexOnInputCheck: false,
                        maxLimit: null,
                        minLimit: null,
                        maxLength: null,
                        minLength: 8,
                        errorMsg: {
                            regex: "",
                            minLength: "Password must be minimum 8 characters"
                        }
                    }
                }
            ]
        }
    ];
    const signupButtonLabel = {
        registering: "Signing up",
        default: "Sign up"
    };
    const [user, setUser] = React.useState({
        first_name: "",
        last_name: "",
        email: "",
        number: "",
        gender: "",
        year_of_experience: "",
        password: ""
    });
    function handleChange(_v, _n, _e, _m, _evt) {
        let _errors = [...errors],
            _errorMsgs = { ...errorMsgs };
        if (_evt === "blur") {
            const __i = _errors.indexOf(_n);
            if (_e === true) {
                if (__i === -1) _errors.push(_n);
                _errorMsgs[_n] = _m;
            } else if (_e === false) {
                if (__i !== -1) _errors.splice(__i, 1);
                _errorMsgs[_n] = "";
            }
            dispatch(registrationActions.updateErrors(_errors));
            dispatch(registrationActions.updateErrorMsgs(_errorMsgs));
        }
        userDetails[_n] = _v;
        setUser((user) => ({ ...user, [_n]: _v }));
        dispatch(registrationActions.updateUserDetails(userDetails));
    }
    function validateInputFields() {
        let _isError = false;
        INPUT_LIST_SIGNUP_FORM.forEach((_r) => {
            _r.row.forEach((_d) => {
                const _n = _d.name;
                const _v = userDetails[_n];
                const _i = errors.indexOf(_n);
                if (
                    _d.validation !== undefined &&
                    !_d.validation.regex.test(_v)
                ) {
                    if (_i === -1) {
                        errors.push(_n);
                    }
                    errorMsgs[_n] = _d.validation.errorMsg.regex;
                }
                if (_d.required === true && String(_v).length === 0) {
                    if (errors.indexOf(_n) === -1) {
                        errors.push(_n);
                    }
                    errorMsgs[_n] = "Required";
                }
            });
        });
        if (errors.length > 0) _isError = true;
        dispatch(registrationActions.updateErrors(errors));
        dispatch(registrationActions.updateErrorMsgs(errorMsgs));
        return _isError;
    }
    function registerUser() {
        if (!validateInputFields()) {
            dispatch(register(user, "freelancer"));
        }
    }
    React.useEffect(() => {
        if (isRegistered && !isError) {
            ToastService.success("Account created successfully");
        }
        if (!isRegistered && isError) {
            ToastService.error("Something went wrong");
        }
    }, [dispatch, isRegistered, isError]);
    return (
        <PageWrapper>
            <Box component="div" className="">
                <form className="signin_form mb-4" autoComplete="off">
                    <Box component="div" marginX={"-1rem"}>
                        {INPUT_LIST_SIGNUP_FORM.map((_row, _rowIndex) => {
                            return (
                                <Box
                                    component="div"
                                    display="flex"
                                    key={_rowIndex}
                                >
                                    {_row.row.length !== 0 &&
                                        _row.row.map((_el, _i) => {
                                            return (
                                                <Box
                                                    component="div"
                                                    display=""
                                                    className={clsx(
                                                        _row.row.length > 1
                                                            ? _row.row
                                                                  .length ===
                                                              _i + 1
                                                                ? "pr-3"
                                                                : "pr-3 pl-3"
                                                            : "px-3",
                                                        _row.row.length > 1 &&
                                                            _i === 0
                                                            ? "pl-3"
                                                            : ""
                                                    )}
                                                    width="100%"
                                                    key={_i}
                                                >
                                                    <CustomInput
                                                        name={_el.name}
                                                        placeholder={
                                                            _el.placeholder
                                                        }
                                                        type={_el.type}
                                                        required={_el.required}
                                                        label={_el.label}
                                                        fullWidth={true}
                                                        className={clsx(
                                                            "border--primary__2  font__size--md"
                                                        )}
                                                        key={_el.name}
                                                        handleInputChange={
                                                            handleChange
                                                        }
                                                        isPassword={
                                                            _el.type ===
                                                            "password"
                                                        }
                                                        selectList={
                                                            _el.type ===
                                                            "select"
                                                                ? _el.list
                                                                : []
                                                        }
                                                        value={user[_el.name]}
                                                        endAdornment={
                                                            _el.endLabel
                                                        }
                                                        startAdornment={
                                                            _el.startLabel
                                                        }
                                                        validation={
                                                            _el.validation
                                                        }
                                                        inputBottomLabel={
                                                            _el.descLabel
                                                        }
                                                        errorMsg={
                                                            errorMsgs[_el.name]
                                                        }
                                                        isError={
                                                            errors.indexOf(
                                                                _el.name
                                                            ) !== -1
                                                        }
                                                    />
                                                </Box>
                                            );
                                        })}
                                </Box>
                            );
                        })}
                    </Box>
                    <Button
                        variant="contained"
                        className="button--primary w-100 p-3 button--large"
                        disableRipple={true}
                        onClick={registerUser}
                        disabled={isRegistering}
                    >
                        {
                            signupButtonLabel[
                                isRegistering ? "registering" : "default"
                            ]
                        }
                    </Button>
                </form>

                <Typography variant="body1" className="font__size--sm">
                    {"By signing up, you agree to Photo’s "}
                    <Link
                        to={commonUrls.login}
                        className="text-decoration__underline"
                    >
                        {"Terms of Service"}
                    </Link>{" "}
                    {" and "}
                    <Link
                        to={commonUrls.login}
                        className="text-decoration__underline"
                    >
                        {"Privacy Policy"}
                    </Link>
                    {"."}
                </Typography>
            </Box>
        </PageWrapper>
    );
}
