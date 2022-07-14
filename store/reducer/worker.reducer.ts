import { GET_PASSENGERS } from '../actions/actionTypes';

const initialState = {
  passengers: [],
};

export const workerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_PASSENGERS:
      return {
        ...state,
        passengers: [...action.payload],
      };
    default:
      return state;
  }
};
