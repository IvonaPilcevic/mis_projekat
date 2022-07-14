export const makeReservation = async (flightId: number) => {
  const response = await fetch(
    `http://localhost:8080/api/rezervacija/6/${flightId}`,
    { method: 'POST' }
  );
  if (!response?.ok) {
    return Promise.reject(response.statusText);
  }

  const data = await response?.json();
  return data;
};
