import { BOOK_FLIGHT } from '../actions/actionTypes';

const initialState = {
  customerFlight: [
    { customerId: 1007856238653, flightId: 'fdsfsdfs-f43243243243-432432' },
    { customerId: 6302749573929, flightId: 'cdasnkfae-fce33323223-vfvds' },
    { customerId: 7568402398575, flightId: '43fdsf-fdsgfsdgdsfs-fghhl6' },
    { customerId: 4372895959729, flightId: 'ffds-zaxawa-hhggfdf' },
    { customerId: 4382808088002, flightId: 'zaswc-545nbbbh-vfvds' },
  ],
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
