import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";

const App = () => {
    return (
        <StylesProvider injectFirst>
            <div className="App">
                <Router>
                    <Routes />
                </Router>
            </div>
        </StylesProvider>
    );
};

export default App;
