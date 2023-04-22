import { useEffect } from "react";
import { useAuthState } from "./context";
const state = useAuthState;

export function useFetchUser() {
  //   useEffect(() => {
  //     // USE AXIOS TO FETCH DATA WITH URL AND RETURN DATA BODY use state for token
  //   }, []);
  const data = {
    firstName: "cow",
    lastName: "bell",
    email: "123@gmail.com",
    password: "1234",
  };
  return data;
}

export function useFetchTasks(url) {
  // useEffect(() => {
  //   // USE AXIOS TO FETCH DATA WITH URL AND RETURN DATA BODY use state for token
  // }, []);
}
