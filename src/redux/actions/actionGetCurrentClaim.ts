import { Dispatch } from 'react';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

import { getCurrentClaim } from '../../utils/api';

import { actionGetDataStarted, actionGetCurrentClaimSuccess, actionGetDataFailure } from './actionCreators';

const actionGetCurrentClaim = (id: string) => {
  return (dispatch: Dispatch<ActionTypeTypes>) => {
    dispatch(actionGetDataStarted());

    try {
      getCurrentClaim(id)
        .then((response) => {
          dispatch(actionGetCurrentClaimSuccess(response.data));
        })
        .catch((error) => {
          dispatch(actionGetDataFailure(error.message));
        });
    } catch (error) {
      console.log(error);
    }
  };
};

export default actionGetCurrentClaim;
