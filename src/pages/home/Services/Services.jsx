import { useEffect, useState } from 'react';
import ServiceCard from '../../../components/ServiceCard';

const Services = () => {
  const [services, setServices] = useState();
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-32">
      <div className="w-2/3 mx-auto">
        <p className="text-primary font-bold text-xl text-center">Service</p>
        <h1 className="text-[45px] font-bold text-[#151515]  mt-5 mb-7 text-center">
          Our Service Area
        </h1>

        <p className="text-[#737373] mt-5 mb-7 text-center">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
