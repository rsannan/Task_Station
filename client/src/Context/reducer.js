import {
  ADD_TASK,
  LOGIN,
  LOGOUT,
  EDIT_USER,
  ON_CHANGE,
  REMOVE_TASK,
  SIGN_UP,
} from "./actions";
import { useEffect } from "react";

export default function reducer(state, action) {
  if (action.type === ON_CHANGE) {
    const event = action.payload.e;
    const tasks = ["title", "description", "date", "time", "urgency"];
    if (tasks.includes(event.target.name)) {
      return {
        ...state,
        task: { ...state.task, [event.target.name]: event.target.value },
      };
    }
    return {
      ...state,
      user: { ...state.user, [event.target.name]: event.target.value },
    };
  }
  if (action.type === SIGN_UP) {
    const event = action.payload.e;
    event.preventDefault();
    // POST DATA
    console.log(state);
    return state;
  }
}
