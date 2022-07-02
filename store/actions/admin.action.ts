import { Flight } from './../types';
import { Dispatch } from 'redux';
import { CREATE_FLIGHT } from './actionTypes';
//@ts-ignore
import { v4 } from 'uuid';

export const createFlightAction = (
  airline: string,
  timeOfDeparture: string,
  timeOfArrival: string,
  destination: string,
  price: number | undefined,
  seats: number | undefined
) => {
  return (dispatch: Dispatch) => {
    try {
      // const data = await createFlight
      const flight: Flight = {
        airline,
        timeOfDeparture,
        timeOfArrival,
        destination,
        price,
        seats,
        id: v4(),
      };

      //TODO: should dispatch data?.data if flights come from api
      dispatch({ type: CREATE_FLIGHT, payload: flight });
    } catch (error) {
      console.log('Error while creating flight: ', error);
    }
  };
};
