import React from "react";

import Card from "../../Product/component/Card";

const Product = ({data}) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      {data.length === 0 ?(
        "No such Products"
      ):(
        <>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
        {data.map((data) => (
          <Card key={data._id} item={data} />
        ))}
      </div>
        </>
      )}
    </div>
  );
};

export default Product;
