import { Dispatch } from 'redux';
import { getPassengers } from './../../src/services/worker.service';
import { GET_PASSENGERS } from './actionTypes';

export const getPassengersAction = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const data = await getPassengers();
      dispatch({ type: GET_PASSENGERS, payload: data });
    } catch (error) {
      console.log('Error while fetching flights', error);
    }
  };
};
