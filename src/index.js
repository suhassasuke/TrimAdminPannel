import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";
import App from "./routes/App";
import { Provider } from "react-redux";
import { store } from "./redux/store"; // importing the redux store

import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core";
import __globals from "./style/init/__globals";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={__globals}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
