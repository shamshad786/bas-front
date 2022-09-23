import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem("userinfo")) || null,
    },

    reducers:{
        login(state, action) {
                state.user =  action.payload
                localStorage.setItem('userinfo',JSON.stringify(state.user))
        },
        logoutuser(state, action) {
            localStorage.removeItem('userinfo');
            state.user =  null
        }
    }
});


export const {login, logoutuser} = userSlice.actions;

export default userSlice.reducer;