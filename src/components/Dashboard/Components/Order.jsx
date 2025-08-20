import React from "react";
import OrderCard from "./OrderCard";

const Order = ({ order }) => {
  return (
    <div className="px-5 pt-10 grid h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {order.map((data) => (
        <OrderCard 
          key={data.id || data._id} 
          data={data} 
        />
      ))}
    </div>
  );
};

export default Order;
