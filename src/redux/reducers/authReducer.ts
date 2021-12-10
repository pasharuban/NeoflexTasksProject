import { ActionTypeTypes } from '../../types/actionTypeTypes';
import { LoginDataTypes } from '../../types/loginDataTypes';
import { RegistrationDataTypes } from '../../types/registrationDataTypes';
import { AUTH_STARTED, REGISTRATION_SUCCESS, LOGIN_SUCCESS, AUTH_FAILURE, CLOSE_ERROR_MESSAGE } from '../actions/types';

interface InitialStateTypes {
  loading: boolean;
  userData: RegistrationDataTypes | LoginDataTypes | null;
  authError: boolean | null;
  errorMessage: string;
  userName: string;
}

const initialState: InitialStateTypes = {
  loading: false,
  userData: null,
  authError: false,
  errorMessage: 'No ERROR!',
  userName: 'Ivan Ivanov',
};

const authReducer = (state = initialState, action: ActionTypeTypes): InitialStateTypes => {
  switch (action.type) {
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

export default authReducer;
