import petCounter from "./petCounter";
import petFavoriteCounter from "./petFavorite";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
    petCounter,
    petFavoriteCounter,
});

export default reducers;