import { createSlice } from "@reduxjs/toolkit";

export const slicer = createSlice({
    name: "demo",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const { increment, decrement } = slicer.actions;

export default slicer.reducer