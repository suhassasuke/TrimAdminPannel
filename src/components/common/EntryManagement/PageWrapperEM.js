import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { TrimzLogo } from "../../../assets/images/SVG";
import { spacing20, spacing4 } from "../../../style/init/_variables";
import clsx from "clsx";

const useStyle = makeStyles({
    letterSpacing: {
        letterSpacing: 2
    }
});

export default function PageWrapper(props) {
    const classes = useStyle();
    return (
        <Box
            component="section"
            className="section section__fullscreen--minHeight"
            display="flex"
            alignItems="center"
        >
            <Container maxWidth={"sm"}>
                <Box
                    component="div"
                    marginTop={spacing4}
                    marginBottom={spacing20}
                    textAlign="center"
                    className="em__content--header"
                >
                    <Typography
                        variant="h6"
                        className={clsx(
                            "font__weight--600 mb-2",
                            classes.letterSpacing
                        )}
                    >
                        {"ADMIN"}
                    </Typography>
                    <TrimzLogo color="black" />
                </Box>
                <Box component="div" className="em__content--body">
                    {props.children}
                </Box>
            </Container>
        </Box>
    );
}
