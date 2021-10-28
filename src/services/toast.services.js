import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";

toast.configure();

const ToastService = (function () {
    function _notify(
        message,
        position = toast.POSITION.TOP_RIGHT,
        className = ""
    ) {
        return toast.info(message, {
            autoClose: true,
            className: clsx("toast_notify_error", className),
            position
        });
    }

    function _success(
        message,
        position = toast.POSITION.TOP_RIGHT,
        className = ""
    ) {
        return toast.success(message, {
            autoClose: true,
            className: clsx("toast_notify_success", className),
            position
        });
    }

    function _error(
        message,
        position = toast.POSITION.TOP_RIGHT,
        className = ""
    ) {
        return toast.error(message, {
            autoClose: true,
            className: clsx("toast_notify_error", className),
            position
        });
    }
    function _clearAll() {
        return toast.clearWaitingQueue();
    }

    return {
        notify: _notify,
        success: _success,
        error: _error,
        clear: _clearAll
    };
})();

export default ToastService;
