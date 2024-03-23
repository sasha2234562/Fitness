import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {api} from "@/api";

export const get = createAsyncThunk(
    'get data',
    async () => {
        try {
            const res = await api
            return (res.data)
        } catch (e) {
            console.log(e);
        }
    }
);

export interface Interface {
    "name": string,
    "price": number,
    "lengthInDays": number,
    "isPopular": boolean,
    "isEndless": boolean,
    "isDiscount": boolean,
    "nonDiscountId": null,
    "id": string,
    "ownerId": string,
    "statusId": null,
    "creationDateTime": string,
    "deleted": boolean
}


export interface InitialState {
    isContent: Interface[]
    isPopupContent: Interface[]
}

const initialState: InitialState = {
    isContent: [],
    isPopupContent: []
}
const slice = createSlice({
    initialState,
    name: 'Slice',
    reducers: {},
    extraReducers: builder => {
        builder.addCase(get.fulfilled, (state, action: PayloadAction<Interface[]>) => {
                 state.isContent = action.payload.filter(i => !i.isDiscount);
                 state.isPopupContent = action.payload.filter(i => i.isDiscount);
        });
    }
});

export const dataSlice = slice.reducer;