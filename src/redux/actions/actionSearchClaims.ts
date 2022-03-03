import { Dispatch } from 'react';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

import { getSearchClaims } from '../../utils/api';

import { actionGetDataStarted, actionGetDataFailure, actionSearchClaimsSuccess } from './actionCreators';

const actionSearchClaims = (searchTerm: string) => {
  return (dispatch: Dispatch<ActionTypeTypes>) => {
    dispatch(actionGetDataStarted());

    try {
      getSearchClaims(searchTerm)
        .then((response) => {
          const { claims, totalItems } = response.data;
          dispatch(actionSearchClaimsSuccess(claims, totalItems));
        })
        .catch((error) => {
          dispatch(actionGetDataFailure(error.message));
        });
    } catch (error) {
      console.log(`error tryCatch:${error}`);
    }
  };
};

export default actionSearchClaims;
