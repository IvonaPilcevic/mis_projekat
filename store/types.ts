import { workerReducer } from './reducer/worker.reducer';
export type AppState = {
  adminReducer: AdminReducer;
  customerReducer: Customer;
  customerFlightReducer: CustomerFlight;
  workerReducer: WorkerReducer;
};

export type Flight = {
  vremePolask: Date | string;
  vremeDolaska: Date | string;
  brojTerminala: number;
  kapacitet: number;
  brojRezervacija: number;
  cena: number;
  prevoznikId: number;
  destinacijaId: number;
};

export type WorkerReducer = {
  passengers: Passenger[];
};

export type Passenger = {
  id: number;
  ime: string;
  prezime: string;
  email: string;
  jmbg: string;
  letovi: FlightResponse[];
};
export type AdminReducer = {
  flights: FlightResponse[];
  airlines: Airline[];
  destinations: Destination[];
};

export type FlightResponse = {
  id: number;
  vremePolask: number[];
  vremeDolaska: number[];
  brojTerminala: number;
  kapacitet: number;
  brojRezervacija: number;
  cena: number;
  prevoznik: {
    id: number;
    naziv: string;
  };
  destinacija: {
    id: number;
    imeGrada: string;
    imeAerodroma: string;
    udaljenost: number;
  };
};

export type Airline = {
  id: number;
  naziv: string;
};

export type Destination = {
  id: number;
  imeGrada: string;
  imeAerodroma: string;
  udaljenost: number;
};

export type CustomerType = {
  id: number;
  ime: string;
  prezime: string;
  email: string;
  jmbg: string;
  letovi: FlightResponse[];
};

export type Customer = {
  customer: CustomerType;
};

export type CustomerFlightType = {
  customerId: string;
  flightId: string;
};

export type CustomerFlight = {
  customerFlight: CustomerFlightType[];
};
