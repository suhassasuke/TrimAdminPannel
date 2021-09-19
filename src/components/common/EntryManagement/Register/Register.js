import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import CustomInput from "../../CustomInput";
import { Link } from "react-router-dom";
import { commonUrls } from "../../../../urls/routeUrls";
import PageWrapper from "../PageWrapperEM";

export default function SignUp(props) {
    const INPUT_LIST_SIGNUP_FORM = [
        {
            name: "name",
            type: "text",
            label: "First and Last name",
            required: true,
            placeholder: "First and Last name"
        },
        {
            name: "username",
            type: "email",
            label: "Email Address",
            required: true,
            placeholder: "Email Address"
        },
        {
            name: "number",
            type: "text",
            label: "Mobile Number",
            required: true,
            placeholder: "Mobile Number"
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            required: true,
            placeholder: "Password"
        }
    ];
    return (
        <PageWrapper>
            <Box component="div">
                <form className="signin_form mb-4" autoComplete="off">
                    {INPUT_LIST_SIGNUP_FORM.map((el) => {
                        return (
                            <CustomInput
                                name={el.name}
                                placeholder={el.placeholder}
                                type={el.type}
                                required={el.required}
                                label={el.label}
                                fullWidth={true}
                                className={
                                    "mb-4 border--primary__2  font__size--md"
                                }
                            />
                        );
                    })}
                    <Button
                        variant="contained"
                        className="button--primary w-100 p-3 button--large"
                        disableRipple={true}
                    >
                        Sign Up
                    </Button>
                </form>

                <Typography variant="body1" className="font__size--sm">
                    {"By signing up, you agree to Photo’s "}
                    <Link
                        to={commonUrls.signup}
                        className="text-decoration__underline"
                    >
                        {"Terms of Service"}
                    </Link>{" "}
                    {" and "}
                    <Link
                        to={commonUrls.signup}
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
