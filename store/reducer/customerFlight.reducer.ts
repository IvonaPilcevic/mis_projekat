import { BOOK_FLIGHT } from '../actions/actionTypes';

const initialState = {};

export const customerFlightReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BOOK_FLIGHT:
      return {
        ...state,
        customerId: action.payload?.customerId,
        flightId: action?.payload?.flightId,
      };
    default:
      return state;
  }
};
