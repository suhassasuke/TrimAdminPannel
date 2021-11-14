import React from "react";
import { Route, Redirect } from "react-router-dom";
import LocalStorageService from "../../../services/LocalStorage";
import { routeUrls } from "../../../urls/routeUrls";

function PrivateRoute(props) {
	console.log(LocalStorageService.getAccessToken(),'---');
    if (!LocalStorageService.getAccessToken()) {
        return <Redirect to={routeUrls.commonUrls.home} />;
    }
    return <Route {...props} />;
}

export default PrivateRoute;
