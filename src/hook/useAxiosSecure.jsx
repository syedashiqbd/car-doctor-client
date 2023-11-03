import axios from 'axios';
import { useEffect } from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
  baseURL: 'https://car-doctor-server-orpin-eight.vercel.app',
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logoutUser } = useAuth();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log('error from interceptors', error.response);
        if (error.response.status === 401 || error.response.status === 401) {
          logoutUser()
            .then(() => {})
            .catch((error) => console.log(error));
        }
      }
    );
  }, [logoutUser]);

  return axiosInstance;
};

export default useAxiosSecure;
