import { Modal, Box, Backdrop, Fade } from "@material-ui/core";
import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SigninSignupHeader from "../../Users/SignInSignUp/SignInSignUpHeader";
import "./index.scss";

export default function ModalEM(props) {
    const {
        popupType = "login",
        ispopupOpen = true,
        setPopupOpen,
        setPopupType
    } = props;
    React.useEffect(() => {
        setPopupOpen(ispopupOpen);
    }, []);
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="d-flex align-items-start justify-content-center SignInSignUp__popup"
            open={ispopupOpen}
            onClose={() => setPopupOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <Fade in={ispopupOpen}>
                <Box
                    component="div"
                    className="modalContainer"
                >
                    <Box
                        component="div"
                        className="background__white borderRadius__4 py-4 px-3 modalWrapper"
                    >
                        <SigninSignupHeader />
                        {popupType === "login" && (
                            <SignIn setPopupType={setPopupType} />
                        )}
                        {popupType === "register" && (
                            <SignUp setPopupType={setPopupType} />
                        )}
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};