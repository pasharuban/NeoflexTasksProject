import { ActionTypeTypes } from '../../types/actionTypeTypes';
import { LoginDataTypes } from '../../types/loginDataTypes';
import { RegistrationDataTypes } from '../../types/registrationDataTypes';
import {
  AUTH_STARTED,
  REGISTRATION_SUCCESS,
  LOGIN_SUCCESS,
  AUTH_FAILURE,
  CLOSE_ERROR_MESSAGE,
  LOGOUT,
  UPDATE_REGISTRATION_FORM,
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_STARTED,
  GET_USER_DATA_SUCCESS,
} from '../../constants/actionTypes';

type initialStateType = {
  userName: string;
  loading: boolean;
  userData: RegistrationDataTypes | LoginDataTypes | null;
  authError: boolean | null;
  errorMessage: string;
  updateRegistrationForm: boolean;
  userId: string;
};

const initialState: initialStateType = {
  userName: 'Ivan Ivanov',
  loading: false,
  userData: null,
  authError: false,
  errorMessage: 'No ERROR!',
  updateRegistrationForm: false,
  userId: '',
};

const authReducer = (state = initialState, action: ActionTypeTypes): initialStateType => {
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
        userId: action.payload.id,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        authError: null,
        userData: action.payload,
        userName: action.payload.fullName,
        userId: action.payload.user_id,
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
    case LOGOUT:
      return { ...state, userData: null };
    case UPDATE_REGISTRATION_FORM:
      return { ...state, updateRegistrationForm: !state.updateRegistrationForm };
    case GET_USER_DATA_SUCCESS:
      return { ...state, loading: false, authError: false, userName: action.payload.fullName };
    case GET_USER_DATA_FAILURE:
      return { ...state, loading: false, authError: true, errorMessage: action.payload };
    case GET_USER_DATA_STARTED:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default authReducer;
