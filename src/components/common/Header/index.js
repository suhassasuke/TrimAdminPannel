import {
    Avatar,
    Badge,
    Box,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/trimz_logo.svg";
import { ReactComponent as Notification } from "../../../assets/images/bell.svg";
import { ReactComponent as Mail } from "../../../assets/images/mail.svg";
import { ReactComponent as Setting } from "../../../assets/images/settings.svg";
import { Link } from "react-router-dom";
import "./header.scss";
import { routeUrls } from "../../../urls/routeUrls";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../../utils/helper";

export default function Header() {
	const {
        user_details: {
            profile_image,
            user_details: { first_name }
        }
    } = useSelector((state) => state.AuthReducer);
    return (
        <Grid container className="tza__header" id="TZ__header">
            <Container maxWidth={false}>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    height="100%"
                    className="tz__header--container"
                >
                    <Box component="div">
                        <Link to="/">
                            <Box
                                className="tza__header--logo__wrapper"
                                display="flex"
                                alignItems="center"
                                component="div"
                            >
                                <Logo className="tza__header--logo_img" />
                                <Typography
                                    variant="caption"
                                    className="tza__header--logo_text"
                                >
                                    {"Admin"}
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    <Box
                        className="tza__header--links__wrapper"
                        component="div"
                        display="flex"
                        alignItems="center"
                    >
                        <Box
                            component="div"
                            display="inline-flex"
                            className="tza__header--notifications tza__header--icons"
                        >
                            <Badge color="default" badgeContent={0}>
                                <Notification />
                            </Badge>
                        </Box>
                        <Box
                            component="div"
                            display="inline-flex"
                            className="tza__header--messages tza__header--icons"
                        >
                            <Badge color="default" badgeContent={0}>
                                <Mail />
                            </Badge>
                        </Box>
                        <Link to={routeUrls.profile.individual}>
                            <Box
                                component="div"
                                className="tza__header--profile"
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src={profile_image}
                                />
                                <Typography
                                    variant="caption"
                                    className="tza__header--username"
                                >
									{capitalizeFirstLetter(first_name)}
                                </Typography>
                            </Box>
                        </Link>
                        {/* <Box
                            component="div"
                            display="inline-flex"
                            className="tza__header--settings tza__header--icons"
                        >
                            <Setting />
                        </Box> */}
                    </Box>
                </Box>
            </Container>
        </Grid>
    );
}
