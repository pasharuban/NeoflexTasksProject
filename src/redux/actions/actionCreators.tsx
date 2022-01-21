import {
  CLOSE_ERROR_MESSAGE,
  UPDATE_REGISTRATION_FORM,
  OPEN_CREATE_NEW_CLAIM_FORM,
  GET_CLAIMS_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_STARTED,
  BY_POST_DATA_FAILURE,
  BY_POST_DATA_STARTED,
  BY_POST_NEW_CLAIM_SUCCESS,
  GET_CURRENT_CLAIM_SUCCESS,
  UPDATE_CURRENT_CLAIM_FAILURE,
  UPDATE_CURRENT_CLAIM_STARTED,
  UPDATE_CURRENT_CLAIM_SUCCESS,
  CLOSE_CURRENT_CLAIM,
  LOGOUT,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_STARTED,
} from '../../constants/actionTypes';

import { PostNewClaimTypes } from '../../types/postNewClaimTypes';

export const actionUpdateRegistrationForm = () => ({ type: UPDATE_REGISTRATION_FORM });
export const actionOpenCreateNewClaimForm = () => ({ type: OPEN_CREATE_NEW_CLAIM_FORM });
export const closeErrorMessage = () => ({ type: CLOSE_ERROR_MESSAGE });

export const actionGetClaimsSuccess = (data: Record<string, any>, totalItems: number) => ({
  type: GET_CLAIMS_SUCCESS,
  payload: { data, totalItems },
});
export const actionGetDataFailure = (errorMessage: string) => ({ type: GET_DATA_FAILURE, payload: errorMessage });
export const actionGetDataStarted = () => ({ type: GET_DATA_STARTED });

export const actionGetCurrentClaimSuccess = (data: Record<string, any>) => ({
  type: GET_CURRENT_CLAIM_SUCCESS,
  payload: data,
});

export const actionPostNewClaimSuccess = (data: PostNewClaimTypes) => ({
  type: BY_POST_NEW_CLAIM_SUCCESS,
  payload: data,
});
export const actionPostDataFailure = (errorMessage: string) => ({ type: BY_POST_DATA_FAILURE, payload: errorMessage });
export const actionPostDataStarted = () => ({ type: BY_POST_DATA_STARTED });

export const actionUpdateCurrentClaimSuccess = (data: Record<string, any>) => ({
  type: UPDATE_CURRENT_CLAIM_SUCCESS,
  payload: data,
});

export const actionUpdateCurrentClaimStarted = () => ({
  type: UPDATE_CURRENT_CLAIM_STARTED,
});

export const actionUpdateCurrentClaimFailure = (errorMessage: string) => ({
  type: UPDATE_CURRENT_CLAIM_FAILURE,
  payload: errorMessage,
});

export const actionCloseCurrentClaim = () => ({ type: CLOSE_CURRENT_CLAIM });

export const actionLogout = () => ({ type: LOGOUT });

export const actionGetUserDataSuccess = (userData: Record<string, any>) => ({
  type: GET_USER_DATA_SUCCESS,
  payload: userData,
});

export const actionGetUserDataFailure = (errorMessage: string) => ({
  type: GET_USER_DATA_FAILURE,
  payload: errorMessage,
});

export const actionGetUserDataStarted = () => ({
  type: GET_USER_DATA_STARTED,
});
