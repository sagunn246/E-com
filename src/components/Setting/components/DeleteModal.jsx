import React from "react";
import { FiTrash2 } from "react-icons/fi";
import deleteAccount from '../../Api/User/deleteAccount'
const DeleteModal = ({ setShowd }) => {
  const handleDelete = () => {
    deleteAccount();
  };

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-md flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-lg flex flex-col items-center">
        <FiTrash2 className="text-red-600 w-12 h-12 mb-4" />
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Are you sure you want to delete this Account?
        </h2>
        <div className="flex justify-around gap-4 w-full">
          <button
            onClick={() => setShowd(false)}
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={() =>
              handleDelete()
            }
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
