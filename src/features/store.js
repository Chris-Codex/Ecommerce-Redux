import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './sliderSlice/SliderSlice';
import productsReducer from './productsSlice/productSlice';



export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productsReducer 
    }
})