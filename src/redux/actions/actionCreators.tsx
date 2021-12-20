import {
  CLOSE_ERROR_MESSAGE,
  UPDATE_REGISTRATION_FORM,
  OPEN_CREATE_NEW_CLAIM_FORM,
  CREATE_NEW_CLAIM,
  CHANGE_STATUS_OF_INCOMING_CLAIM,
  UPDATE_CURRENT_TABLE_ELEMENT,
  GET_CLAIMS_SUCCESS,
  GET_DATA_FAILURE,
  GET_DATA_STARTED,
  POST_DATA_FAILURE,
  POST_DATA_STARTED,
  POST_NEW_CLAIM_SUCCESS,
  GET_CURRENT_CLAIM_SUCCESS,
} from '../../constants/types';

import { PostNewClaimTypes } from '../../types/postNewClaimTypes';

export const actionUpdateRegistrationForm = () => ({ type: UPDATE_REGISTRATION_FORM });
export const actionOpenCreateNewClaimForm = () => ({ type: OPEN_CREATE_NEW_CLAIM_FORM });
export const closeErrorMessage = () => ({ type: CLOSE_ERROR_MESSAGE });

export const actionGetClaimsSuccess = (data: Record<string, any>) => ({ type: GET_CLAIMS_SUCCESS, payload: data });
export const actionGetDataFailure = (errorMessage: string) => ({ type: GET_DATA_FAILURE, payload: errorMessage });
export const actionGetDataStarted = () => ({ type: GET_DATA_STARTED });

export const actionGetCurrentClaimSuccess = (data: Record<string, any>) => ({
  type: GET_CURRENT_CLAIM_SUCCESS,
  payload: data,
});

export const actionPostNewClaimSuccess = (data: PostNewClaimTypes) => ({ type: POST_NEW_CLAIM_SUCCESS, payload: data });
export const actionPostDataFailure = (errorMessage: string) => ({ type: POST_DATA_FAILURE, payload: errorMessage });
export const actionPostDataStarted = () => ({ type: POST_DATA_STARTED });

export const actionChangeStatusOfIncomingClaim = (status: string) => ({
  type: CHANGE_STATUS_OF_INCOMING_CLAIM,
  payload: status,
});

export const actionCreateNewClaim = (newClaim: Record<string, unknown>) => ({
  type: CREATE_NEW_CLAIM,
  payload: newClaim,
});

export const actionUpdateCurrentTableElement = (currentTableElement: Record<string, unknown>) => ({
  type: UPDATE_CURRENT_TABLE_ELEMENT,
  payload: currentTableElement,
});
