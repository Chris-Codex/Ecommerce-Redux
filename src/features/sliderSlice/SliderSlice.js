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
            state.value = action.payload > state.length - 1 ? 0 : action.payload;
        },

        prevSlide: (state, action) => {
            state.value = action.payload < 0 ? state.length - 1 : action.payload
        },

        dotSlide: (state, action) => {
         const slide = action.payload
         state.value = slide
        }
    }
})

export default sliderSlice.reducer
export const {nextSlide, prevSlide, dotSlide} = sliderSlice.actions