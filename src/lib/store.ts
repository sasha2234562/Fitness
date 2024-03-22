import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dataSlice } from "./slice.ts";

const rootReducer = combineReducers({
    slice: dataSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});


export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];