import { combineReducers } from "redux";

import RegistrationReducer from "./auth/registration.reducer";
import ToastServiceReducer from "./common/ToastService.reducer";
import LoginReducer from "./auth/login.reducer";
import AuthReducer from "./auth/auth.reducer";
import OrdersReducer from "./Orders/orders.reducer";

const rootReducer = combineReducers({
	AuthReducer,
    RegistrationReducer,
    ToastServiceReducer,
    LoginReducer,
	OrdersReducer
});

export default rootReducer;
