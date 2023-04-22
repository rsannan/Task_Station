import {
  ADD_TASK,
  LOGIN,
  LOGOUT,
  EDIT_USER,
  ON_CHANGE,
  REMOVE_TASK,
  SIGN_UP,
} from "./actions";
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
  if (action.type === SIGN_UP) {
    const event = action.payload.e;
    event.preventDefault();
    // POST DATA AND RETURN TO SIGN UP PAGE
    return state;
  }

  if (action.type === LOGIN) {
    const event = action.payload.e;
    event.preventDefault();

    // // GET USER DATA FROM API
    // const data = {};

    return state;
  }
  if (action.type === EDIT_USER) {
    const event = action.payload.e;
    event.preventDefault();
    // POST NEW USER DATA
    return state;
  }
  if (action.type === ADD_TASK) {
    const event = action.payload.e;
    event.preventDefault();
    // POST TASK DATA
    return state;
  }
}
