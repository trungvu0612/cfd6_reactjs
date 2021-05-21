import Auth from "../../Servises/auth";
import { LOGIN, LOGOUT, UPDATE, REGISTER, ERROR } from "../type";

export function loginAction(data) {
  return async (dispatch) => {
    let res = await Auth.login(data);
    if (res.data) {
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
    } else if (res.error) {
      dispatch({
        type: ERROR,
        payload: res.error,
      });
    }
  };
}
export function logoutAction(data) {
  return {
    type: LOGOUT,
    payload: data,
  };
}
export function updateAction(data) {
  return {
    type: UPDATE,
    payload: data,
  };
}
export function registerAction(data) {
  return {
    type: REGISTER,
    payload: data,
  };
}
