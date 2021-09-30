import { toastConstants } from "../../constants/common/ToastService.type";

export const toastActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: toastConstants.SUCCESS, payload: message };
}

function error(message) {
    return { type: toastConstants.ERROR, payload: message };
}

function clear() {
    return { type: toastConstants.CLEAR };
}
