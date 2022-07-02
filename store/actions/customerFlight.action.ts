import { Dispatch } from 'redux';
import { AppState } from '../types';
import { BOOK_FLIGHT } from './actionTypes';

export const bookFlightAction = (customerId: string, flightId: string) => {
  return async (dispatch: Dispatch, getState: () => AppState) => {
    try {
      dispatch({ type: BOOK_FLIGHT, payload: { customerId, flightId } });
    } catch (error) {
      console.log('Error while booking a flight: ', error);
    }
  };
};
