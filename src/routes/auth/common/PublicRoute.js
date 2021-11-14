import React from "react";
import { Redirect, Route } from "react-router-dom";
import LocalStorageService from "../../../services/LocalStorage";
import { routeUrls } from "../../../urls/routeUrls";

function PublicRoute(props) {
    if (LocalStorageService.getAccessToken()) {
        return <Redirect to={routeUrls.commonUrls.dashboard} />;
    }
    return <Route {...props} />;
}

export default PublicRoute;
