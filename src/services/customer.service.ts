export const makeReservation = async (customerId: number, flightId: number) => {
  const response = await fetch(
    `http://localhost:8080/api/rezervacija/${customerId}/${flightId}`,
    { method: 'POST' }
  );
  if (!response?.ok) {
    return Promise.reject(response.statusText);
  }

  const data = await response?.json();
  return data;
};

export const createUser = async (
  name: string,
  lastName: string,
  email: string,
  jmbg: string
) => {
  const body = {
    ime: name,
    prezime: lastName,
    email,
    jmbg,
  };
  const response = await fetch('http://localhost:8080/api/putnik', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response?.ok) {
    return Promise.reject(response.statusText);
  }

  const data = await response?.json();
  return data;
};
