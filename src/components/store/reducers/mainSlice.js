import { createSlice } from '@reduxjs/toolkit'
import {
    addComment, getComment, replyComment
} from "../actions/actions";
const initialState = {
    comments: [
        {
            id: 1,
            blogId: 1,
            text: "This is good app",
            likes: "12",
            dislikes: "2",
            createDate: "2025-04-29T12:31:06.657Z",
            name: "Ganesh Gadekar",
            imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocLJ3Cxdmd3mVmtAEqR3oYIQ0yNsEB0QhjTC14GfwSkSJ795nEaq=s96-c",
            email: "",
            isDelete: true,
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
    ],
    filteredComments: [{
        id: 1,
        blogId: 1,
        text: "This is good app",
        likes: "12",
        dislikes: "2",
        createDate: new Date(),
        name: "Ganesh Gadekar",
        imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocLJ3Cxdmd3mVmtAEqR3oYIQ0yNsEB0QhjTC14GfwSkSJ795nEaq=s96-c",
        email: "",
        isDelete: true,
        userId: "123",
        replies: [{
            id: "11",
            text: "no sure",
            likes: "1",
            dislikes: "22",
            name: "Ashish Gadekar",
            imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocLJ3Cxdmd3mVmtAEqR3oYIQ0yNsEB0QhjTC14GfwSkSJ795nEaq=s96-c",
            email: "",
            isDelete: false,
            userId: "123",
        }, {
            id: "111",
            text: "your are right",
            likes: "10",
            dislikes: "366",
            name: "Sumit Gadekar",
            imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocLJ3Cxdmd3mVmtAEqR3oYIQ0yNsEB0QhjTC14GfwSkSJ795nEaq=s96-c",
            email: "",
            isDelete: true,
            userId: "123",
        }]
    },]
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
                state.filteredComments.push(action.payload);
            })
            .addCase(addComment.rejected, (state, action) => {
                state.status = "failed";
                state.error = "failed";
                state.isAuthenticated = false;
            })

            .addCase(getComment.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getComment.fulfilled, (state, action) => {
                state.status = "succeeded";
                // const temp = [...state.comments]
                // console.log(temp)
                // const filteredData = temp.filter(item => item.blogId === action.payload);
                // console.log(filteredData)
                // state.filteredComments.push(filteredData);
            })
            .addCase(getComment.rejected, (state, action) => {
                state.status = "failed";
                state.isValidOTP = false;
            })

            .addCase(replyComment.pending, (state) => {
                state.status = "loading";
                state.error = "";
            })
            .addCase(replyComment.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.error = "";
                console.log("sreplyCommentucceededsucceededsucceededsucceeded")
                console.log(action.payload)
                let _menu = [...state.filteredComments];
                var foundIndex = _menu.findIndex(
                    (x) => x.id === action.payload.CommmentId
                );
                console.log(foundIndex)
                state.filteredComments[foundIndex].replies.push(action.payload);
            })
            .addCase(replyComment.rejected, (state, action) => {
                state.status = "failed";
                state.error = "failed";
                state.isAuthenticated = false;
            })
    }
})

export const { } = mainSlice.actions
export default mainSlice.reducer