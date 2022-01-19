import { Dispatch } from 'react';

import jwt from 'jwt-decode';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

import { getUserData } from '../../utils/api';

import { actionGetUserDataSuccess, actionGetUserDataStarted, actionGetUserDataFailure } from './actionCreators';

const actionGetUserData = (userId: string) => {
  let id = userId;
  if (!userId) id = (jwt(localStorage.getItem('userToken') as string) as Record<string, any>).id;

  return (dispatch: Dispatch<ActionTypeTypes>) => {
    dispatch(actionGetUserDataStarted());

    try {
      getUserData(id)
        .then((response) => {
          dispatch(actionGetUserDataSuccess(response.data));
        })
        .catch((response) => {
          dispatch(actionGetUserDataFailure(response.message));
        });
    } catch (error) {
      console.log(`error tryCatch:${error}`);
    }
  };
};

export default actionGetUserData;
