import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ActiveSharesInitialState {
    active: string
}

const initialState: ActiveSharesInitialState = {
    active: ''
}

const activeSharesSlice = createSlice({
    name: 'activeSharesSlice',
    initialState,
    reducers: {
        setActive: (state: ActiveSharesInitialState, action: PayloadAction<string>) => {
            state.active = action.payload
        }
    }
});

export const activeShares = activeSharesSlice.reducer;
export const {setActive}  = activeSharesSlice.actions