import { MenuItem, TextField } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, SmallButton } from '../src/components/Button/Button';
import Flight from '../src/components/Flight/Flight';
import { Span } from '../src/components/Flight/FlightStyle';
import { Text } from '../src/components/Text/Text';
import { REMOVE_USER } from '../store/actions/actionTypes';
import {
  getAirlinesAction,
  getFlightsAction,
} from '../store/actions/admin.action';
import {
  createProfileAction,
  makeReservationAction,
} from '../store/actions/customer.action';
import { bookFlightAction } from '../store/actions/customerFlight.action';
import { AppState } from '../store/types';
import { Column, Section, Wrapper } from '../styles/admin';

const Customer: NextPage = () => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const customer = useSelector(
    (state: AppState) => state?.customerReducer?.customer
  );

  const airlines = useSelector(
    (state: AppState) => state?.adminReducer?.airlines
  );
  const flights = useSelector(
    (state: AppState) => state?.adminReducer?.flights
  );

  console.log(customer?.id);

  const [airline, setAirline] = React.useState<number>();
  const handleChangeAirline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAirline(parseInt(event.target.value));
  };
  const availableFlights = flights?.filter(
    (flight) => flight?.prevoznik?.id === airline
  );

  React.useEffect(() => {
    dispatch(getAirlinesAction());
  }, []);

  React.useEffect(() => {
    dispatch(getFlightsAction());
  }, []);

  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [seats, setSeats] = React.useState<number>();
  const [JMBG, setJMBG] = React.useState<string>('');
  const [showSuccessMessage, setShowSuccessMessage] =
    React.useState<boolean>(false);

  const handleChangeFirstName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleChangeSeats = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeats(parseInt(event.target.value));
  };

  const onCreateProfile = () => {
    dispatch(createProfileAction(firstName, lastName, email, JMBG));
  };

  React.useEffect(() => {
    if (showSuccessMessage) {
      dispatch({ type: REMOVE_USER });
    }
  }, [showSuccessMessage]);

  const bookFlight = (flightId: number) => {
    dispatch(makeReservationAction(flightId, customer?.id));
    setShowSuccessMessage(true);
  };

  return (
    <Wrapper>
      <Column>
        {customer?.id ? (
          <Text.h2>Make a reservation</Text.h2>
        ) : (
          <Text.h2>Profile details</Text.h2>
        )}
        {customer?.id ? (
          <div>
            <Text.bold>
              Customer ID [JMBG]: <Span>{customer?.jmbg}</Span>
            </Text.bold>
            <Text.bold>
              First name: <Span>{customer?.ime}</Span>
            </Text.bold>
            <Text.bold>
              Last name: <Span>{customer?.prezime}</Span>
            </Text.bold>
            <Text.bold>
              Email: <Span>{customer?.email}</Span>
            </Text.bold>
          </div>
        ) : (
          <div>
            <Section>
              <TextField
                fullWidth
                required
                type="text"
                label="First name"
                value={firstName}
                onChange={handleChangeFirstName}
                variant="standard"
                sx={{
                  '& > :not(style)': { color: 'white' },
                  '& label.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'white',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: 'rgba(255,255,255,0.8)',
                  },
                }}
              />
            </Section>
            <Section>
              <TextField
                fullWidth
                required
                label="Last name"
                type="text"
                value={lastName}
                onChange={handleChangeLastName}
                variant="standard"
                sx={{
                  '& > :not(style)': { color: 'white' },
                  '& label.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'white',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: 'rgba(255,255,255,0.8)',
                  },
                }}
              />
            </Section>
            <Section>
              <TextField
                fullWidth
                required
                label="Email"
                value={email}
                onChange={handleChangeEmail}
                variant="standard"
                type="email"
                sx={{
                  '& > :not(style)': { color: 'white' },
                  '& label.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'white',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: 'rgba(255,255,255,0.8)',
                  },
                }}
              />
            </Section>
            <Section>
              <TextField
                fullWidth
                required
                label="Seats"
                value={seats}
                onChange={handleChangeSeats}
                variant="standard"
                type="number"
                sx={{
                  '& > :not(style)': { color: 'white' },
                  '& label.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'white',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: 'rgba(255,255,255,0.8)',
                  },
                }}
              />
            </Section>

            <Section>
              <TextField
                fullWidth
                required
                label="Personal ID [JMBG]"
                value={JMBG}
                onChange={(e) => setJMBG(e.target.value)}
                variant="standard"
                type="number"
                sx={{
                  '& > :not(style)': { color: 'white' },
                  '& label.Mui-focused': {
                    color: 'white',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'white',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: 'rgba(255,255,255,0.8)',
                  },
                }}
              />
            </Section>
            <Button onClick={onCreateProfile}>Save</Button>
          </div>
        )}
        <Button onClick={() => router.push('/')}>Back to homepage</Button>
      </Column>
      <Column>
        <div style={{ maxWidth: '90%' }}>
          <Text.h2>Book a flight</Text.h2>
          <Section>
            <TextField
              disabled={typeof customer === 'undefined'}
              fullWidth
              id="outlined-select-airline"
              select
              label="Select airline"
              value={airline}
              onChange={handleChangeAirline}
              required
              variant="standard"
              sx={{
                '& > :not(style)': { color: 'white' },
                '& label.Mui-focused': {
                  color: 'white',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'white',
                },
                '& .MuiInput-underline:before': {
                  borderBottomColor: 'rgba(255,255,255,0.8)',
                },
              }}
            >
              {airlines.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.naziv}
                </MenuItem>
              ))}
            </TextField>
          </Section>

          {availableFlights?.length ? (
            <Column>
              <Text.h2>List of flights</Text.h2>
              <div>
                {availableFlights?.map((flight) => (
                  <>
                    <Flight
                      flight={flight}
                      key={flight?.id}
                      showDeleteFlight={false}
                    />
                    <SmallButton onClick={() => bookFlight(flight?.id)}>
                      Make reservation
                    </SmallButton>
                  </>
                ))}
              </div>
            </Column>
          ) : (
            <Text.bold>
              There are no available flights for selected airline
            </Text.bold>
          )}
        </div>

        {showSuccessMessage && (
          <div
            style={{
              margin: '30px auto',
              backgroundColor: 'rgba(0,0,0,0.1)',
              textAlign: 'center',
              padding: '20px',
              borderRadius: '5px',
              border: '1px solid white',
              maxWidth: '300px',
            }}
          >
            <Text.bold>
              Your reservation was successful, return to{' '}
              <Link href="/">
                <a>HOME</a>
              </Link>
            </Text.bold>
          </div>
        )}
      </Column>
    </Wrapper>
  );
};

export default Customer;
