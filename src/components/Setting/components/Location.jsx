import React, { useEffect, useRef } from "react";
import InputDetails from "../../Cart/InputDetails";
import OrangeButton from "../../Button/OrangeButton";
import updateduserData from "../../Api/User/updatedData";
import Swal from "sweetalert2";

const Location = () => {
  const data = JSON.parse(localStorage.getItem("userDetails")) || {};
  const cityRef = useRef();
  const streetRef = useRef();
  const deliveryDescriptionRef = useRef();

  useEffect(() => {
    if (cityRef.current) cityRef.current.value = data.city || "";
    if (streetRef.current) streetRef.current.value = data.street || "";
    if (deliveryDescriptionRef.current)
      deliveryDescriptionRef.current.value = data.deliveryDescription || "";
  }, [data]);

  const handleUpdate = async () => {
    const updatedData = {
      city: cityRef.current.value,
      street: streetRef.current.value,
      deliveryDescription: deliveryDescriptionRef.current.value,
    };

    try {
      await updateduserData(updatedData);
      Swal.fire({
        icon: "success",
        title: "Updated!",
        text: "Your delivery details have been updated successfully.",
        confirmButtonColor: "#f97316",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#f97316",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 m-4 md:mx-12 rounded-xl border border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      
      <div className="w-full md:w-[50%] px-4 space-y-6">
        <h2 className="text-gray-900 font-bold text-2xl border-b pb-2">
          Delivery Information
        </h2>

        <div className="space-y-5">
          <InputDetails
            err={cityRef.current?.value === "" && true}
            errormessage={"Please provide a valid city"}
            label={"City"}
            placeholder={"Enter your City"}
            ref={cityRef}
          />
          <InputDetails
            err={streetRef.current?.value === "" && true}
            errormessage={"Please provide a valid street"}
            label={"Street"}
            placeholder={"Enter your Street"}
            ref={streetRef}
          />
          <InputDetails
            err={deliveryDescriptionRef.current?.value === "" && true}
            errormessage={"Please provide a valid description"}
            label={"Delivery Description"}
            placeholder={"Enter delivery instructions or landmarks"}
            ref={deliveryDescriptionRef}
          />
        </div>

        <div className="pt-4">
          <OrangeButton title={"Save Changes"} onClick={handleUpdate} />
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center flex-1 px-6 bg-slate-50 rounded-lg border border-gray-100 shadow-inner">
        <h2 className="text-gray-800 font-semibold text-xl mb-3 text-center">
          Keep Your Delivery Details Updated
        </h2>
        <p className="text-gray-600 leading-relaxed text-justify text-base">
          Adding accurate{" "}
          <span className="font-medium text-gray-800">city</span>,{" "}
          <span className="font-medium text-gray-800">street</span>, and{" "}
          <span className="font-medium text-gray-800">delivery instructions</span>{" "}
          ensures your orders reach you quickly and without any hassle. Keep this
          info current to enjoy smooth and timely deliveries.
        </p>
      </div>
    </div>
  );
};

export default Location;
