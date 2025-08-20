import React from "react";

const ProductInputField = ({
  setProductDetail,
  label,
  name,
  productDetail,
}) => {
  const handleChange = (e) => {
    setProductDetail({
      ...productDetail,
      [name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-sm text-gray-600">{label}:</label>
      <input
        className="outline-none p-1 border rounded-sm text-sm w-full"
        value={productDetail[name] || ""}
        onChange={handleChange}
      />
      {productDetail[name] === "" && (
        <span className="text-red-500 text-[10px]">Please provide an input</span>
      )}
    </div>
  );
};

export default ProductInputField;
