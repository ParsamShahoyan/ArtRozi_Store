import { configureStore } from "@reduxjs/toolkit"
import { baskeetReducer } from "./slices/basketSlice"

const store = configureStore({
    reducer: {
        basket: baskeetReducer
    }
})

export default store