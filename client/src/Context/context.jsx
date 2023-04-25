import { createContext, useContext, useReducer } from "react";
const AuthStateContext = createContext();
const AuthDispatchContext = createContext();
import { LOGIN, LOGOUT } from "./actions";

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
}
let token = sessionStorage.getItem("token")
  ? sessionStorage.getItem("token")
  : "";
export const defaultState = {
  token: token,
};

export function AuthReducer(state, action) {
  if (action.type === LOGIN) {
    const token = sessionStorage.getItem("token");

    return { ...state, token };
  }
  if (action.type === LOGOUT) {
    sessionStorage.clear();
    return { ...state, token: "" };
  }
}

export function AppContext({ children }) {
  const [appState, appDispatch] = useReducer(AuthReducer, defaultState);

  return (
    <AuthStateContext.Provider value={appState}>
      <AuthDispatchContext.Provider value={appDispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}
