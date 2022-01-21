import axios from 'axios';

import { RegistrationDataTypes } from '../types/registrationDataTypes';
import { PostNewClaimTypes } from '../types/postNewClaimTypes';

const token = localStorage.getItem('userToken');

export const api = axios.create({
  baseURL: 'https://mysterious-tundra-84714.herokuapp.com',
  headers: { Authorization: `Bearer ${token}` },
});

export const postRegistrationUserData = (data: RegistrationDataTypes) => api.post(`/auth/registration`, data);

export const postLoginUserData = (email: string, password: string) => api.post(`/auth/login`, { email, password });

export const postNewClaimData = (data: PostNewClaimTypes) => api.post(`/claim`, data);

export const getClaims = (limit: number, offset: number) => api.get(`/claim`, { params: { offset, limit } });

export const getCurrentClaim = (id: string) => api.get(`/claim/${id}`);

export const updateCurrentClaim = (data: Record<string, any>, id: string | undefined) => api.put(`/claim/${id}`, data);

export const getUserData = (id: string | null) => api.get(`/user/${id}`);
