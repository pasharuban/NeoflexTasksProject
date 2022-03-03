import axios from 'axios';
import { createBrowserHistory } from 'history';

import store from '../redux/store';

import { RegistrationDataTypes } from '../types/registrationDataTypes';
import { PostNewClaimTypes } from '../types/postNewClaimTypes';

import { logout } from './HelperFunctions/helperFunctions';

const token = localStorage.getItem('userToken');

export const api = axios.create({
  baseURL: 'https://mysterious-tundra-84714.herokuapp.com',
  headers: { Authorization: `Bearer ${token}` },
});

api.interceptors.response.use(
  (res) => {
    return res;
  },

  (error) => {
    if (error.response.status === 401) {
      logout(store.dispatch, createBrowserHistory());
    }

    return Promise.reject(error);
  },
);

export const postRegistrationUserData = (data: RegistrationDataTypes) => api.post(`/auth/registration`, data);

export const postLoginUserData = (email: string, password: string) => api.post(`/auth/login`, { email, password });

export const postNewClaimData = (data: PostNewClaimTypes) => api.post(`/claim`, data);

export const getClaims = (limit: number, offset: number, column: string, sort: string) =>
  api.get(`/claim`, { params: { offset, limit, column, sort } });

export const getCurrentClaim = (id: string) => api.get(`/claim/${id}`);

export const updateCurrentClaim = (data: Record<string, any>, id: string | undefined) => api.put(`/claim/${id}`, data);

export const getUserData = (id: string | null) => api.get(`/user/${id}`);

export const getSearchClaims = (searchTerm: string) => api.get(`/claim`, { params: { search: searchTerm } });
