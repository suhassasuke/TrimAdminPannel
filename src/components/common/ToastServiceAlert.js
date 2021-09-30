import React from "react";
import ToastService from "../../redux/services/toast.services";

const ToastServiceAlert = (props) => {
    const getToastMessage = (type, message) => {
        switch (type) {
            case "success":
                ToastService.success(message);
                break;
            case "error":
                ToastService.error(message);
                break;
            case "notify":
                ToastService.notify(message);
                break;
            case "clear":
                ToastService.clear();
                break;
            default:
                ToastService.clear();
                break;
        }
    };
    React.useEffect(() => {
        if (props.alert.message) {
            getToastMessage(props.alert.type, props.alert.message);
        }
        return getToastMessage("clear");
    }, [props.alert]);
    return null;
};

export default ToastServiceAlert;
