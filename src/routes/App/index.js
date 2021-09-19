import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import { useState, useEffect } from "react";
import { getToken, onMessageListener } from "../../services/Firebase";
import { Snackbar } from "@material-ui/core";

const App = () => {
    const [showHeader, setShowHeader] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [isTokenFound, setTokenFound] = useState(false);
    const [notification, setNotification] = useState({ title: "", body: "" });
    const [showNotification, setShowNotification] = useState(false);
    useEffect(() => {
        getToken(setTokenFound);
    }, []);
    onMessageListener()
        .then((payload) => {
            setShowNotification(true);
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body
            });
            console.log(payload);
        })
        .catch((err) => console.log("failed: ", err));
    return (
        <StylesProvider injectFirst>
            <div className="App">
                <Router>
                    <Routes
                        showHeader={showHeader}
                        setShowHeader={setShowHeader}
                        showLoginPopup={showLoginPopup}
                        setShowLoginPopup={setShowLoginPopup}
                    />
                </Router>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    open={showNotification}
                    onClose={() => setShowNotification(false)}
                    message={notification.body}
                    key={"bottomright"}
                />
            </div>
        </StylesProvider>
    );
};

export default App;
