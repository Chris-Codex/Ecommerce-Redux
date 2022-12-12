import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './sliderSlice/SliderSlice';


export const store = configureStore({
    reducer: {
        slider: sliderReducer 
    }
})