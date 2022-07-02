import { CREATE_FLIGHT } from '../actions/actionTypes';

const initialState = {
  flights: [],
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
