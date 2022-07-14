import React from 'react';
import { FlightResponse } from '../../../store/types';
import { SmallButton } from '../Button/Button';
import { Text } from '../Text/Text';
import { Container, Span } from './FlightStyle';

const Flight: React.FC<{
  flight: FlightResponse;
  deleteFlight?: any;
  showDeleteFlight: boolean;
}> = ({ flight, deleteFlight, showDeleteFlight = true }) => {
  return (
    <Container>
      <Text.bold>
        FLIGHT ID: <Span>{flight?.id} </Span>
      </Text.bold>
      <Text.bold>
        AIRLINE: <Span>{flight?.prevoznik?.naziv} </Span>
      </Text.bold>
      <Text.bold>
        TIME OF DEPARTURE:{' '}
        <Span>
          {flight?.vremePolask[2]}.{flight?.vremePolask[1]}.
          {flight.vremePolask[0]} u {flight.vremePolask[3]}:
          {flight.vremePolask[4]}h
        </Span>
      </Text.bold>
      <Text.bold>
        TIME OF ARRIVAL:{' '}
        <Span>
          {flight?.vremeDolaska[2]}.{flight?.vremeDolaska[1]}.
          {flight.vremeDolaska[0]} u {flight.vremeDolaska[3]}:
          {flight.vremeDolaska[4]}h
        </Span>
      </Text.bold>
      <Text.bold>
        DESTINATION: <Span>{flight?.destinacija?.imeGrada} </Span>
      </Text.bold>
      <Text.bold>
        PRICE: <Span>{flight?.cena} EUR </Span>
      </Text.bold>
      <Text.bold>
        NUMBER OF SEATS: <Span>{flight?.kapacitet} </Span>
      </Text.bold>

      {showDeleteFlight && (
        <div
          style={{
            margin: 'auto',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <SmallButton onClick={() => deleteFlight(flight?.id)}>
            Delete this flight
          </SmallButton>
        </div>
      )}
    </Container>
  );
};

export default Flight;
