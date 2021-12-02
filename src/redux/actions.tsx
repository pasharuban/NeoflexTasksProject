import { Actions } from './reducer';

export const actionUpdateRegistrationForm = () => ({ type: Actions.UPDATE_REGISTRATION_FORM });
export const actionOpenCreateNewClaimForm = () => ({ type: Actions.OPEN_CREATE_NEW_CLAIM_FORM });
export const actionCloseIncomingClaimForm = () => ({ type: Actions.CLOSE_INCOMING_CLAIM_FORM });

export const actionChangeStatusOfIncomingClaim = (status: string) => ({
  type: Actions.CHANGE_STATUS_OF_INCOMING_CLAIM,
  payload: status,
});
export const actionOpenIncomingClaimForm = (index: Record<string, any>) => ({
  type: Actions.OPEN_INCOMING_CLAIM_FORM,
  payload: index,
});

export const actionCreateNewClaim = (newClaim: Record<string, any>) => ({
  type: Actions.CREATE_NEW_CLAIM,
  payload: newClaim,
});

export const actionUpdateCurrentTableElement = (currentTableElement: Record<string, any>) => ({
  type: Actions.UPDATE_CURRENT_TABLE_ELEMENT,
  payload: currentTableElement,
});
