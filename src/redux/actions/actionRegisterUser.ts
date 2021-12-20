import { FormInstance } from 'antd';
import { Dispatch } from 'react';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

import { REGISTRATION_SUCCESS } from './types';
import { actionAuthStarted, actionAuthFailure } from './actionsAuthStatus';
import { RegistrationDataTypes } from '../../types/registrationDataTypes';
import { postRegistrationUserData } from '../../utils/api';

import { api } from '../../utils/api';

const actionRegistrationSuccess = (data: RegistrationDataTypes) => ({
  type: REGISTRATION_SUCCESS,
  payload: {
    ...data,
  },
});

export const actionRegisterUser = (data: RegistrationDataTypes, form: FormInstance) => {
  return (dispatch: Dispatch<ActionTypeTypes>) => {
    dispatch(actionAuthStarted());

    try {
      postRegistrationUserData(data)
        .then((res) => {
          if (res.data.message) dispatch(actionAuthFailure(res.data.message));
          else {
            localStorage.setItem('userToken', res.data.token);
            (api.defaults.headers as any).Authorization = `Bearer ${res.data.token}`;

            dispatch(actionRegistrationSuccess(res.data));

            form.resetFields();
          }
        })
        .catch((error) => {
          dispatch(actionAuthFailure(error.message));
        });
    } catch (error) {
      console.log(error);
    }
  };
};
