import axios from "axios";
import {
  GET_AUTH_USER,
  LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
} from "./actionTypes";
export const register = (user) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.post("/api/auth/signup", user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {}
};

export const login = (user) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/signin", user);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAuthUser = () => async (dispatch) => {
  //dispatch(setLoading());
  try {
    const options = {
      headers: {
        authorization: localStorage.get("token"),
      },
    };
    const res = await axios.get("/api/auth/me", options);

    dispatch(setLoading());
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {}
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {}
};

export const setLoading = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: LOADING,
    });
  }, 3000);
};
