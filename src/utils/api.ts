/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
const token = localStorage.getItem('token');
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: { Authorization: `Bearer ${token} ` },
});

export default {
  getData: (url?: string) =>
    instance({
      method: 'GET',
      url,
    }),

  postData: (url: string, data: any, method: any) =>
    instance({
      method,
      url,
      data,
    }),
};
