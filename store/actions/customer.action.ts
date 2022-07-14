import { makeReservation } from './../../src/services/customer.service';
import { Dispatch } from 'redux';
import { AppState, CustomerType } from '../types';
import { v4 } from 'uuid';
import { CREATE_PROFILE } from './actionTypes';

export const createProfileAction = (
  firstName: string,
  lastName: string,
  email: string,
  seats: number | undefined
) => {
  return async (dispatch: Dispatch, getState: () => AppState) => {
    try {
      const customer: CustomerType = {
        firstName,
        lastName,
        email,
        seats,
        id: v4(),
      };
      dispatch({ type: CREATE_PROFILE, payload: customer });
    } catch (error) {
      console.log('Error while creating customer profile: ', error);
    }
  };
};

export const makeReservationAction = (flightId: number) => {
  return async () => {
    try {
      await makeReservation(flightId);
    } catch (error) {
      console.log('Error while making reservation: ', error);
    }
  };
};
