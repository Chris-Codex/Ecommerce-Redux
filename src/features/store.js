import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './sliderSlice/SliderSlice';
import productsReducer from './productsSlice/productSlice';
import cartReducer from './cartSlice/cartSlice';




export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        products: productsReducer,
        cart: cartReducer 
    }
})