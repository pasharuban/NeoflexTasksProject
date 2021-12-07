import { FormInstance } from 'antd';

import { REGISTRATION_SUCCESS, REGISTRATION_FAILURE, REGISTRATION_STARTED } from './types';
import { RegistrationDataTypes } from '../../types/registrationDataTypes';
import { postRegistrationUserData } from '../../utils/api';

const registrationSuccess = (data: any) => ({
  type: REGISTRATION_SUCCESS,
  payload: {
    ...data,
  },
});

const registrationStarted = () => ({
  type: REGISTRATION_STARTED,
});

const registrationFailure = (errorMessage: string) => ({
  type: REGISTRATION_FAILURE,
  payload: errorMessage,
});

export const registerUser = (data: RegistrationDataTypes, form: FormInstance) => {
  return (dispatch: any) => {
    dispatch(registrationStarted());

    postRegistrationUserData(data)
      .then((res) => {
        try {
          if (res.data.message) dispatch(registrationFailure(res.data.message));
          else {
            dispatch(registrationSuccess(res.data));
            localStorage.setItem('currentUser', res.data.token);
            form.resetFields();
          }
        } catch (e) {
          console.log(e);
        }
      })
      .catch((err) => {
        dispatch(registrationFailure(err.message));
      });
  };
};
