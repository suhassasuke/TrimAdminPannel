import { apiUrls } from "../../../urls/apiUrls";
import { authConstants } from "../../constants/auth/auth.type";
import actionCreator from "../common/actionCreator";

const setAuthDetails = (res, from = "") => {
    return {
        type: authConstants.SET_AUTH_DETAILS,
        payload: { res, from }
    };
};

const setProfilePicture = (role, data) => {
    return actionCreator({
        method: "PATCH",
        data,
        url: apiUrls.userUrls.profile_pic_update,
        onSuccess: (resp) => success(resp),
        onFailure: (error) => failure(error),
        label: authConstants.UPDATE_PROFILE_PICTURE
    });

    function success(resp) {
        console.log(resp);
        return {
            type: authConstants.UPDATE_PROFILE_PICTURE_SUCCESS,
            payload: resp
        };
    }
    function failure(error) {
        return {
            type: authConstants.UPDATE_PROFILE_PICTURE_FAILURE,
            payload: error
        };
    }
};

export const authUserActions = {
    setAuthDetails,
    setProfilePicture
};
