import React from "react";
import { Redirect, Route } from "react-router-dom";
import LocalStorageService from "../../../services/LocalStorage";

function PublicRoute(props) {
    if (LocalStorageService.getAccessToken()) {
        return <Redirect to={"/"} />;
    }
    return <Route {...props} />;
}

export default PublicRoute;
