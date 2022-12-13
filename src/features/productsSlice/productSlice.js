import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/data";

console.log("DATA", storeData)


const initialState = {
 filteredProducts: JSON.parse(sessionStorage.getItem("filteredData")) || storeData
}

const productsSlice = createSlice({
    name: "products",
    initialState,

    reducers: {
        filterProducts: (state, action) => {
            try{
                const filtered = storeData.filter((product) => product.type === action.payload);
                state.filteredProducts = filtered;
                console.log("filter", filtered)
                const saveState = JSON.stringify(filtered);
                sessionStorage.setItem("filteredData", saveState)
            }catch(err){
                return err
            }
        }
    }
})

export default productsSlice.reducer
export const {filterProducts} = productsSlice.actions