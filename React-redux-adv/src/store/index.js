import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./ui-slice";
import cartSliceReducer from "./cart-slice";

const store = configureStore({
    reducer: {uiSliceKey: uiSliceReducer, cartSliceKey: cartSliceReducer}
})

export default store;