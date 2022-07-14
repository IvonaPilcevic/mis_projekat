import { combineReducers } from 'redux';
import { adminReducer } from './admin.reducer';
import { customerReducer } from './customer.reducer';
import { customerFlightReducer } from './customerFlight.reducer';
import { workerReducer } from './worker.reducer';

const rootReducer = combineReducers({
  adminReducer,
  customerReducer,
  customerFlightReducer,
  workerReducer,
});

export default rootReducer;
