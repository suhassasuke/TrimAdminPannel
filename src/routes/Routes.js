import React, { useState, Suspense } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import PublicRoute from "./auth/common/PublicRoute";
import CircularProgress from "@material-ui/core/CircularProgress";
import { commonUrls } from "../urls/routeUrls";
import ToastServiceAlert from "../components/common/ToastServiceAlert";
import { useSelector, useDispatch } from "react-redux";

const Header = React.lazy(() => import("../components/common/Header/index"));
const Login = React.lazy(() =>
    import("../components/common/EntryManagement/Login/Login")
);
const Register = React.lazy(() =>
    import("../components/common/EntryManagement/Register/Register")
);

function Routes(props) {
    const alert = useSelector((state) => state.ToastServiceReducer);

    return (
        <>
            <Suspense
                fallback={
                    <div>
                        <CircularProgress />
                    </div>
                }
            >
                <Router>
                    <Switch>
                        <PublicRoute
                            path={commonUrls.login}
                            exact
                            render={(props) => <Login {...props} />}
                        />
                        <PublicRoute
                            path={commonUrls.register}
                            exact
                            render={(props) => <Register {...props} />}
                        />
                    </Switch>
                    <ToastServiceAlert alert={alert} />
                </Router>
            </Suspense>
        </>
    );
}

export default Routes;
