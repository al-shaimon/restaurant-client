import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Message = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: messages = [], refetch } = useQuery(['messages'], async () => {
    const res = await axiosSecure('/contact');
    return res.data;
  });

  const sortedMessages = messages.sort((a, b) => new Date(b.time) - new Date(a.time));

  const handleDelete = (message) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://restaurant-server-seven.vercel.app/contact/${message._id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire('Deleted!', 'Message has been deleted.', 'success');
            }
          });
      }
    });
  };

  const handleStatusChange = (message) => {
    fetch(`https://restaurant-server-seven.vercel.app/contact/${message._id}`, {
      method: 'PATCH',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
        }
      });
  };

  function formatDate(dateString) {
    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div className="w-full mx-5">
      <SectionTitle heading="All Messages" subHeading="Contact"></SectionTitle>
      {sortedMessages.map((message, index) => (
        <div key={index}>
          {message?.status === 'not read' ? (
            <div
              //key={index}
              tabIndex={0}
              className="collapse border border-base-300 bg-red-300 my-2"
            >
              <div className="collapse-title text-xl font-medium flex justify-between">
                {message?.name}
                <div>
                  <button
                    onClick={() => handleStatusChange(message)}
                    className="btn bg-green-500 mx-3"
                  >
                    <FaCheck></FaCheck>
                  </button>
                  <button
                    onClick={() => handleDelete(message)}
                    className="btn bg-[#B91C1C] text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </div>
              </div>
              <div className="collapse-content">
                <p>Name: {message?.name}</p>
                <p>Phone: {message?.phone}</p>
                <p>Email: {message?.email}</p>
                <p>Date: {formatDate(message?.time)}</p>
                <p>
                  Message: <br />
                  {message?.message}
                </p>
              </div>
            </div>
          ) : (
            <div
              //key={index}
              tabIndex={0}
              className="collapse border border-base-300 bg-green-300 my-2"
            >
              <div className="collapse-title text-xl font-medium flex justify-between">
                {message?.name}

                <button
                  onClick={() => handleDelete(message)}
                  className="btn bg-[#B91C1C] text-white"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </div>
              <div className="collapse-content">
                <p>Name: {message?.name}</p>
                <p>Phone: {message?.phone}</p>
                <p>Email: {message?.email}</p>
                <p>Date: {formatDate(message?.time)}</p>
                <p>
                  Message: <br />
                  {message?.message}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Message;
