import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { title, price, service_id, _id, img } = service;

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const due = form.due.value;
    const email = form.email.value;
    const order = {
      img,
      customerName: name,
      date,
      dueAmount: due,
      email,
      serviceId: _id,
      serviceTitle: title,
    };
    console.log(order);

    fetch('https://car-doctor-server-orpin-eight.vercel.app/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert('Order submitted successfully');
        }
      });
  };

  return (
    <div className=" bg-base-200 rounded-lg p-24">
      <h1 className="text-3xl text-center">
        Service Name: <span className="font-bold">{title}</span>
      </h1>
      <form onSubmit={handleBooking} className="card-body ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="form-control">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Customer Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input type="date" name="date" className="input input-bordered" />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="due"
              placeholder="Due Amount"
              defaultValue={'$ ' + price}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Your Email"
              className="input input-bordered"
            />
          </div>
          {/* <div className="col-span-2">
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered textarea-lg w-full "
            ></textarea>
          </div> */}
        </div>
        <div className="form-control mt-6 ">
          <input
            className="btn bg-primary text-white btn-block "
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
