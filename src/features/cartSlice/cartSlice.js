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
                exist.totalPrice += productId.price;
                state.totalAmount++;
                state.totalPrice += productId.price;
            }else {
                state.cart.push({
                    id: productId.id,
                    price: productId.price,
                    text: productId.text,
                    img: productId.img,
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
        },

        removeFromCart: (state, action) => {
            const productId = action.payload;
            
            try{
                const exist = state.cart.find((product) => product.id === productId && product.size === productId.size && product.color === productId.color);
                if(exist.amount === 1){
                    state.cart = state.cart.filter((product) => 
                        product.id !== productId.id ||
                        product.size !== productId.size ||
                        product.color !== productId.color
                    );
                    state.totalAmount--;
                    state.totalPrice -= productId.price;
                }else {
                    exist.amount--;
                    state.totalAmount--;
                    exist.totalPrice -= productId.price;
                    state.totalPrice -= productId.price;
                }
            }catch(err){
                return err
            }
        }
    }
})

export default cartSlice.reducer
export const {addToCart, removeFromCart} = cartSlice.actions