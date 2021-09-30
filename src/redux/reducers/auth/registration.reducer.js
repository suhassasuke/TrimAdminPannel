import createReducer from "../../../utils/createReducer";
import { registrationConstants } from "../../constants/auth/registration.type";
import { API_START, API_END, API_ERROR } from "../../constants/common/api.type";

const initialState = {
    isRegistering: false,
    isRegistered: false,
    isError: false,
    userDetails: {
        first_name: "",
        last_name: "",
        email: "",
        number: "",
        gender: "",
        year_of_experience: "",
        password: ""
    },
    errors: [],
    errorMsgs: {}
};

const reducerObj = {
    [API_START]: (prevState, payload) => {
        if (payload === "REGISTER_REQUEST") {
            return {
                isRegistering: true,
                isRegistered: false,
                isError: false
            };
        }
    },
    [API_END]: (prevState, payload) => {
        if (payload === "REGISTER_REQUEST") {
            return {
                isRegistering: false
            };
        }
    },

    [registrationConstants.REGISTER_SUCCESS]: (prevState, payload) => {
        return {
            isRegistered: true,
            isError: false
        };
    },
    [registrationConstants.REGISTER_FAILURE]: (prevState, payload) => {
        return {
            isRegistered: false,
            isError: true
        };
    },
    [registrationConstants.ERROR_UPDATE]: (prevState, payload) => {
        return {
            errors: payload
        };
    },
    [registrationConstants.ERROR_MSG_UPDATE]: (prevState, payload) => {
        return {
            errorMsgs: payload
        };
    },
    [registrationConstants.UPDATE_USERDETAILS]: (prevState, payload) => {
        return {
            userDetails: payload
        };
    }
};

const RegistrationReducer = createReducer(initialState, reducerObj);

export default RegistrationReducer;
