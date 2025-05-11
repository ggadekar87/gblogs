import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./axios-setup.js";
//New Actions
export const loginUser = createAsyncThunk(
  "loginUser",
  async (data) => {
    try {
      const path = 'https://gtechblog.com/gblogsapi/signup';
      var respose = {
          Success: false,
              Data: {
              },
              isAuthenticated: false,
      }
      await axios.post(path, data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
          'Access-Control-Allow-Origin': '*',
        }
      }).then(
        (response) => {
          var result = response.data;
          console.log("Api call doen" + result.message);
          console.log(result);
          if (result.message == 'Email already registered' || result.message == 'User registered successfully') {
            respose = {
              Success: true,
              Data: {
                User: {
                  _id: data.email,
                  email: data.email,
                  userRole: data.userRole,
                  "fullName": data.fullName,
                  "given_name": data.given_name,
                  token: "asasas",
                },
              },
              isAuthenticated: true,
            };
          } 
        },
        (error) => {
          console.log("Api call doen errrrrrrrrrr");

          console.log(error);
        }
      );
      return respose;

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
