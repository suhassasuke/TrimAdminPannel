export default function createReducer(_initialState, _reducer) {
    return function (
        state = _initialState,
        action = { type: null, payload: {} }
    ) {
        const reducer = _reducer;

        // if matched case has a function as a value, emit the function with prevState and action.payload passed as a parameter
        // otherwise, object, return the value
        if (
            reducer.hasOwnProperty(action.type) &&
            (typeof reducer[action.type] === "function" ||
                typeof reducer[action.type] === "object")
        ) {
            const updated =
                typeof reducer[action.type] === "function"
                    ? reducer[action.type](state, action.payload)
                    : reducer[action.type];
            if (state instanceof Array) {
                return [...state, ...updated];
            }
            return { ...state, ...updated };
        }
        return state;
    };
}
