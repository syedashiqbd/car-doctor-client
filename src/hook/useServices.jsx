import { useState } from 'react';
import { useEffect } from 'react';

const useServices = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch('https://car-doctor-server-orpin-eight.vercel.app/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return services;
};
export default useServices;
