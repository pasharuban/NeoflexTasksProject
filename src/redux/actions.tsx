import { Actions } from './reducer';

export const actionUpdateRegistrationForm = () => ({ type: Actions.UPDATE_REGISTRATION_FORM });
export const actionOpenCreateNewClaimForm = () => ({ type: Actions.OPEN_CREATE_NEW_CLAIM_FORM });
export const actionCreateNewClaim = (newClaim: Record<string, any>) => ({
  type: Actions.CREATE_NEW_CLAIM,
  payload: newClaim,
});
