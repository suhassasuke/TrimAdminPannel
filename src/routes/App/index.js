import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Routes from "../Routes";
import { useEffect } from "react";
import { ToastService } from "../../redux/services/toast.services";
import { toastActions } from "../../redux/actions/common/ToastService.action";
import { getToastMessage } from "../../utils/helper";

const App = (props) => {
    const history = useHistory();

    useEffect(() => {
        // history.listen((location, action) => {
        //     // clear alert on location change
        //     dispatch(toastActions.clear());
        // });
    }, []);

    return (
        <StylesProvider injectFirst>
            <div className="App">
                <Router>
                    <Routes />
                </Router>
            </div>
            {alert.message && getToastMessage(alert)}
        </StylesProvider>
    );
};

export default App;
