import { useEffect } from "react";
import useAuth from "./useAuth";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  useEffect(() => {
    const interceptor = instance.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${user.accessToken}`;
      return config;
    });

    return () => {
      instance.interceptors.request.eject(interceptor);
    };
  }, [user]);

  return instance;
};

export default useAxiosSecure;
