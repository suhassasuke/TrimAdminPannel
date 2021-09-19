import React, { useState, Suspense } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import PublicRoute from "./auth/common/PublicRoute";
import CircularProgress from "@material-ui/core/CircularProgress";
import { commonUrls } from "../urls/routeUrls";

const Header = React.lazy(() => import("../components/common/Header/index"));
const Login = React.lazy(() =>
    import("../components/common/EntryManagement/Login/Login")
);
const Register = React.lazy(() =>
    import("../components/common/EntryManagement/Register/Register")
);

function Routes(props) {
    const [popupType, setPopupType] = useState("login");
    const [isPopupOpen, setPopupOpen] = useState(false);
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
                </Router>
            </Suspense>
        </>
    );
}

export default Routes;
