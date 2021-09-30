import createReducer from "../../../utils/createReducer";
import { API_START, API_END } from "../../constants/common/api.type";

const initialState = {
    isLoggingIn: null,
    isLoggedIn: null,
    userDetails: {
        email: "",
        password: ""
    }
};

export const reducerObj = {
    [API_START]: (prevState, payload) => {
        if (payload === "") {
        }
    },
    [API_END]: (prevState, payload) => {
        if (payload === "") {
        }
    }
};

const LoginReducer = createReducer(initialState, reducerObj);

export default LoginReducer;
