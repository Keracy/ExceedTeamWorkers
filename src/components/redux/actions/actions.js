import {
  ADD_EMPLOYEE,
  GET_USERS_BEGIN,
  GET_USERS_SUCCEED,
  GET_USERS_FAIL,
  SET_SEARCH_WORD,
} from "../action-types";
import axios from "axios";
export const addEmployee = (payload) => {
  return { type: ADD_EMPLOYEE, payload };
};
export const setSearchWord = (payload) => {
  return { type: SET_SEARCH_WORD, payload };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_USERS_BEGIN });
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: GET_USERS_SUCCEED, payload: data });
    } catch (err) {
      dispatch({ type: GET_USERS_FAIL, err: err.message });
    }
  };
};
