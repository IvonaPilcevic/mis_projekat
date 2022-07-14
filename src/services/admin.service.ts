import { Flight } from '../../store/types';

export const getAirlines = async () => {
  const response = await fetch('http://localhost:8080/api/prevoznik');
  if (!response?.ok) {
    return Promise.reject(response?.statusText);
  }

  const data = await response?.json();
  return data;
};

export const getDestinations = async () => {
  const response = await fetch('http://localhost:8080/api/destinacija');
  if (!response?.ok) {
    return Promise.reject(response?.statusText);
  }

  const data = await response?.json();
  return data;
};

export const createFlight = async (flight: Flight) => {
  const response = await fetch('http://localhost:8080/api/let', {
    method: 'POST',
    body: JSON.stringify(flight),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response?.ok) {
    return Promise.reject(response?.statusText);
  }

  const data = await response?.json();
  return data;
};

export const getFlights = async () => {
  const response = await fetch('http://localhost:8080/api/let');
  if (!response?.ok) {
    return Promise.reject(response?.statusText);
  }

  const data = await response?.json();
  return data;
};

export const deleteFlight = async (flightId: number) => {
  const response = await fetch(
    `http://localhost:8080/api/let/obrisi/${flightId}`,
    {
      method: 'POST',
    }
  );

  if (!response?.ok) {
    return Promise.reject(response?.statusText);
  }

  const data = await response?.json();
  return data;
};
