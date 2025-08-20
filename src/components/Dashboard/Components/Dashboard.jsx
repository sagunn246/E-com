import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ order, productData }) => {
  const completedOrders = order.filter((o) => o.status === "completed");


  const salesMap = {}; 

  completedOrders.forEach((ord) => {
    ord.items.forEach((item) => {
      if (salesMap[item.itemName]) {
        salesMap[item.itemName] += item.quantity;
      } else {
        salesMap[item.itemName] = item.quantity;
      }
    });
  });
  const salesData = Object.entries(salesMap).map(([name, sales]) => ({
    name,
    sales,
  }));

  const pendingOrders = order.filter((o) => o.status !== "completed").length;

  return (
    <div className="p-4 md:p-6 mt-5 flex flex-col gap-8">
     
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="bg-sky-200 border border-gray-300 rounded-lg p-5 w-40 md:w-44 flex flex-col items-center shadow-lg">
          <p className="text-gray-700 font-semibold">Products</p>
          <p className="text-2xl font-bold text-gray-800">{productData.length}</p>
        </div>
        <div className="bg-sky-200 border border-gray-300 rounded-lg p-5 w-40 md:w-44 flex flex-col items-center shadow-lg">
          <p className="text-gray-700 font-semibold">Orders</p>
          <p className="text-2xl font-bold text-gray-800">{order.length}</p>
        </div>
        <div className="bg-sky-200 border border-gray-300 rounded-lg p-5 w-40 md:w-44 flex flex-col items-center shadow-lg">
          <p className="text-gray-700 font-semibold">Pending Orders</p>
          <p className="text-2xl font-bold text-gray-800">{pendingOrders}</p>
        </div>
        <div className="bg-sky-200 border border-gray-300 rounded-lg p-5 w-40 md:w-44 flex flex-col items-center shadow-lg">
          <p className="text-gray-700 font-semibold">Total Sales</p>
          <p className="text-2xl font-bold text-gray-800">{completedOrders.length}</p>
        </div>
      </div>

      
      <div className="bg-white p-5 rounded-lg shadow-lg w-full md:w-[90%] mx-auto">
        <h3 className="font-semibold text-gray-700 mb-4 text-center">Product Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              interval={0}
              angle={-25}
              textAnchor="end"
              height={60}
            />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
