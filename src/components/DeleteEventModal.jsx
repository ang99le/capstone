import React from 'react';

const DeleteEventModal = ({ event, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(event);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl text-sky-800 font-bold mb-4 text-center">Delete Event</h2>
        <p className="mb-4">Are you sure you want to delete this event?</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-400 rounded-2xl"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-white bg-sky-800 rounded-2xl hover:bg-sky-700"
          >
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEventModal;
