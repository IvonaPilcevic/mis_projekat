import { CREATE_FLIGHT } from '../actions/actionTypes';
import { v4 } from 'uuid';
import moment from 'moment';

const initialState = {
  flights: [
    {
      airline: 'lufthansa',
      timeOfDeparture: moment(new Date().toISOString()).format(
        'yyyy-MM-DDThh:mm'
      ),
      timeOfArrival: moment(new Date().toISOString()).format(
        'yyyy-MM-DDThh:mm'
      ),
      destination: 'paris',
      price: 1500,
      seats: 2,
      id: 1,
    },
  ],
};

export const adminReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_FLIGHT:
      return {
        ...state,
        flights: [...state.flights, action.payload],
        /**
         * TODO:
         * flights: [...action.payload] if all flights are returned from api
         */
      };
    default:
      return state;
  }
};
