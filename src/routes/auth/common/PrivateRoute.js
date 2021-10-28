import React from "react";
import { Route, Redirect } from "react-router-dom";
import LocalStorageService from "../../../services/LocalStorage";
import { commonUrls } from "../../../urls/routeUrls";

function PrivateRoute(props) {
    if (!LocalStorageService.getAccessToken()) {
        return <Redirect to={commonUrls.login} />;
    }
    return <Route {...props} />;
}

export default PrivateRoute;
