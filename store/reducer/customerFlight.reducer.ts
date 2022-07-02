import { BOOK_FLIGHT } from '../actions/actionTypes';

const initialState = {
  customerFlight: [{ customerId: 1, flightId: 1 }],
};

export const customerFlightReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BOOK_FLIGHT:
      return {
        ...state,
        customerFlight: [
          ...state.customerFlight,
          {
            customerId: action.payload?.customerId,
            flightId: action?.payload?.flightId,
          },
        ],
      };
    default:
      return state;
  }
};
