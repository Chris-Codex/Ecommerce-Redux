import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/data";

console.log("DATA", storeData)


const initialState = {
 filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
 singleProduct: JSON.parse(sessionStorage.getItem("oneProduct")) || storeData
}

const productsSlice = createSlice({
    name: "products",
    initialState,

    reducers: {
        filterProducts: (state, action) => {  
            try{
                const filtered = storeData.filter((product) => product.type === action.payload);
                state.filteredProducts = filtered;
                const saveState = JSON.stringify(filtered);
                sessionStorage.setItem("filteredData", saveState)
            }catch(err){
                return err
            }
        },

        singleProduct: (state, action) => {
            try {
                const oneProduct = storeData.filter((product) => product.id === action.payload);
                state.singleProduct = oneProduct;
                const saveState = JSON.stringify(oneProduct)
                sessionStorage.setItem("oneProduct", saveState)
            } catch(err) {
                return err
            }
        }


    }
})

export default productsSlice.reducer
export const {filterProducts, singleProduct} = productsSlice.actions