import { FormInstance } from 'antd';
import { Dispatch } from 'react';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

import { LOGIN_SUCCESS } from '../../constants/types';
import { actionAuthStarted, actionAuthFailure } from './actionsAuthStatus';
import { LoginDataTypes } from '../../types/loginDataTypes';
import { api, postLoginUserData } from '../../utils/api';

const loginSuccess = (data: LoginDataTypes) => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...data,
  },
});

export const actionLoginUser = (data: LoginDataTypes, form: FormInstance) => {
  return (dispatch: Dispatch<ActionTypeTypes>) => {
    dispatch(actionAuthStarted());
    const { email, password } = data;

    try {
      return postLoginUserData(email, password)
        .then((res) => {
          if (res.data.message) dispatch(actionAuthFailure(res.data.message));
          else {
            if (data.rememberMe) localStorage.setItem('userToken', res.data.token);

            (api.defaults.headers as any).Authorization = `Bearer ${res.data.token}`;

            dispatch(loginSuccess(res.data));
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
