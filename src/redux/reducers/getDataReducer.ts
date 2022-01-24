import {
  GET_DATA_FAILURE,
  GET_CLAIMS_SUCCESS,
  GET_DATA_STARTED,
  GET_CURRENT_CLAIM_SUCCESS,
  CLOSE_CURRENT_CLAIM,
  UPDATE_CURRENT_CLAIM_SUCCESS,
  UPDATE_CURRENT_CLAIM_STARTED,
  UPDATE_CURRENT_CLAIM_FAILURE,
} from '../../constants/actionTypes';
import { ActionTypeTypes } from '../../types/actionTypeTypes';
import { ClaimTypes } from '../../types/claimTypes';

type initialStateType = {
  loading: boolean;
  tableData: ClaimTypes[];
  totalClaims: number;
  getDataError: boolean;
  errorMessage: string;
  currentClaim: ClaimTypes;
  updatedCurrentClaim: ClaimTypes;

  updateClaimLoading: boolean;
  updateClaimError: boolean;
  updateClaimErrorMessage: string;
};

const initialState: initialStateType = {
  loading: false,
  tableData: [],
  getDataError: false,
  totalClaims: 0,
  errorMessage: 'No ERROR!',
  currentClaim: { noData: 'NO DATA' },
  updatedCurrentClaim: {},
  updateClaimLoading: false,
  updateClaimError: false,
  updateClaimErrorMessage: 'No ERROR!',
};

const getDataReducer = (state = initialState, action: ActionTypeTypes): initialStateType => {
  switch (action.type) {
    case GET_DATA_STARTED:
      return { ...state, loading: true };
    case GET_DATA_FAILURE:
      return { ...state, loading: false, getDataError: true, errorMessage: action.payload };
    case GET_CLAIMS_SUCCESS:
      return {
        ...state,
        loading: false,
        getDataError: false,
        tableData: action.payload.data,
        totalClaims: action.payload.totalItems,
      };
    case GET_CURRENT_CLAIM_SUCCESS:
      return {
        ...state,
        loading: false,
        getDataError: false,
        currentClaim: action.payload,
      };
    case CLOSE_CURRENT_CLAIM:
      return { ...state, currentClaim: { noData: 'NO DATA' } };
    case UPDATE_CURRENT_CLAIM_SUCCESS:
      return { ...state, updateClaimLoading: false, updateClaimError: false, updatedCurrentClaim: action.payload };
    case UPDATE_CURRENT_CLAIM_FAILURE:
      return { ...state, updateClaimLoading: false, updateClaimError: true, updateClaimErrorMessage: action.payload };
    case UPDATE_CURRENT_CLAIM_STARTED:
      return { ...state, updateClaimLoading: true, updateClaimError: false };
    default:
      return state;
  }
};

export default getDataReducer;
