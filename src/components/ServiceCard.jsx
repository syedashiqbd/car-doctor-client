import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className="card min-w-[364px] border p-5 rounded-lg ">
      <figure className="">
        <img src={img} className="rounded-lg h-[209px]" />
      </figure>
      <div className="card-body p-0 mt-5 ">
        <h2 className="text-[#444] text-2xl font-bold">{title}</h2>
        <div className="text-primary text-xl font-semibold flex justify-between items-center">
          <p>Price : ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke="#FF3811"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
