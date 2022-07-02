import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../src/components/Button/Button';
import { Span } from '../src/components/Flight/FlightStyle';
import { Text } from '../src/components/Text/Text';
import { AppState } from '../store/types';
import { Column } from '../styles/admin';
import { Wrapper } from '../styles/worker';

const Worker: NextPage = () => {
  const router = useRouter();
  const customerFlight = useSelector(
    (state: AppState) => state?.customerFlightReducer?.customerFlight
  );
  return (
    <Column>
      <Text.h2>All booked flights</Text.h2>
      {customerFlight?.map((item, index) => (
        <Wrapper>
          <Text.bold key={index}>
            Customer with id: <Span>{item.customerId}</Span> booked a flight
            with id: <Span>{item.flightId}</Span>
          </Text.bold>
        </Wrapper>
      ))}
      <Button onClick={() => router.push('/', '/')}>Back to homepage</Button>
    </Column>
  );
};

export default Worker;
