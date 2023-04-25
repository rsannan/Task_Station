import {
  ADD_TASK,
  EDIT_USER,
  ON_CHANGE,
  REMOVE_TASK,
  SIGN_UP,
  CHANGE_BOARD,
} from "./actions";
import axios from "axios";
import { useAuthDispatch } from "./context";

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

  if (action.type === CHANGE_BOARD) {
    const boardId = action.payload._id;
    return { ...state, boardId };
  }
}
