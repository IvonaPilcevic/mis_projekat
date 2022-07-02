import { combineReducers } from 'redux';
import { adminReducer } from './admin.reducer';
import { customerReducer } from './customer.reducer';

const rootReducer = combineReducers({
  adminReducer,
  customerReducer,
});

export default rootReducer;
