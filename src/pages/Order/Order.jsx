import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import TableRow from '../../components/TableRow';
import useAxiosSecure from '../../hook/useAxiosSecure';

const Order = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const axiosInstance = useAxiosSecure();

  // const url = `https://car-doctor-server-orpin-eight.vercel.app/orders?email=${user?.email}`;

  const url = `/orders?email=${user?.email}`; //base url setup in axiosInstance

  useEffect(() => {
    // axios.get(url, { withCredentials: true }).then((res) => {
    //   setOrders(res.data);
    // });
    axiosInstance.get(url).then((res) => setOrders(res.data));
  }, [url, axiosInstance]);

  const handleDelete = (id) => {
    const proceed = confirm('Are you sure want to delete?');
    if (proceed) {
      fetch(`https://car-doctor-server-orpin-eight.vercel.app/orders/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('Successfully Deleted');
          }
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        });
    }
  };

  const handleApproved = (id) => {
    fetch(`https://car-doctor-server-orpin-eight.vercel.app/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'Approved' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert('Status updated successfully');
          //   update state on UI and changed status value
          const remaining = orders.filter((order) => order._id !== id);
          const updated = orders.find((order) => order._id === id);
          updated.status = 'Approved';
          const newOrders = [updated, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <>
      {orders?.length ? (
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-gray-200">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Service Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <TableRow
                  key={order._id}
                  order={order}
                  handleDelete={handleDelete}
                  handleApproved={handleApproved}
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-primary text-4xl text-center font-semibold">
          You have no product added !!
        </p>
      )}
    </>
  );
};

export default Order;
