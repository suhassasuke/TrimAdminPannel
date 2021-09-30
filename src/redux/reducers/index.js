import { combineReducers } from "redux";

import RegistrationReducer from "./auth/registration.reducer";
import ToastServiceReducer from "./common/ToastService.reducer";

const rootReducer = combineReducers({
    RegistrationReducer,
    ToastServiceReducer
});

export default rootReducer;
