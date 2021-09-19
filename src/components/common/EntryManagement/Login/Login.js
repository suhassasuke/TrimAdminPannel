import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import CustomInput from "../../CustomInput";
import { ReactComponent as Google } from "../../../../assets/images/google.svg";
import { ReactComponent as Facebook } from "../../../../assets/images/facebook.svg";
import { useHistory } from "react-router-dom";
import { commonUrls } from "../../../../urls/routeUrls";
import PageWrapper from "../PageWrapperEM";
import "../styleEM.scss";

export default function SignIn(props) {
    const history = useHistory();
    const INPUT_LIST_SIGNIN_FORM = [
        {
            name: "username",
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
    return (
        <>
            <PageWrapper>
                <Box component="div">
                    <form className="signin_form mb-4" autoComplete="off">
                        {INPUT_LIST_SIGNIN_FORM.map((el) => {
                            return (
                                <CustomInput
                                    name={el.name}
                                    placeholder={el.placeholder}
                                    type={el.type}
                                    required={el.required}
                                    label={el.label}
                                    fullWidth={true}
                                    className={
                                        "mb-4 border--primary__2 font__size--md"
                                    }
                                />
                            );
                        })}
                        <Button
                            variant="contained"
                            className="button--primary w-100 p-3"
                            disableRipple={true}
                        >
                            Log in
                        </Button>
                    </form>

                    <Grid container spacing={4} className="mb-2">
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
                    </Grid>
                    {/* <Typography variant="body1" className="font__size--sm">
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
                    </Typography> */}
                </Box>
            </PageWrapper>
        </>
    );
}
