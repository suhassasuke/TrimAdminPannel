import React, { useState, Suspense } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import PublicRoute from "./auth/common/PublicRoute";
import CircularProgress from "@material-ui/core/CircularProgress";
import { commonUrls } from "../urls/routeUrls";
import LocalStorageService from "../services/LocalStorage";
import PrivateRoute from "./auth/common/PrivateRoute";

const Header = React.lazy(() => import("../components/common/Header/index"));
const Login = React.lazy(() =>
    import("../components/common/EntryManagement/Login/Login")
);
const Register = React.lazy(() =>
    import("../components/common/EntryManagement/Register/Register")
);
const Dashboard = React.lazy(() =>
    import("../components/DashBoard")
);

function Routes() {
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
                    {LocalStorageService.getAccessToken("tza_access_token") && (
                        <Header />
                    )}
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
                        <PrivateRoute
                            path="/"
                            exact
                            render={(_props) => <Dashboard {..._props} />}
                        />
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
}

export default Routes;
