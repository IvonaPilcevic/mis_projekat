import {
  createUser,
  makeReservation,
} from './../../src/services/customer.service';
import { Dispatch } from 'redux';
import { AppState } from '../types';
import { CREATE_PROFILE, REMOVE_USER } from './actionTypes';

export const createProfileAction = (
  firstName: string,
  lastName: string,
  email: string,
  jmbg: string
) => {
  return async (dispatch: Dispatch, getState: () => AppState) => {
    try {
      const data = await createUser(firstName, lastName, email, jmbg);
      dispatch({ type: CREATE_PROFILE, payload: data });
    } catch (error) {
      console.log('Error while creating customer profile: ', error);
    }
  };
};

export const makeReservationAction = (flightId: number, customerId: number) => {
  return async (dispatch: Dispatch) => {
    try {
      await makeReservation(customerId, flightId);
      dispatch({ type: REMOVE_USER });
    } catch (error) {
      console.log('Error while making reservation: ', error);
    }
  };
};
