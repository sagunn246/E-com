import React, { useState } from "react";
import OrangeButton from "../../Button/OrangeButton";

const AddFeature = ({ productDetail, setProductDetail }) => {
  const [features, setFeatures] = useState("");

  const handleAddFeature = () => {
    if (!features.trim()) return;
    setProductDetail({
      ...productDetail,
      features: [...productDetail.features, features.trim()],
    });
    setFeatures("");
  };

  const handleRemoveFeature = () => {
    if (!features.trim()) {
      // Remove the last feature if input is empty
      setProductDetail({
        ...productDetail,
        features: productDetail.features.slice(0, -1),
      });
    } else {
      // Remove the feature typed in input
      setProductDetail({
        ...productDetail,
        features: productDetail.features.filter((f) => f !== features.trim()),
      });
    }
    setFeatures("");
  };

  return (
    <div className="my-2">
      <div className="text-sm font-medium text-gray-700 mb-1">Features:</div>
      <div className="text-sm mb-2">
        {productDetail.features.join(", ")}
      </div>

      <div className="flex md:flex-row flex-col  gap-2 md:items-center">
        <input
          type="text"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          className="border outline-none rounded-md p-2 flex-1"
          placeholder="Add a feature"
        />
        <div className="flex gap-5 md:gap-2"><OrangeButton title="Add" onClick={handleAddFeature} />
        <OrangeButton title="Remove" onClick={handleRemoveFeature} /></div>
      </div>
    </div>
  );
};

export default AddFeature;
