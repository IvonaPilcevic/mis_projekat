import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import moment from 'moment';
import { MenuItem, TextField } from '@mui/material';

import { Button } from '../src/components/Button/Button';
import Flight from '../src/components/Flight/Flight';
import { Text } from '../src/components/Text/Text';
import {
  createFlightAction,
  deleteFlightAction,
  getAirlinesAction,
  getDestinationsAction,
  getFlightsAction,
} from '../store/actions/admin.action';
import { AppState, FlightResponse } from '../store/types';
import { Column, Section, Wrapper } from '../styles/admin';

const Admin: NextPage = () => {
  const dispatch: any = useDispatch();
  const router = useRouter();
  const [shouldUpdateFlights, setShouldUpdateFlights] =
    React.useState<boolean>(false);
  const destinations = useSelector(
    (state: AppState) => state?.adminReducer?.destinations
  );
  const airlines = useSelector(
    (state: AppState) => state?.adminReducer?.airlines
  );
  const flights = useSelector(
    (state: AppState) => state?.adminReducer?.flights
  );

  React.useEffect(() => {
    dispatch(getAirlinesAction());
  }, []);

  React.useEffect(() => {
    dispatch(getDestinationsAction());
  }, []);

  React.useEffect(() => {
    dispatch(getFlightsAction());
  }, [shouldUpdateFlights]);

  const goBack = () => {
    router.push('/', '/');
  };
  const createFlight = () => {
    dispatch(
      createFlightAction(
        airline || 1,
        timeOfDeparture,
        timeOfArrival,
        destination || 1,
        price || 1,
        seats || 1,
        terminal || 1
      )
    );
    setShouldUpdateFlights((prevState) => !prevState);
    setAirline(undefined);
    setDestination(undefined);
    setPrice(undefined);
    setSeats(undefined);
    setTimeOfArrival(
      moment(new Date().toISOString()).format('yyyy-MM-DDThh:mm')
    );
    setTimeOfDeparture(
      moment(new Date().toISOString()).format('yyyy-MM-DDThh:mm')
    );
  };

  const [airline, setAirline] = React.useState<number>();
  const [destination, setDestination] = React.useState<number>();
  const [price, setPrice] = React.useState<number>();
  const [seats, setSeats] = React.useState<number>();
  const [terminal, setTerminal] = React.useState<number>();

  const [timeOfDeparture, setTimeOfDeparture] = React.useState<string>(
    moment(new Date().toISOString()).format('yyyy-MM-DDThh:mm')
  );
  const [timeOfArrival, setTimeOfArrival] = React.useState<string>(
    moment(new Date().toISOString()).format('yyyy-MM-DDThh:mm')
  );

  const handleChangeAirline = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAirline(parseInt(event.target.value));
  };
  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(event.target.value));
  };
  const handleChangeSeats = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeats(parseInt(event.target.value));
  };
  const handleChangeTerminal = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerminal(parseInt(event.target.value));
  };
  const handleChangeDestination = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDestination(parseInt(event.target.value));
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

  const deleteFlight = (flightId: number) => {
    dispatch(deleteFlightAction(flightId));
    setShouldUpdateFlights((prevState) => !prevState);
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
                <MenuItem key={option.id} value={option.id}>
                  {option.naziv}
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
                <MenuItem key={option.id} value={option.id}>
                  {option.imeGrada} ({option.imeAerodroma}, {option.udaljenost}
                  km)
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
              label="Number of seats (Capacity)"
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
              onChange={handleChangeTerminal}
              value={terminal}
              variant="standard"
              label="Terminal"
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
          {flights?.map((flight: FlightResponse) => (
            <Flight
              flight={flight}
              key={flight?.id}
              deleteFlight={deleteFlight}
              showDeleteFlight
            />
          ))}
        </div>
      </Column>
    </Wrapper>
  );
};

export default Admin;
