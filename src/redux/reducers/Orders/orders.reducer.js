import createReducer from "../../../utils/createReducer";
import { API_START } from "../../constants/common/api.type";
import { ordersConstants } from "../../constants/Orders/orders.type";

const initialState = {
    fetchedCompletedOrders: [],
    fetchedUpcomingOrders: [],
    fetchedDeclinedOrders: [],
    fetchedPendingOrders: [],
    isLoading: {
        completed: false,
        upcoming: false,
        declined: false,
        pending: false
    },
    disable: {
        completed: false,
        upcoming: false,
        declined: false,
        pending: false
    },
	reRender: false
};
export const reducerObj = {
    [API_START]: (prevState, payload) => {
        if (payload === ordersConstants.GET_ORDERS_COMPLETED)
            return {
                isLoading: {
                    ...prevState.isLoading,
                    completed: true
                },
				reRender: false,
            };
        if (payload === ordersConstants.GET_ORDERS_UPCOMING)
            return {
                isLoading: {
                    ...prevState.isLoading,
                    upcoming: true
                },
				reRender: false,
            };
        if (payload === ordersConstants.GET_ORDERS_PENDING)
            return {
                isLoading: {
                    ...prevState.isLoading,
                    pending: true
                },
				reRender: false,
            };
        if (payload === ordersConstants.GET_ORDERS_DECLINED)
            return {
                isLoading: {
                    ...prevState.isLoading,
                    declined: true
                },
				reRender: false,
            };
        if (payload === ordersConstants.ACCEPT_DECLINE_SERVICE)
            return {
                disable: {
                    ...prevState.disable,
                    pending: true
                },
				reRender: false,
            };
    },
    [ordersConstants.SET_ORDERS_COMPLETED]: (prevState, payload) => {
        return {
            fetchedCompletedOrders: payload.bookings_history,
            isLoading: {
                ...prevState.isLoading,
                completed: false
            }
        };
    },
    [ordersConstants.SET_ORDERS_UPCOMING]: (prevState, payload) => {
        return {
            fetchedUpcomingOrders: payload.bookings_history,
            isLoading: {
                ...prevState.isLoading,
                upcoming: false
            }
        };
    },
    [ordersConstants.SET_ORDERS_DECLINED]: (prevState, payload) => {
        return {
            fetchedDeclinedOrders: payload.bookings_history,
            isLoading: {
                ...prevState.isLoading,
                declined: false
            }
        };
    },
    [ordersConstants.SET_ORDERS_PENDING]: (prevState, payload) => {
        return {
            fetchedPendingOrders: payload.bookings_history,
            isLoading: {
                ...prevState.isLoading,
                pending: false
            }
        };
    },
    [ordersConstants.SUCCESS_ACCEPT_DECLINE_SERVICE]: (prevState, payload) => {
        return {
            reRender: true,
			disable: {
				...prevState.disable,
				pending: false
			}
        };
    },
};

const OrdersReducer = createReducer(initialState, reducerObj);

export default OrdersReducer;
