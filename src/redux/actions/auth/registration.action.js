import { registrationConstants } from "../../constants/auth/registration.type";

const updateErrors = (payload) => {
    return {
        type: registrationConstants.ERROR_UPDATE,
        payload
    };
};
const updateErrorMsgs = (payload) => {
    return {
        type: registrationConstants.ERROR_MSG_UPDATE,
        payload
    };
};
const updateUserDetails = (payload) => {
    return {
        type: registrationConstants.UPDATE_USERDETAILS,
        payload
    };
};

export const registrationActions = {
    updateErrors,
    updateErrorMsgs,
    updateUserDetails
};
