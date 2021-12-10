import { FormInstance } from 'antd';
import { api } from '../../utils/api';

import { LOGIN_SUCCESS } from './types';
import { actionAuthStarted, actionAuthFailure } from './actionsAuthStatus';
import { LoginDataTypes } from '../../types/loginDataTypes';
import { postLoginUserData } from '../../utils/api';

const loginSuccess = (data: any) => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...data,
  },
});

export const actionLoginUser = (data: LoginDataTypes, form: FormInstance) => {
  return (dispatch: any) => {
    dispatch(actionAuthStarted());
    const { email, password } = data;

    postLoginUserData(email, password)
      .then((res) => {
        try {
          if (res.data.message) dispatch(actionAuthFailure(res.data.message));
          else {
            if (data.rememberMe) localStorage.setItem('userToken', res.data.token);

            dispatch(loginSuccess(res.data));
            api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
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
