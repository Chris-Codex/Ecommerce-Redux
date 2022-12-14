import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        addToCart: (state, action) => {
           const productId = action.payload
           
           try{ 
            const exist = state.cart.find((product) => product.id === productId && product.size === productId.size && product.color === productId.color)
            if (exist){
                exist.amount++;
                state.totalAmount++;
                exist.totalPrice += productId.price;
                state.totalPrice += productId.price;
            }else {
                state.cart.push({
                    id: productId.id,
                    price: productId.price,
                    size: productId.size,
                    amount: 1,
                    totalPrice: productId.price,
                    name: productId.name,
                    color: productId.color
                })
                state.totalAmount++;
                state.totalPrice += productId.price;
            }
           }catch(err){
            return err
           }
        }
    }
})

export default cartSlice.reducer
export const {addToCart} = cartSlice.actions