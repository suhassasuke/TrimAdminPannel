import { authConstants } from "../../constants/auth/auth.type";

export const setAuthDetails = (res, from = "") => {
    return {
        type: authConstants.SET_AUTH_DETAILS,
        payload: { res, from }
    };
};
