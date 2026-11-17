import { createSlice } from "@reduxjs/toolkit";

const productionSlice = createSlice({
    name: "prod",
    initialState: {
        link: "http://localhost:5001"
    }
});

export default productionSlice.reducer;