import { createSlice } from "@reduxjs/toolkit"
import { data } from './../../assets/data/data';


const initialState = {
    value: 0,
    length: data.length
}

const sliderSlice = createSlice({
    name: "slider",
    initialState,

    reducers: {
        nextSlide: (state, action) => {
            console.log("action", action)
            console.log("state", state)
            state.value = action.payload > state.length - 1 ? 0 : action.payload;
        },

        prevSlide: (state, action) => {
            state.value = action.payload < 0 ? state.length - 1 : action.payload
        },

        dotSlide: (state, action) => {
         const slide = action.payload
         console.log("Dot", slide)
         state.value = slide
        }
    }
})

export default sliderSlice.reducer
export const {nextSlide, prevSlide, dotSlide} = sliderSlice.actions