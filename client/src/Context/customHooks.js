import { useEffect } from "react";
import { useAuthState } from "./context";
const state = useAuthState;

export function useFetchUser(url) {
  useEffect(() => {
    // USE AXIOS TO FETCH DATA WITH URL AND RETURN DATA BODY use state for token
  }, []);
}

export function useFetchTasks(url) {
  useEffect(() => {
    // USE AXIOS TO FETCH DATA WITH URL AND RETURN DATA BODY use state for token
  }, []);
}
