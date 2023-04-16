import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    // combine all the reducers here
    dummyReducer: (state, _action) => ({ ...state }),
});
