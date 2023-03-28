import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "basket",
    initialState: [],
    reducers: {
        addToBasket: (state, {payload}) => {   
                        
            return [
                ...state,
                payload
            ]      
        },
        delItem: (state, {payload}) => {
            return [
                ...state.filter(elem => elem.id !== payload)
            ]
        },
        increment: (state, {payload}) => {
            const idx = state.findIndex(elem => elem.id === payload)
                state[idx].price += state[idx].price / state[idx].count
                state[idx].count++
        },
        decrement: (state, {payload}) => {
            const idx = state.findIndex(elem => elem.id === payload)
            if(state[idx].count > 1){
                state[idx].price -= state[idx].price / state[idx].count
                state[idx].count--
            }
        },
    }
})

export const selectbasket = state => state.basket

export const { addToBasket, delItem, increment, decrement } = basketSlice.actions

export const baskeetReducer = basketSlice.reducer