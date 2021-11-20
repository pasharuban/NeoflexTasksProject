import { State } from '../types/stateTypes';

export enum Actions {
  UPDATE_REGISTRATION_FORM = 'UPDATE_REGISTRATION_FORM',
  OPEN_CREATE_NEW_CLAIM_FORM = 'OPEN_CREATE_NEW_CLAIM_FORM',
}

export interface Action {
  type: string;
}

const initialState: State = {
  updateRegistrationForm: false,
  openCreateNewClaimForm: false,
  userName: 'Ivan Ivanov',
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case Actions.UPDATE_REGISTRATION_FORM:
      return { ...initialState, updateRegistrationForm: !state.updateRegistrationForm };
    case Actions.OPEN_CREATE_NEW_CLAIM_FORM:
      return { ...initialState, openCreateNewClaimForm: !state.openCreateNewClaimForm };
    default:
      return state;
  }
};

export default reducer;
