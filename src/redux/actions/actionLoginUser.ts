import { FormInstance } from 'antd';
import { Dispatch } from 'react';

import { api } from '../../utils/api';

import { AuthFailureType, AuthStartedType, LoginSuccessType } from './actionsTypes';

import { LOGIN_SUCCESS } from './types';
import { actionAuthStarted, actionAuthFailure } from './actionsAuthStatus';
import { LoginDataTypes } from '../../types/loginDataTypes';
import { postLoginUserData } from '../../utils/api';

const loginSuccess = (data: LoginDataTypes): LoginSuccessType => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...data,
  },
});

export const actionLoginUser = (data: LoginDataTypes, form: FormInstance) => {
  return (dispatch: Dispatch<AuthFailureType | AuthStartedType | LoginSuccessType>) => {
    dispatch(actionAuthStarted());
    const { email, password } = data;

    try {
      postLoginUserData(email, password)
        .then((res) => {
          if (res.data.message) dispatch(actionAuthFailure(res.data.message));
          else {
            if (data.rememberMe) localStorage.setItem('userToken', res.data.token);

            dispatch(loginSuccess(res.data));
            api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
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
