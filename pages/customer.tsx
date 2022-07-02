import { MenuItem, TextField } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, SmallButton } from '../src/components/Button/Button';
import Flight from '../src/components/Flight/Flight';
import { Span } from '../src/components/Flight/FlightStyle';
import { Text } from '../src/components/Text/Text';
import { airlines } from '../src/data';
import { createProfileAction } from '../store/actions/customer.action';
import { bookFlightAction } from '../store/actions/customerFlight.action';
import { AppState, Flight as FlightType } from '../store/types';
import { Column, Section, Wrapper } from '../styles/admin';

const Customer: NextPage = () => {
  const dispatch: any = useDispatch();
  const flights = useSelector(
    (state: AppState) => state?.adminReducer?.flights
  );
  const customer = useSelector(
    (state: AppState) => state?.customerReducer?.customer
  );
  const [airline, setAirline] = React.useState<string>('');
  const handleChangeAirline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAirline(event.target.value);
  };
  const availableFlights = flights?.filter(
    (flight) => flight?.airline === airline
  );

  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [seats, setSeats] = React.useState<number>();

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
    dispatch(createProfileAction(firstName, lastName, email, seats));
  };

  const bookFlight = (flightId: string) => {
    dispatch(bookFlightAction(customer?.id, flightId));
  };
  return (
    <Wrapper>
      <Column>
        {typeof customer === 'undefined' ? (
          <Text.h2>Create profile</Text.h2>
        ) : (
          <Text.h2>Profile details</Text.h2>
        )}
        {customer ? (
          <div>
            <Text.bold>
              Customer ID: <Span>{customer?.id}</Span>
            </Text.bold>
            <Text.bold>
              First name: <Span>{customer?.firstName}</Span>
            </Text.bold>
            <Text.bold>
              Last name: <Span>{customer?.lastName}</Span>
            </Text.bold>
            <Text.bold>
              Email: <Span>{customer?.email}</Span>
            </Text.bold>
            <Text.bold>
              Seats: <Span>{customer?.seats}</Span>
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
            <Button onClick={onCreateProfile}>Save</Button>
          </div>
        )}
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
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Section>

          {availableFlights?.length ? (
            <Column>
              <Text.h2>List of flights</Text.h2>
              <div>
                {availableFlights?.map((flight: FlightType, i: number) => (
                  <>
                    <Flight flight={flight} key={i * 3} />
                    <SmallButton onClick={() => bookFlight(flight?.id)}>
                      Select flight
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
      </Column>
    </Wrapper>
  );
};

export default Customer;
