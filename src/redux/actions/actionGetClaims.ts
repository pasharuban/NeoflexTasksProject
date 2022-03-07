import { Dispatch } from 'react';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

import { getClaims } from '../../utils/api';

import { actionGetDataStarted, actionGetDataFailure, actionGetClaimsSuccess } from './actionCreators';

const actionGetClaims = (limit: number, offset = 0, column = '', sort = '') => {
  return (dispatch: Dispatch<ActionTypeTypes>) => {
    dispatch(actionGetDataStarted());

    try {
      getClaims(limit, offset, column, sort)
        .then((response) => {
          const { claims, totalItems } = response.data;

          dispatch(actionGetClaimsSuccess(claims, totalItems));
        })
        .catch((error) => {
          dispatch(actionGetDataFailure(error.message));
        });
    } catch (error) {
      console.log(`error tryCatch:${error}`);
    }
  };
};

export default actionGetClaims;
