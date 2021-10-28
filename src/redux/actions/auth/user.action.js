import { userUrls } from "../../../urls/apiUrls";
import { userConstants } from "../../constants/auth/user.constants";
import actionCreator from "../common/actionCreator";

function login(email, password, from) {
    return actionCreator({
        method: "POST",
        data: { email, password },
        url: userUrls.getUrlByUserType("freelancers").LOGIN,
        onSuccess: (resp) => success(resp),
        onFailure: (error) => failure(error),
        label: userConstants.LOGIN_REQUEST
    });

    function success(resp) {
		console.log(resp);
        return { type: userConstants.LOGIN_SUCCESS, payload: { resp, from } };
    }
    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, payload: error };
    }
}

function register(data, type) {
    return actionCreator({
        method: "POST",
        data,
        url: userUrls.getUrlByUserType(type).REGISTER,
        onSuccess: (resp) => success(resp),
        onFailure: (error) => failure(error),
        label: userConstants.REGISTER_REQUEST
    });
    function success(resp) {
        return { type: userConstants.REGISTER_SUCCESS, payload: resp };
    }
    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE };
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

export const userActions = { login, register, remove };
