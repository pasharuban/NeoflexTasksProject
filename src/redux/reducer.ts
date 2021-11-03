export enum Actions {
  UPDATE_REGISTRATION_FORM = 'UPDATE_REGISTRATION_FORM',
}

export interface State {
  updateRegistrationForm: boolean;
}

export interface Action {
  type: string;
}

const initialState: State = {
  updateRegistrationForm: false,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case Actions.UPDATE_REGISTRATION_FORM:
      return { updateRegistrationForm: !state.updateRegistrationForm };
    default:
      return state;
  }
};

export default reducer;
