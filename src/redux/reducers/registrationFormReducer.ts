import { ActionTypeTypes } from '../../types/actionTypeTypes';
import { UPDATE_REGISTRATION_FORM } from '../actions/types';

interface InitialStateTypes {
  updateRegistrationForm: boolean;
}

const initialState: InitialStateTypes = {
  updateRegistrationForm: false,
};

const registrationFormReducer = (state = initialState, action: ActionTypeTypes): InitialStateTypes => {
  switch (action.type) {
    case UPDATE_REGISTRATION_FORM:
      return { ...state, updateRegistrationForm: !state.updateRegistrationForm };
    default:
      return state;
  }
};

export default registrationFormReducer;
