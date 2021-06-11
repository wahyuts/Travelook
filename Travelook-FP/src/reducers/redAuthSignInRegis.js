import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    LOGOUT,
  } from "../actions/constants";
  
  const user = localStorage.getItem("user");
  // const user = "blablabla"


  // const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  const initialState = user
    // ? { user }
    ? { isLoggedIn: true, user }
    // : { isLoggedIn: false, user };
    : { isLoggedIn: false, user: null };
    // : { isLoggedIn: false, user: "" };

  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    // console.log("type", type);
  
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: false,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case SIGNIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case SIGNIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default:
        return state;
    }
  }