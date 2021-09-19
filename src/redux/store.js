import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";

const middlewares = [];
if (process.env.NODE_ENV === "development") {
    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
}
middlewares.push(thunkMiddleware);

// initialize the redux with enhancer by chrome devtools (redux)
const composeEnhancers = composeWithDevTools() || compose;

export const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares), composeEnhancers)
);
