import createReducer from "../../../utils/createReducer";
import { toastConstants } from "../../constants/common/ToastService.type";

const initialState = {};

const reducerObj = {
    [toastConstants.SUCCESS]: (prevState, payload) => {
        return {
            type: "success",
            message: payload
        };
    },
    [toastConstants.ERROR]: (prevState, payload) => {
        return {
            type: "error",
            message: payload
        };
    },
    [toastConstants.CLEAR]: (prevState, payload) => {
        return { ...initialState };
    }
};

const ToastServiceReducer = createReducer(initialState, reducerObj);

export default ToastServiceReducer;
