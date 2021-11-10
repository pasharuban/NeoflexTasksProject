import { State } from '../types/stateTypes';

export enum Actions {
  UPDATE_REGISTRATION_FORM = 'UPDATE_REGISTRATION_FORM',
}

export interface Action {
  type: string;
}

const initialState: State = {
  updateRegistrationForm: false,
  userName: 'Ivan Ivanov',
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case Actions.UPDATE_REGISTRATION_FORM:
      return { ...initialState, updateRegistrationForm: !state.updateRegistrationForm };
    default:
      return state;
  }
};

export default reducer;
