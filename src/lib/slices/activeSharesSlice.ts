import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ActiveSharesInitialState {
    active: string
    openPopup: boolean,
    timeOut: boolean
}

const initialState: ActiveSharesInitialState = {
    active: '',
    openPopup: false,
    timeOut: false
}

const activeSharesSlice = createSlice({
    name: 'activeSharesSlice',
    initialState,
    reducers: {
        setActive: (state: ActiveSharesInitialState, action: PayloadAction<string>) => {
            state.active = action.payload
        },
        closePopup: (state: ActiveSharesInitialState) => {
            state.openPopup = false
        },
        openPopup: (state: ActiveSharesInitialState) => {
            state.openPopup = true
        },
        timeOut: (state: ActiveSharesInitialState) => {
            state.timeOut = true
        }
    }
});

export const activeShares = activeSharesSlice.reducer;
export const {setActive, closePopup, openPopup, timeOut} = activeSharesSlice.actions