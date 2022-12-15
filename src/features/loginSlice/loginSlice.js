import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(sessionStorage.getItem("authUser")) || {
        email: "",
        paswword: "",
        image: "",
        authUser: false
    }
}

const loginSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        login(state, action){
            const userId = action.payload
            const userValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userId.email);
            const passwordValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userId.test)

            if(!userValidation || !passwordValidation){
                state.user.authUser = false
            }else{
                state.user.authUser = true
                const saveUser = JSON.stringify(userId)
                sessionStorage.setItem("authUser", saveUser)
            }
        },

        logout(state){
            state.user = {
                email: "",
                paswword: "",
                image: "",
                authUser: false
            }
        }
    }
})

export default loginSlice.reducer;
export const { login, logout } = loginSlice.actions