import React, { useState } from 'react';

const EditEventModal = ({ event, onClose, onUpdate }) => {
  const [newTitle, setNewTitle] = useState(event.title);

  const handleUpdate = () => {
    if (newTitle) {
      onUpdate({ ...event, title: newTitle });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl text-sky-800 font-bold mb-4 text-center">Edit Event</h2>
       
        <input
          type="text"
          placeholder="New Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="mb-4 p-2 border border-sky-800 rounded w-full"
        />



        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-400 rounded-2xl"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 text-white bg-sky-800 rounded-2xl hover:bg-sky-700"
          >
            Update Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEventModal;
