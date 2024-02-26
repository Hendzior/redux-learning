import {configureStore} from "@reduxjs/toolkit";
import {formReducer, changeName, changeCost} from "./slices/formSlice";
import {dronesReducer, changeSearchTerm, addDrone, removeDrone} from "./slices/dronesSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        drones: dronesReducer,
        form: formReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export {
    store,
    changeName,
    changeCost,
    changeSearchTerm,
    addDrone,
    removeDrone
}