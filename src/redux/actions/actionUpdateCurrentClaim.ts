import { Dispatch } from 'react';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

import { updateCurrentClaim } from '../../utils/api';

import {
  actionUpdateCurrentClaimFailure,
  actionUpdateCurrentClaimStarted,
  actionUpdateCurrentClaimSuccess,
} from './actionCreators';

const actionUpdateCurrentClaim = (data: Record<string, any>, id: string | undefined) => {
  return (dispatch: Dispatch<ActionTypeTypes>) => {
    dispatch(actionUpdateCurrentClaimStarted());

    try {
      updateCurrentClaim(data, id)
        .then((response) => {
          dispatch(actionUpdateCurrentClaimSuccess(response.data));
        })
        .catch((error) => {
          dispatch(actionUpdateCurrentClaimFailure(error.toString()));
        });
    } catch (error) {
      console.log(`error tryCatch:${error}`);
    }
  };
};

export default actionUpdateCurrentClaim;
