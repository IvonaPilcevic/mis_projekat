import {
  GET_AIRLINES,
  GET_DESTINATIONS,
  GET_FLIGHTS,
} from '../actions/actionTypes';

const initialState = {
  flights: [],
  airlines: [],
  destinations: [],
};

export const adminReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_AIRLINES:
      return {
        ...state,
        airlines: [...action.payload],
      };
    case GET_DESTINATIONS:
      return {
        ...state,
        destinations: [...action.payload],
      };
    case GET_FLIGHTS:
      return {
        ...state,
        flights: [...action.payload],
      };
    default:
      return state;
  }
};
