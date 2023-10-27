const TableRow = ({ order, handleDelete, handleApproved }) => {
  const { _id, img, serviceTitle, dueAmount, date, status } = order;

  return (
    <tr>
      <th>
        {status === 'Approved' ? (
          ''
        ) : (
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline btn-sm hover:text-primary hover:bg-transparent  bg-primary text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </th>
      <td>
        <div className="avatar">
          <div className="rounded-xl w-24 h-24">
            <img src={img} />
          </div>
        </div>
      </td>
      <td>{serviceTitle}</td>
      <td>{dueAmount}</td>
      <td>{date}</td>
      <th>
        {status === 'Approved' ? (
          <span className=" bg-green-700 text-white py-2 px-3 rounded-lg">
            {status}
          </span>
        ) : (
          <button
            onClick={() => handleApproved(_id)}
            className="btn bg-primary text-white btn-sm"
          >
            Pending
          </button>
        )}
      </th>
    </tr>
  );
};

export default TableRow;
