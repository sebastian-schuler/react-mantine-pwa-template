import { AxiosResponse } from 'axios';
import { axiosInstanceApi } from '../axios-instance';

export async function getAllUsers() {
    const response: AxiosResponse = await axiosInstanceApi.get(`/users`);
    return response.data;
}
