import { ADD_EMPLOYEE } from "../action-types";

export const addEmployee = (payload) => {
  return { type: ADD_EMPLOYEE, payload };
};
