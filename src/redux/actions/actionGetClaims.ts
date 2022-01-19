import { Dispatch } from 'react';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

import { getClaims } from '../../utils/api';

import { actionGetDataStarted, actionGetDataFailure, actionGetClaimsSuccess } from './actionCreators';

const actionGetClaims = () => {
  return (dispatch: Dispatch<ActionTypeTypes>) => {
    dispatch(actionGetDataStarted());

    try {
      getClaims()
        .then((response) => {
          dispatch(actionGetClaimsSuccess(response.data.claims));
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
