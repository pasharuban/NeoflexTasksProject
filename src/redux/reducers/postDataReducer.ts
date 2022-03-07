import { BY_POST_DATA_FAILURE, BY_POST_NEW_CLAIM_SUCCESS, BY_POST_DATA_STARTED } from '../../constants/actionTypes';
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
    case BY_POST_DATA_STARTED:
      return { ...state, loading: true };
    case BY_POST_DATA_FAILURE:
      return { ...state, loading: false, postDataError: true, errorMessage: action.payload };
    case BY_POST_NEW_CLAIM_SUCCESS:
      return { ...state, loading: false, postDataError: false, claimData: action.payload };
    default:
      return state;
  }
};

export default postDataReducer;
