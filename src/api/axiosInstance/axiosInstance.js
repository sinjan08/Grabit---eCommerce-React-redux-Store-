import axios from 'axios';
import { baseURL } from '../endPoints/endPoints';

export const axiosInstance = axios.create({
    baseURL,
});

// Add a request interceptor to include the 'X-Authorization' header
axiosInstance.interceptors.request.use(
    function (config) {
        config.headers['X-Authorization'] = 'sk_test_580638b38aaa703d14802060472ddb72e32d3f18be02d';
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);
