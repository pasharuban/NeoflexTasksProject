import { FormInstance } from 'antd';
import { Dispatch } from 'react';

import { AuthFailureType, AuthStartedType, RegistrationSuccessType } from './actionsTypes';

import { REGISTRATION_SUCCESS } from './types';
import { actionAuthStarted, actionAuthFailure } from './actionsAuthStatus';
import { RegistrationDataTypes } from '../../types/registrationDataTypes';
import { postRegistrationUserData } from '../../utils/api';

const actionRegistrationSuccess = (data: RegistrationDataTypes): RegistrationSuccessType => ({
  type: REGISTRATION_SUCCESS,
  payload: {
    ...data,
  },
});

export const actionRegisterUser = (data: RegistrationDataTypes, form: FormInstance) => {
  return (dispatch: Dispatch<AuthFailureType | AuthStartedType | RegistrationSuccessType>) => {
    dispatch(actionAuthStarted());

    try {
      postRegistrationUserData(data)
        .then((res) => {
          if (res.data.message) dispatch(actionAuthFailure(res.data.message));
          else {
            dispatch(actionRegistrationSuccess(res.data));
            localStorage.setItem('userToken', res.data.token);
            form.resetFields();
          }
        })
        .catch((err) => {
          dispatch(actionAuthFailure(err.message));
        });
    } catch (e) {
      console.log(e);
    }
  };
};
