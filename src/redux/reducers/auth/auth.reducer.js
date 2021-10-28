import createReducer from "../../../utils/createReducer";
import { authConstants } from "../../constants/auth/auth.type";

const initialState = {
    user: {},
    role: null,
    authenticated: false
};

export const reducerObj = {
    [authConstants.SET_AUTH_DETAILS]: (prevState, payload) => {
        return {
            user: payload,
            role: payload.data.user_details.role,
            authenticated: true
        };
    }
};

const AuthReducer = createReducer(initialState, reducerObj);

export default AuthReducer;
