import { combineReducers } from 'redux';

import authReducer from './reducers/authReducer';
import formsReducer from './reducers/formsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  forms: formsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
