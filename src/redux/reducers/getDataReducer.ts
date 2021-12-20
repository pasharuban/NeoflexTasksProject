import {
  GET_DATA_FAILURE,
  GET_CLAIMS_SUCCESS,
  GET_DATA_STARTED,
  GET_CURRENT_CLAIM_SUCCESS,
} from '../../constants/types';
import { ActionTypeTypes } from '../../types/actionTypeTypes';
import { CurrentClaimTypes } from '../../types/currentClaimTypes';

type initialStateType = {
  loading: boolean;
  tableData: any[];
  getDataError: boolean;
  errorMessage: string;
  currentClaim: CurrentClaimTypes | undefined;
};

const initialState: initialStateType = {
  loading: false,
  tableData: [],
  getDataError: false,
  errorMessage: 'No ERROR!',
  currentClaim: undefined,
};

const getDataReducer = (state = initialState, action: ActionTypeTypes): initialStateType => {
  switch (action.type) {
    case GET_DATA_STARTED:
      return { ...state, loading: true };
    case GET_DATA_FAILURE:
      return { ...state, loading: false, getDataError: true, errorMessage: action.payload };
    case GET_CLAIMS_SUCCESS:
      return { ...state, loading: false, getDataError: false, tableData: action.payload };
    case GET_CURRENT_CLAIM_SUCCESS:
      return { ...state, loading: false, getDataError: false, currentClaim: action.payload };
    default:
      return state;
  }
};

export default getDataReducer;
