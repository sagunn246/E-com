import React, { useState } from "react";
import Card from "../Product/component/Card";
import AddProductDetailComponent from "./Component/AddProductDetailComponent";
import { useLocation, useNavigate } from "react-router-dom";
import OrangeButton from "../Button/OrangeButton";
import addproductApi from "../Api/product/addProductApi";
import updateProduct from "../Api/product/updateProduct";
import { MdKeyboardBackspace } from "react-icons/md";
import Navbar from "../NavBar/Navbar";

const AddProduct = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  if (!user || user?.role === "user") {
    window.location.href = "/";
  }

  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const temp = {
    productName: "",
    features: [],
    price: 0,
    image: "",
    rating: 0,
    category: "",
    description: "",
    availableStock: "",
  };

  const [productDetail, setProductDetail] = useState(data ? data : temp);

  

  return (
    <>
    <Navbar />
    <div className="min-h-auto bg-gray-50 mt-25 px-10 md:px-20">
      {/* Go Back Button */}
      


      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex flex-col items-center md:w-[40%]">
          <Card item={productDetail} />
          <p className="hidden md:block mt-4 mx-5 text-center font-medium text-gray-600 text-sm leading-relaxed">
            Add a new product or update existing details here to keep your
            catalog accurate and up to date. Make sure to fill in all required
            fields for the best results.
          </p>
        </div>

        
        <div className="flex-1 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-gray-700 font-semibold italic text-xl mb-4 text-center">
            Product Details
          </h2>
          <AddProductDetailComponent
            setProductDetail={setProductDetail}
            productDetail={productDetail}
            data={data}
          />
        </div>
      </div>

      {/* Bottom Action Button */}
      
    </div>
    </>
  );
};

export default AddProduct;
