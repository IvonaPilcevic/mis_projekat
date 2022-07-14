import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../src/components/Button/Button';
import { Span } from '../src/components/Flight/FlightStyle';
import { Text } from '../src/components/Text/Text';
import { getPassengersAction } from '../store/actions/worker.action';
import { AppState } from '../store/types';
import { Column } from '../styles/admin';
import { Wrapper } from '../styles/worker';

const Worker: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const customerFlight = useSelector(
    (state: AppState) => state?.customerFlightReducer?.customerFlight
  );

  const passengers = useSelector(
    (state: AppState) => state?.workerReducer?.passengers
  );
  console.log(passengers);

  React.useEffect(() => {
    //@ts-ignore
    dispatch(getPassengersAction());
  }, []);

  return (
    <Column>
      <Text.h2>All booked flights</Text.h2>
      {passengers?.map(
        (passenger) =>
          (passenger?.letovi?.length &&
            passenger?.letovi?.map((flight) => (
              <Wrapper>
                <Text.bold key={passenger?.id + flight?.id}>
                  Passenger with jmbg:{' '}
                  <Span>
                    {passenger?.prezime} ({passenger?.ime} {passenger?.email})
                  </Span>{' '}
                  booked a flight with id: <Span>{flight?.id}</Span>
                </Text.bold>
              </Wrapper>
            ))) || <></>
      )}

      <Button onClick={() => router.push('/', '/')}>Back to homepage</Button>
    </Column>
  );
};

export default Worker;
