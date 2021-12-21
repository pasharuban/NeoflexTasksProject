import { combineReducers } from 'redux';

import authReducer from './reducers/authReducer';
import getDataReducer from './reducers/getDataReducer';
import postDataReducer from './reducers/postDataReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  getData: getDataReducer,
  postData: postDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
