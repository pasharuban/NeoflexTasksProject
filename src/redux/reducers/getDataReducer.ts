import { GET_DATA_FAILURE, GET_CLAIMS_SUCCESS, GET_DATA_STARTED } from '../actions/types';
import { ActionTypeTypes } from '../../types/actionTypeTypes';

type initialStateType = {
  loading: boolean;
  tableData: any[];
  getDataError: boolean;
  errorMessage: string;
};

const initialState: initialStateType = {
  loading: false,
  tableData: [],
  getDataError: false,
  errorMessage: 'No ERROR!',
};

const getDataReducer = (state = initialState, action: ActionTypeTypes): initialStateType => {
  switch (action.type) {
    case GET_DATA_STARTED:
      return { ...state, loading: true };
    case GET_DATA_FAILURE:
      return { ...state, loading: false, getDataError: true, errorMessage: action.payload };
    case GET_CLAIMS_SUCCESS:
      return { ...state, loading: false, getDataError: false, tableData: action.payload };
    default:
      return state;
  }
};

export default getDataReducer;
