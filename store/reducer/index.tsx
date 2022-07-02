import { combineReducers } from 'redux';
import { adminReducer } from './admin.reducer';
import { customerReducer } from './customer.reducer';
import { customerFlightReducer } from './customerFlight.reducer';
const rootReducer = combineReducers({
  adminReducer,
  customerReducer,
  customerFlightReducer,
});

export default rootReducer;
