import { apiUrls } from "../../../urls/apiUrls";
import { ordersConstants } from "../../constants/Orders/orders.type";
import actionCreator from "../common/actionCreator";

const getOrdersByTab = (token, method, data) => {
    let type = "",
        label = "";
    switch (data.tab) {
        case "completed":
            label = ordersConstants.GET_ORDERS_COMPLETED;
            type = ordersConstants.SET_ORDERS_COMPLETED;
            break;
        case "upcoming":
            label = ordersConstants.GET_ORDERS_UPCOMING;
            type = ordersConstants.SET_ORDERS_UPCOMING;
            break;
        case "declined":
            label = ordersConstants.GET_ORDERS_DECLINED;
            type = ordersConstants.SET_ORDERS_DECLINED;
            break;
        case "pending":
            label = ordersConstants.GET_ORDERS_PENDING;
            type = ordersConstants.SET_ORDERS_PENDING;
            break;

        default:
            break;
    }
    return actionCreator({
        method,
        url: apiUrls.ordersUrls.getOrdersByStatus(data.status, data.id),
        accessToken: token,
        onSuccess: setOrdersCompleted,
        onFailure: () => console.log("Failed to fetch Reports."),
        label: label
    });
    function setOrdersCompleted(resData) {
        return {
            type,
            payload: resData
        };
    }
};
const orderAcceptDecline = (token, data) => {
    return actionCreator({
        method: "POST",
        url: apiUrls.ordersUrls.accept_decline_service,
        accessToken: token,
        onSuccess: setAcceptDeclineSuccess,
		data,
        onFailure: () => console.log("Failed to fetch Reports."),
        label: ordersConstants.ACCEPT_DECLINE_SERVICE
    });
    function setAcceptDeclineSuccess(resData) {
        return {
            type: ordersConstants.SUCCESS_ACCEPT_DECLINE_SERVICE,
            payload: resData
        };
    }
};

export const ordersActions = {
    getOrdersByTab,
	orderAcceptDecline
};
