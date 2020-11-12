// Use when making calls to an api and working with jwt,
// this method should be called as soon as the files are in the browser

import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'localhost:4000',
});

export const axiosClient;


const initAxiosInterceptors = () => {
  // Get token Storage
  const token = getAuthToken();

  axiosClient.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  });
};

export const initAxiosInterceptors;
