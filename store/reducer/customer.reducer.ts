import { CREATE_PROFILE } from '../actions/actionTypes';

const initialState = {
  customer: {
    firstName: 'Ivona',
    lastName: 'Pilcevic',
    email: 'ivona@thinkbig.dev',
    seats: 2,
    id: 1,
  },
};

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
