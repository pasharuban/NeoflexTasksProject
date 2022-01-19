import { Dispatch } from 'react';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

import { getClaims } from '../../utils/api';

import { actionGetDataStarted, actionGetDataFailure, actionGetClaimsSuccess } from './actionCreators';

const actionGetClaims = (requestUrl = '') => {
  return (dispatch: Dispatch<ActionTypeTypes>) => {
    dispatch(actionGetDataStarted());

    try {
      getClaims(requestUrl)
        .then((response) => {
          const { claims, totalItems } = response.data;

          dispatch(actionGetClaimsSuccess(claims, totalItems));
        })
        .catch((error) => {
          dispatch(actionGetDataFailure(error.toString()));
        });
    } catch (error) {
      console.log(`error tryCatch:${error}`);
    }
  };
};

export default actionGetClaims;
