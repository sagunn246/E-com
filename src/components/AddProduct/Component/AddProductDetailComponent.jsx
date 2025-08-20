import React from "react";
import ProductInputField from "../../Inputfields/productInputFields";
import AddFeature from "./AddFeature";
import AddCategory from "./AddCategory";
import OrangeButton from "../../Button/OrangeButton";
import addproductApi from "../../Api/product/addProductApi";
import updateProduct from "../../Api/product/updateProduct";
const AddProductDetailComponent = ({ setProductDetail, productDetail,data }) => {
  const handleProceed = async () => {
    await addproductApi(productDetail);
  };

  const handleUpdate = async () => {
    await updateProduct(productDetail);
    window.location.href = "/";
  };
  return (
    <div className="max-w-2xl mx-auto rounded-xl p-3 h-auto flex flex-col justify-between space-y-2">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <ProductInputField
          setProductDetail={setProductDetail}
          label={"Name"}
          name={"productName"}
          productDetail={productDetail}
        />

        <ProductInputField
          setProductDetail={setProductDetail}
          label={"Rating"}
          name={"rating"}
          productDetail={productDetail}
        />

        <ProductInputField
          setProductDetail={setProductDetail}
          label={"Image"}
          name={"image"}
          productDetail={productDetail}
        />

        <ProductInputField
          setProductDetail={setProductDetail}
          label={"Price"}
          name={"price"}
          productDetail={productDetail}
        />
      </div>

      <div className="bg-gray-50 p-2 rounded-lg border">
        <AddFeature
          productDetail={productDetail}
          setProductDetail={setProductDetail}
        />
      </div>

      <div className="flex gap-2">
        <div className="bg-gray-50 p-2 rounded-lg border flex-1">
          <AddCategory
            setProductDetail={setProductDetail}
            productDetail={productDetail}
          />
        </div>

        <div className="bg-gray-50 p-2 rounded-lg border flex-1">
          <ProductInputField
            setProductDetail={setProductDetail}
            label={"Stock"}
            name={"availableStock"}
            productDetail={productDetail}
          />
        </div>
      </div>

      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Description"}
        name={"discription"}
        productDetail={productDetail}
      />
      <div className="mt-4 flex justify-start">
        {data ? (
          <OrangeButton title={"Update"} onClick={handleUpdate} />
        ) : (
          <OrangeButton title={"Proceed"} onClick={handleProceed} />
        )}
      </div>
    </div>

  );
};

export default AddProductDetailComponent;
