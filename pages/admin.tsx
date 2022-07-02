import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import { MenuItem, TextField } from '@mui/material';

import { Button } from '../src/components/Button/Button';
import Flight from '../src/components/Flight/Flight';
import { Text } from '../src/components/Text/Text';
import { createFlightAction } from '../store/actions/admin.action';
import { AppState, Flight as FlightType } from '../store/types';
import { Column, Section, Wrapper } from '../styles/admin';
import { airlines, destinations } from '../src/data';

const Admin: NextPage = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  const flights = useSelector(
    (state: AppState) => state?.adminReducer?.flights
  );
  const goBack = () => {
    router.push('/', '/');
  };
  const createFlight = () => {
    dispatch(
      createFlightAction(
        airline,
        timeOfDeparture,
        timeOfArrival,
        destination,
        price,
        seats
      )
    );
    setAirline('');
    setDestination('');
    setPrice(undefined);
    setSeats(undefined);
    setTimeOfArrival(
      moment(new Date().toISOString()).format('yyyy-MM-DDThh:mm')
    );
    setTimeOfDeparture(
      moment(new Date().toISOString()).format('yyyy-MM-DDThh:mm')
    );
  };

  const [airline, setAirline] = React.useState<string>('');
  const [destination, setDestination] = React.useState<string>('');
  const [price, setPrice] = React.useState<number>();
  const [seats, setSeats] = React.useState<number>();

  const [timeOfDeparture, setTimeOfDeparture] = React.useState<string>(
    moment(new Date().toISOString()).format('yyyy-MM-DDThh:mm')
  );
  const [timeOfArrival, setTimeOfArrival] = React.useState<string>(
    moment(new Date().toISOString()).format('yyyy-MM-DDThh:mm')
  );

  const handleChangeAirline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAirline(event.target.value);
  };
  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value));
  };
  const handleChangeSeats = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeats(parseInt(event.target.value));
  };
  const handleChangeDestination = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDestination(event.target.value);
  };
  const onTimeOfDepartureChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTimeOfDeparture(event.target.value);
  };

  const onTimeOfArrivalChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTimeOfArrival(event.target.value);
  };
  return (
    <Wrapper>
      <Column>
        <div style={{ width: '50%' }}>
          <Text.h2>Create a flight</Text.h2>
          <Section>
            <TextField
              fullWidth
              id="outlined-select-airline"
              select
              label="Airline"
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
          <Section>
            <TextField
              fullWidth
              required
              type="datetime-local"
              onChange={onTimeOfDepartureChangeHandler}
              value={timeOfDeparture}
              placeholder=""
              variant="standard"
              label="Date and time of departure"
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
              type="datetime-local"
              onChange={onTimeOfArrivalChangeHandler}
              value={timeOfArrival}
              placeholder=""
              variant="standard"
              label="Date and time of arrival"
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
              id="outlined-select-destination"
              select
              label="Destination"
              value={destination}
              onChange={handleChangeDestination}
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
              {destinations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Section>

          <Section>
            <TextField
              fullWidth
              required
              type="number"
              onChange={handleChangePrice}
              value={price}
              variant="standard"
              label="Flight price in EUR"
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
              type="number"
              onChange={handleChangeSeats}
              value={seats}
              variant="standard"
              label="Number of seats"
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
          <Button onClick={createFlight}>Create</Button>
          <Button onClick={goBack}>Back to homepage</Button>
        </div>
      </Column>
      <Column>
        <Text.h2>List of flights</Text.h2>
        <div>
          {flights?.map((flight: FlightType, i: number) => (
            <Flight flight={flight} key={i * 3} />
          ))}
        </div>
      </Column>
    </Wrapper>
  );
};

export default Admin;
