import { AUTH_FAILURE, AUTH_STARTED } from './types';

export const actionAuthStarted = () => ({
  type: AUTH_STARTED,
});

export const actionAuthFailure = (errorMessage: string) => ({
  type: AUTH_FAILURE,
  payload: errorMessage,
});
