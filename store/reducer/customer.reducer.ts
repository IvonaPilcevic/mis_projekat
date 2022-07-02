import { CREATE_PROFILE } from '../actions/actionTypes';

const initialState = {};

export const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_PROFILE:
      return {
        ...state,
        customer: { ...action.payload },
      };
    default:
      return state;
  }
};
