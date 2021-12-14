import { State } from '../types/stateTypes';
import initialState from './initialState';

import {
  REGISTRATION_SUCCESS,
  AUTH_FAILURE,
  AUTH_STARTED,
  LOGIN_SUCCESS,
  CLOSE_ERROR_MESSAGE,
  UPDATE_REGISTRATION_FORM,
  OPEN_CREATE_NEW_CLAIM_FORM,
  CREATE_NEW_CLAIM,
  OPEN_INCOMING_CLAIM_FORM,
  CLOSE_INCOMING_CLAIM_FORM,
  CHANGE_STATUS_OF_INCOMING_CLAIM,
  UPDATE_CURRENT_TABLE_ELEMENT,
} from './actions/types';

export interface Action {
  type: string;
  payload?: any;
}

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case UPDATE_REGISTRATION_FORM:
      return { ...state, updateRegistrationForm: !state.updateRegistrationForm };
    case OPEN_CREATE_NEW_CLAIM_FORM:
      return { ...state, openCreateNewClaimForm: !state.openCreateNewClaimForm };
    case OPEN_INCOMING_CLAIM_FORM:
      return { ...state, openIncomingClaimForm: !state.openIncomingClaimForm, currentTableElement: action.payload };
    case CLOSE_INCOMING_CLAIM_FORM:
      return { ...state, openIncomingClaimForm: !state.openIncomingClaimForm, currentTableElement: {} };
    case CHANGE_STATUS_OF_INCOMING_CLAIM:
      return {
        ...state,
        claims: state.claims.map((claim) => {
          if (claim._id === state.currentTableElement._id) {
            claim.status = { name: action.payload, slug: action.payload };
          }

          return claim;
        }),
      };

    case CREATE_NEW_CLAIM:
      return {
        ...state,
        claims: [...state.claims, action.payload],
      };
    case UPDATE_CURRENT_TABLE_ELEMENT:
      return { ...state, currentTableElement: action.payload };
    case AUTH_STARTED:
      return {
        ...state,
        loading: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: null,
        userData: action.payload,
        userName: action.payload.fullName,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: null,
        userData: action.payload,
        userName: action.payload.fullName,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        authError: true,
        errorMessage: action.payload,
      };
    case CLOSE_ERROR_MESSAGE:
      return {
        ...state,
        authError: false,
      };
    default:
      return state;
  }
};

export default reducer;
