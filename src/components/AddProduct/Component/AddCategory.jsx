import React from "react";

const AddCategory = ({ setProductDetail, productDetail }) => {
  const handleCategoryChange = (e) => {
    setProductDetail({
      ...productDetail,
      category: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-3 my-2">
      <label className="font-medium text-sm text-gray-600 whitespace-nowrap">
        Category:
      </label>
      <select
        className="border rounded-md p-2 text-sm flex-1"
        value={productDetail.category || ""}
        onChange={handleCategoryChange}
      >
        <option value="">Select Category</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snacks">Snacks</option>
        <option value="Desserts">Desserts</option>
      </select>
    </div>
  );
};

export default AddCategory;
