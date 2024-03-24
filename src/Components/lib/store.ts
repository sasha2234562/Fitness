import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {dataSlice} from "@/components/lib/slices/getInfoSlice";
import {activeShares} from "@/components/lib/slices/activeSharesSlice";

const rootReducer = combineReducers({
    slice: dataSlice,
    activeShares: activeShares,
});

export const store = configureStore({
    reducer: rootReducer,
});


export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];