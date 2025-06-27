import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { API_BASE_URL } from '@/config/api.config';

const createAxiosInstance = (baseURL: string, method: string = 'get'): AxiosInstance => {
    const options: CreateAxiosDefaults = {
        baseURL,
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return axios.create(options);
};

export const axiosInstanceApi = createAxiosInstance(API_BASE_URL);
