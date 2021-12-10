import {
  CLOSE_ERROR_MESSAGE,
  UPDATE_REGISTRATION_FORM,
  OPEN_CREATE_NEW_CLAIM_FORM,
  CREATE_NEW_CLAIM,
  OPEN_INCOMING_CLAIM_FORM,
  CLOSE_INCOMING_CLAIM_FORM,
  CHANGE_STATUS_OF_INCOMING_CLAIM,
  UPDATE_CURRENT_TABLE_ELEMENT,
} from './actions/types';

export const actionUpdateRegistrationForm = () => ({ type: UPDATE_REGISTRATION_FORM });
export const actionOpenCreateNewClaimForm = () => ({ type: OPEN_CREATE_NEW_CLAIM_FORM });
export const actionCloseIncomingClaimForm = () => ({ type: CLOSE_INCOMING_CLAIM_FORM });
export const closeErrorMessage = () => ({ type: CLOSE_ERROR_MESSAGE });

export const actionChangeStatusOfIncomingClaim = (status: string) => ({
  type: CHANGE_STATUS_OF_INCOMING_CLAIM,
  payload: status,
});
export const actionOpenIncomingClaimForm = (index: Record<string, unknown>) => ({
  type: OPEN_INCOMING_CLAIM_FORM,
  payload: index,
});

export const actionCreateNewClaim = (newClaim: Record<string, unknown>) => ({
  type: CREATE_NEW_CLAIM,
  payload: newClaim,
});

export const actionUpdateCurrentTableElement = (currentTableElement: Record<string, unknown>) => ({
  type: UPDATE_CURRENT_TABLE_ELEMENT,
  payload: currentTableElement,
});
