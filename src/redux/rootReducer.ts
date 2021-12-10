import { combineReducers } from 'redux';

import authReducer from './reducers/authReducer';
import incomingClaimFormReducer from './reducers/incomingClaimFormReducer';
import newClaimFormReducer from './reducers/newClaimFormReducer';
import registrationFormReducer from './reducers/registrationFormReducer';

const rootReducer = combineReducers({
  authReducer,
  incomingClaimFormReducer,
  newClaimFormReducer,
  registrationFormReducer,
});

export default rootReducer;
