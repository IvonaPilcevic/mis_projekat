import { Dispatch } from 'redux';
import { GET_AIRLINES, GET_DESTINATIONS, GET_FLIGHTS } from './actionTypes';
import {
  createFlight,
  deleteFlight,
  getAirlines,
  getDestinations,
  getFlights,
} from '../../src/services/admin.service';

export const createFlightAction = (
  airline: number,
  timeOfDeparture: string,
  timeOfArrival: string,
  destination: number,
  price: number,
  seats: number,
  terminal: number
) => {
  return async (dispatch: Dispatch) => {
    try {
      const flight = {
        vremePolask: timeOfDeparture,
        vremeDolaska: timeOfArrival,
        brojTerminala: terminal,
        kapacitet: seats,
        brojRezervacija: 5,
        cena: price,
        prevoznikId: airline,
        destinacijaId: destination,
      };

      await createFlight(flight);
    } catch (error) {
      console.log('Error while creating flight: ', error);
    }
  };
};

export const getAirlinesAction = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const data = await getAirlines();
      dispatch({ type: GET_AIRLINES, payload: data });
    } catch (error) {
      console.log('Error while fetching airlines: ', error);
    }
  };
};

export const getDestinationsAction = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const data = await getDestinations();
      dispatch({ type: GET_DESTINATIONS, payload: data });
    } catch (error) {
      console.log('Error while fetching destinations: ', error);
    }
  };
};

export const getFlightsAction = () => {
  return async (dispatch: Dispatch, getState: any) => {
    try {
      const data = await getFlights();
      dispatch({ type: GET_FLIGHTS, payload: data });
    } catch (error) {
      console.log('Error while fetching flights', error);
    }
  };
};

export const deleteFlightAction = (flightId: number) => {
  return async () => {
    try {
      await deleteFlight(flightId);
    } catch (error) {
      console.log('Error while deleting flight: ', error);
    }
  };
};
