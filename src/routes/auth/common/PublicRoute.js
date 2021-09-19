import React from "react";
import { Redirect, Route } from "react-router-dom";

function PublicRoute(props) {
    // return <Redirect to="/" />
    return <Route {...props} />;
}

export default PublicRoute;
