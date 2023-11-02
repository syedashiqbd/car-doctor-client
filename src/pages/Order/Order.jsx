import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import TableRow from '../../components/TableRow';
import axios from 'axios';

const Order = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setOrders(res.data);
    });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm('Are you sure want to delete?');
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
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
    fetch(`http://localhost:5000/bookings/${id}`, {
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
