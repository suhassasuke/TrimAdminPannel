import createReducer from "../../../utils/createReducer";
import { authConstants } from "../../constants/auth/auth.type";

const initialState = {
    user: {},
    role: null,
	user_details:{},
    authenticated: false
};

export const reducerObj = {
    [authConstants.SET_AUTH_DETAILS]: (prevState, payload) => {
        return {
            user: payload.res,
			user_details: payload.from === "login" ? payload.res.data : payload.res.data[0],
            role: payload.from === "login" ? payload.res.data.user_details.role: payload.res.data[0].role,
            authenticated: true,
        };
    }
};

const AuthReducer = createReducer(initialState, reducerObj);

export default AuthReducer;
