import React from 'react';
import { Flight as FlightType } from '../../../store/types';
import { Text } from '../Text/Text';
import { Container, Span } from './FlightStyle';

const Flight: React.FC<{ flight: FlightType }> = ({ flight }) => {
  return (
    <Container>
      <Text.bold>
        FLIGHT ID: <Span>{flight?.id} </Span>
      </Text.bold>
      <Text.bold>
        AIRLINE: <Span>{flight?.airline} </Span>
      </Text.bold>
      <Text.bold>
        TIME OF DEPARTURE: <Span>{flight?.timeOfDeparture} </Span>
      </Text.bold>
      <Text.bold>
        TIME OF ARRIVAL: <Span>{flight?.timeOfArrival} </Span>
      </Text.bold>
      <Text.bold>
        DESTINATION: <Span>{flight?.destination} </Span>
      </Text.bold>
      <Text.bold>
        PRICE: <Span>{flight?.price} EUR </Span>
      </Text.bold>
      <Text.bold>
        NUMBER OF SEATS: <Span>{flight?.seats} </Span>
      </Text.bold>
    </Container>
  );
};

export default Flight;
