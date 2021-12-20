import { combineReducers } from 'redux';

import authReducer from './reducers/authReducer';
import formsReducer from './reducers/formsReducer';
import getDataReducer from './reducers/getDataReducer';
import postDataReducer from './reducers/postDataReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  forms: formsReducer,
  getData: getDataReducer,
  postData: postDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
