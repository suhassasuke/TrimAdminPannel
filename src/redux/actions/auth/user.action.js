import { userUrls } from "../../../urls/Users/apiUrls";
import { userConstants } from "../../constants/auth/user.constants";
import actionCreator from "../common/actionCreator";

function login(username, password, from) {
    return actionCreator({
        method: "POST",
        data: { username, password },
        url: userUrls.LOGIN,
        onSuccess: (resp) => success(resp),
        onFailure: (error) => failure(error),
        label: userConstants.LOGIN_REQUEST
    });
    function success(resp) {
        return { type: userConstants.LOGIN_SUCCESS, payload: resp };
    }
    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, payload: error };
    }
}

function logout() {
    localStorage.removeItem("tz_access_token");
    return { type: userConstants.LOGOUT, payload: {} };
}

function register(data) {
    return actionCreator({
        method: "POST",
        data,
        url: userUrls.REGISTER,
        onSuccess: (resp) => success(resp),
        onFailure: (error) => failure(error),
        label: userConstants.REGISTER_REQUEST
    });
    function success(resp) {
        return { type: userConstants.REGISTER_SUCCESS, payload: resp };
    }
    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, payload: error };
    }
}

function remove(data) {
    return actionCreator({
        method: "POST",
        data,
        url: userUrls.DELETE,
        onSuccess: (resp) => success(resp),
        onFailure: (error) => failure(error),
        label: userConstants.DELETE_REQUEST
    });
    function success(resp) {
        return { type: userConstants.DELETE_SUCCESS, payload: resp };
    }
    function failure(error) {
        return { type: userConstants.DELETE_FAILURE, payload: error };
    }
}

export { login, logout, register, remove };
