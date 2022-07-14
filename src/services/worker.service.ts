export const getPassengers = async () => {
  const response = await fetch('http://localhost:8080/api/putnik');
  if (!response?.ok) {
    return Promise.reject(response?.statusText);
  }

  const data = await response?.json();
  return data;
};
