import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios-setup.js";
//New Actions
export const loginUser: any = createAsyncThunk(
  "loginUser",
  async (data: any) => {
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
            email: "aa@gmail.com",
            userRole: "admin",
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

export const saveSignUp: any = createAsyncThunk(
  "saveSignUp",
  async (data: any) => {
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
