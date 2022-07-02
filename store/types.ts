export type AppState = {
  adminReducer: Flights;
  customerReducer: Customer;
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

export type CustomerType = {
  firstName: string;
  lastName: string;
  email: string;
  seats: number | undefined;
  id: string;
};

export type Customer = {
  customer: CustomerType;
};
