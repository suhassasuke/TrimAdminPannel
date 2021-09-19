import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/trimz_logo.svg";
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header(props) {
    const { loggedin = false } = props;
        
    return (
        <Grid container className="tz__header" id="TZ__header">
            <Container maxWidth={false}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    className="tz__header--container pt-5"
                >
                    <Box className="tz__header--left">
                        <Box className="tz__header--logo_container">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </Box>
                        <Box className="tz__header--search_container"></Box>
                    </Box>
                    <Box className="tz__header--right">
                        
                    </Box>
                </Box>
            </Container>
        </Grid>
    );
}
