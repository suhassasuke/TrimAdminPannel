import createReducer from "../../../utils/createReducer";
import { userConstants } from "../../constants/auth/user.constants";

const initialState = {
    status: null,
    redirect: null,
    userDetails: null,
};

export const reducerObj = {
    [userConstants.LOGIN_SUCCESS]: (prevState, payload) => {
        return {
            status: 200,
            redirect: payload.redirectTo,
            userDetails: payload.resp,
        };
    }
};

const LoginReducer = createReducer(initialState, reducerObj);

export default LoginReducer;
