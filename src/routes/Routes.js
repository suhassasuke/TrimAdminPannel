import React, { useEffect, useState, Suspense } from "react";
import { Switch, BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import PublicRoute from "./auth/common/PublicRoute";
import CircularProgress from "@material-ui/core/CircularProgress";
import { routeUrls } from "../urls/routeUrls";
import LocalStorageService from "../services/LocalStorage";
import PrivateRoute from "./auth/common/PrivateRoute";
import AppWrapper from "../components/common/PageStructure/AppWrapper";
import axios from "axios";
import { userServices } from "../services/user.services";
import { setAuthDetails } from "../redux/actions/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { apiUrls } from "../urls/apiUrls";
import { checkEmptyObject } from "../utils/helper";

const Header = React.lazy(() => import("../components/common/Header/index"));
const Login = React.lazy(() =>
    import("../components/common/EntryManagement/Login/Login")
);
const Register = React.lazy(() =>
    import("../components/common/EntryManagement/Register/Register")
);
const Dashboard = React.lazy(() => import("../pages/DashBoard"));
const Orders = React.lazy(() => import("../pages/Orders"));

function Routes() {
    const { user_details } = useSelector((state) => state.AuthReducer);
    const [isInitCheck, setIsInitCheck] = useState(false);
    const dispatch = useDispatch();
    const token = LocalStorageService.getAccessToken();

    useEffect(() => {
        if (!isInitCheck) {
            if (token === false) return false;
            else if (!checkEmptyObject(user_details)) {
                setIsInitCheck(true);
                return false;
            }
            axios({
                method: "get",
                url: apiUrls.userUrls.getUserDetailsByRole(LocalStorageService.getRole()),
                headers: {
                    Authorization: `JWT ${token}`
                }
            })
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(setAuthDetails(res.data));
                        setIsInitCheck(true);
                    }
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        userServices.logout();
                        return <Redirect to="/" />;
                    }
                });
        }
    }, [dispatch, isInitCheck, user_details]);
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
                    {isInitCheck && <Header />}
                    <Switch>
                        <PublicRoute
                            path={routeUrls.commonUrls.register}
                            exact
                            render={(props) => (
                                <Register
                                    setIsInitCheck={setIsInitCheck}
                                    {...props}
                                />
                            )}
                        />
                        <PublicRoute
                            path={routeUrls.commonUrls.home}
                            exact
                            render={(props) => (
                                <Login
                                    setIsInitCheck={setIsInitCheck}
                                    {...props}
                                />
                            )}
                        />
                        {isInitCheck && (
                            <PrivateRoute
                                path={routeUrls.commonUrls.dashboard}
                                exact
                                render={(_props) => (
                                    <AppWrapper isSidebar={true}>
                                        <Dashboard {..._props} />
                                    </AppWrapper>
                                )}
                            />
                        )}

                        {isInitCheck && (
                            <PrivateRoute
                                path={routeUrls.commonUrls.orders}
                                exact
                                render={(_props) => (
                                    <AppWrapper isSidebar={true}>
                                        <Orders {..._props} />
                                    </AppWrapper>
                                )}
                            />
                        )}
                        
                    </Switch>
                </Router>
            </Suspense>
        </>
    );
}

export default Routes;
