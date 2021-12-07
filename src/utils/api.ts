import axios from 'axios';

import { RegistrationDataTypes } from '../types/registrationDataTypes';

export const api = axios.create({
  baseURL: 'https://mysterious-tundra-84714.herokuapp.com',
});

export const postRegistrationUserData = (data: RegistrationDataTypes) => {
  return api.post(`/auth/registration`, data);
};
