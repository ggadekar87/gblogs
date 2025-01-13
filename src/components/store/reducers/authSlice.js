import { createSlice } from '@reduxjs/toolkit'

import {
    loginUser,
    saveSignUp,
} from "../actions/actions.ts";
const initialState = {
    isAuthenticated: false,
    userRole: "",
    error: "",
    status: "",
    user: {},
    userId: "",
    token: ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLogOut(state, action) {
            state.isAuthenticated = false;
            state.error = "";
            state.user = {};
            state.userId = "";;
            state.token = "";;
            state.userRole = "";
            localStorage.clear();
        },
    }, extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading";
                state.error = "";
                state.isAuthenticated = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = "succeeded";
                if (action.payload.Success) {
                    state.error = "";
                    state.user = action.payload.Data.User;
                    state.userId = action.payload.Data.User._id;
                    state.token = action.payload.Data.token;
                    state.userRole = action.payload.Data.userRole;
                    state.isAuthenticated = action.payload.isAuthenticated;
                    localStorage.setItem("token", action.payload.Data.token);
                    localStorage.setItem("expirationDate", "");
                    localStorage.setItem("userId", action.payload.Data.User.email);
                    localStorage.setItem("accountId", action.payload.Data.User._id);
                    localStorage.setItem("Email", action.payload.Data.User.email);
                    localStorage.setItem("admin", action.payload.Data.User.userRole);

                } else {
                    state.error = "Invalid login";
                    state.isAuthenticated = false;
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = "failed";
                state.error = "failed";
                state.isAuthenticated = false;
            })
            .addCase(saveSignUp.pending, (state) => {
                state.error = "";
                state.status = "";
            })
            .addCase(saveSignUp.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.userId = action.payload.insertedId;
                state.token = action.payload.token;
                state.isAuthenticated = action.payload.isAuthenticated;
            })
            .addCase(saveSignUp.rejected, (state, action) => {
                state.status = "failed";
            })
    },
})

export const { userLogin, userLogOut } = authSlice.actions
export default authSlice.reducer