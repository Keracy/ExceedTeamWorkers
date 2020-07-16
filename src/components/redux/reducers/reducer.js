import {
  ADD_EMPLOYEE,
  GET_USERS_BEGIN,
  GET_USERS_SUCCEED,
  GET_USERS_FAIL,
  SET_SEARCH_WORD,
} from "../action-types";

const initialState = {
  users: [],
  projects: [
    {
      name: "CRM-System",
      id: 0,
    },
    {
      name: "Podcast Platform",
      id: 1,
    },
    {
      name: "Social Network 'Kartana'",
      id: 2,
    },
  ],
  loader_active: false,
  err_msg: "",
  searchWord: "",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_WORD:
      return { ...state, searchWord: action.payload };
    case ADD_EMPLOYEE:
      return { ...state, users: [...state.users, action.payload] };
    case GET_USERS_BEGIN:
      return { ...state, loader_active: true };
    case GET_USERS_SUCCEED:
      return { ...state, loader_active: false, users: action.payload };
    case GET_USERS_FAIL:
      return { ...state, loader_active: false, err_msg: action.err };
    default:
      return state;
  }
};
