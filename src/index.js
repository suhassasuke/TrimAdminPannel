import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core";
import __globals from "./style/init/__globals";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then(function (registration) {
            console.log(
                "Registration successful, scope is:",
                registration.scope
            );
        })
        .catch(function (err) {
            console.log("Service worker registration failed, error:", err);
        });
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={__globals}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
