import {
  GET_AUTH_USER,
  LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_SUCCESS,
} from "../actions/actionTypes";
const initialState = {
  isAuth: false,
  loading: false,
  user: null,
  token: localStorage.getItem("token"),
  msg: null,
};

const authReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuth: true,
        loading: false,
        ...payload,
      };
    case GET_AUTH_USER:
      return {
        ...state,
        ...payload,
        loading: false,
        isAuth: true,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        loading: false,
        user: null,
        token: null,
        msg: "logout success",
      };
    default:
      return state;
  }
};

export default authReducer;
