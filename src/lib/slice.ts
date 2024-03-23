import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

export interface InitialState {
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

const initialState: InitialState[] = [];

const slice = createSlice({
    initialState,
    name: 'Slice',
    reducers: {},
    extraReducers: builder => {
        builder.addCase(get.fulfilled, (_, action: PayloadAction<InitialState[]>) => {
            return action.payload;
        });
    }
});

export const dataSlice = slice.reducer;