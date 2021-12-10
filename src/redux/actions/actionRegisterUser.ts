import { FormInstance } from 'antd';

import { REGISTRATION_SUCCESS } from './types';
import { actionAuthStarted, actionAuthFailure } from './actionsAuthStatus';
import { RegistrationDataTypes } from '../../types/registrationDataTypes';
import { postRegistrationUserData } from '../../utils/api';

const actionRegistrationSuccess = (data: any) => ({
  type: REGISTRATION_SUCCESS,
  payload: {
    ...data,
  },
});

export const actionRegisterUser = (data: RegistrationDataTypes, form: FormInstance) => {
  return (dispatch: any) => {
    dispatch(actionAuthStarted());

    postRegistrationUserData(data)
      .then((res) => {
        try {
          if (res.data.message) dispatch(actionAuthFailure(res.data.message));
          else {
            dispatch(actionRegistrationSuccess(res.data));
            localStorage.setItem('userToken', res.data.token);
            form.resetFields();
          }
        } catch (e) {
          console.log(e);
        }
      })
      .catch((err) => {
        dispatch(actionAuthFailure(err.message));
      });
  };
};
