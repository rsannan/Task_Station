import { useEffect, useState } from "react";
import { useAuthState } from "./context";
import axios from "axios";
const state = useAuthState;

export default function useAxios(config) {
  const { method, url, requestConfig = {} } = config;
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.method.toLowerCase()(url, {
          ...requestConfig,
        });
        console.log("here");
        console.log(res);
        setResponse(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return [response, error, loading];
}
