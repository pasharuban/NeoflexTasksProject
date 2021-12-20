import { FormInstance } from 'antd';
import { Dispatch } from 'react';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

import { PostNewClaimTypes } from '../../types/postNewClaimTypes';

import { postNewClaimData } from '../../utils/api';
import { actionPostDataFailure, actionPostDataStarted, actionPostNewClaimSuccess } from '../actionCreators';

export const actionCreateClaim = (data: PostNewClaimTypes, form: FormInstance) => {
  return (dispatch: Dispatch<ActionTypeTypes>) => {
    dispatch(actionPostDataStarted());

    try {
      return postNewClaimData(data)
        .then((res) => {
          dispatch(actionPostNewClaimSuccess(res.data));
          form.resetFields();
        })
        .catch((error) => {
          dispatch(actionPostDataFailure(error.toString()));
          console.log(error.toString());
        });
    } catch (error) {
      console.log(`error tryCatch:${error}`);
    }
  };
};
