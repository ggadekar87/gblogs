import { createSlice } from '@reduxjs/toolkit'
import {
    addComment,
} from "../actions/actions";
const initialState = {
    comments: [
        {
            id: 1,
            text: "This is good app",
            likes: "12",
            dislikes: "2",
            replies: [{
                id: "11",
                text: "no sure",
                likes: "1",
                dislikes: "22"
            }, {
                id: "111",
                text: "your are right",
                likes: "10",
                dislikes: "366"
            }]
        },
        // {
        //     id: "2",
        //     text: "nove content i like",
        //     likes: "333",
        //     dislikes: "4",
        //     replies: [{
        //         id: "22",
        //         text: "yes ttrue",
        //         likes: "3",
        //         dislikes: "0"
        //     }]
        // },
    ]
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addComment.pending, (state) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(addComment.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.error = "";
                console.log(action.payload)
                state.comments.push(action.payload);
            })
            .addCase(addComment.rejected, (state, action) => {
                state.status = "failed";
                state.error = "failed";
                state.isAuthenticated = false;
            })
    }
})

export const { } = mainSlice.actions
export default mainSlice.reducer