import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios-setup.js";
//New Actions
export const loginUser = createAsyncThunk(
  "loginUser",
  async (data) => {
    try {
      //   const response = await axios.post("/login", {
      //     username: data.username,
      //     password: data.password,
      //   });
      //   response.data.isAuthenticated = true;
      //   return response.data;
      return {
        Success: true,
        Data: {
          User: {
            _id: 11,
            email: data.email,
            userRole: data.userRole,
            "fullName": data.fullName,
            "given_name": data.given_name,
            token: "asasas",
          },
        },
        isAuthenticated: true,
      };
    } catch (err) {
      return { Success: false, Error: "Api falied" };
    }
  }
);

export const saveSignUp = createAsyncThunk(
  "saveSignUp",
  async (data) => {
    const response = await axios.post("/signup", {
      username: data.email,
      password: data.password,
    });
    console.log(response.data);
    response.data.token = "myToken";
    response.data.isAuthenticated = true;
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("expirationDate", "");
    localStorage.setItem("userId", response.data.email);
    localStorage.setItem("Email", response.data.email);
    localStorage.setItem("accountId", response.data._id);

    return response.data;
  }
);

export const addComment = createAsyncThunk(
  "addComment",
  async (data) => {
    // const response = await axios.post("/signup", {
    //   username: data.email,
    //   password: data.password,
    // });
    return data;
  }
);

export const getComment = createAsyncThunk(
  "getComment",
  // async (data) => {
  //   const response = await axios.get("/get/subMenu?mid=" + data);
  //   return response.data;
  // }
  async (data) => {
    // const response = await axios.post("/signup", {
    //   username: data.email,
    //   password: data.password,
    // });
    return data;
  }
);

export const replyComment = createAsyncThunk(
  "replyComment",
  // async (data) => {
  //   const response = await axios.get("/get/subMenu?mid=" + data);
  //   return response.data;
  // }
  async (data) => {
    // const response = await axios.post("/signup", {
    //   username: data.email,
    //   password: data.password,
    // });
    return data;
  }
);
