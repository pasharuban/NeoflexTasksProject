import { POST_DATA_FAILURE, POST_NEW_CLAIM_SUCCESS, POST_DATA_STARTED } from '../actions/types';
import { ActionTypeTypes } from '../../types/actionTypeTypes';
import { PostNewClaimTypes } from '../../types/postNewClaimTypes';

type initialStateType = {
  loading: boolean;
  claimData: PostNewClaimTypes | null;
  postDataError: boolean;
  errorMessage: string;
};

const initialState: initialStateType = {
  loading: false,
  claimData: null,
  postDataError: false,
  errorMessage: 'No ERROR!',
};

const postDataReducer = (state = initialState, action: ActionTypeTypes): initialStateType => {
  switch (action.type) {
    case POST_DATA_STARTED:
      return { ...state, loading: true };
    case POST_DATA_FAILURE:
      return { ...state, loading: false, postDataError: true, errorMessage: action.payload };
    case POST_NEW_CLAIM_SUCCESS:
      return { ...state, loading: false, postDataError: false, claimData: action.payload };
    default:
      return state;
  }
};

export default postDataReducer;
