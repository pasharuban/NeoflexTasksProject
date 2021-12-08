import axios from 'axios';

import { RegistrationDataTypes } from '../types/registrationDataTypes';

const token = localStorage.getItem('userToken');

export const api = axios.create({
  baseURL: 'https://mysterious-tundra-84714.herokuapp.com',
  headers: { Authorization: `Bearer ${token}` },
});

export const postRegistrationUserData = (data: RegistrationDataTypes) => {
  return api.post(`/auth/registration`, data);
};
