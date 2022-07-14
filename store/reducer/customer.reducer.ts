import { CREATE_PROFILE, REMOVE_USER } from '../actions/actionTypes';

const initialState = {
  customer: {},
};

export const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CREATE_PROFILE:
      return {
        ...state,
        customer: { ...action.payload },
      };
    case REMOVE_USER:
      return {
        ...state,
        customer: undefined,
      };

    default:
      return state;
  }
};
