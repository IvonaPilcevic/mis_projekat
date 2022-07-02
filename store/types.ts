export type AppState = {
  adminReducer: Flights;
};

export type Flight = {
  airline: string;
  timeOfDeparture: string;
  timeOfArrival: string;
  destination: string;
  price: number | undefined;
  seats: number | undefined;
  id: string;
};

export type Flights = {
  flights: Flight[];
};
