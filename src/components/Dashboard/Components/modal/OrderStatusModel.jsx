import React from "react";
import updateOrderStatus from "../../../Api/Order/UpdateOrderStatus";

const OrderStatusModel = ({ status, setShowModal, setStatus, id }) => {
  const handleSave = async () => {
    await updateOrderStatus(status, id)
  };
  return (
    <>
      <div
        className="fixed inset-0 flex justify-center items-center bg-black/50 bg-opacity-40 z-50"
        onClick={() => setShowModal(false)}
      >
        <div
          className="bg-white p-6 rounded-lg shadow-lg w-72"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-sm font-semibold mb-3">Change Order Status</h2>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border rounded p-2 text-xs mb-4"
          >
            <option value="Pending">Pending</option>
            <option value="In progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowModal(false)}
              className="px-3 py-1 text-xs rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStatusModel;
