import React, { useEffect, useRef } from "react";
import OrangeButton from "../../Button/OrangeButton";
import InputDetails from "../../Cart/InputDetails";
import updateduserData from "../../Api/User/updatedData";
import Swal from "sweetalert2";

const General = () => {
  const data = JSON.parse(localStorage.getItem("userDetails")) || {};
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    if (nameRef.current) nameRef.current.value = data.username || "";
    if (emailRef.current) emailRef.current.value = data.email || "";
    if (contactRef.current) contactRef.current.value = data.contactNumber || "";
  }, [data]);

  const handleUpdate = async () => {
    const updatedData = {
      username: nameRef.current.value,
      email: emailRef.current.value,
      contactNumber: contactRef.current.value,
    };
  try {
    await updateduserData(updatedData);
    Swal.fire({
      icon: "success",
      title: "Profile Updated",
      text: "Your general information has been successfully updated!",
      confirmButtonColor: "#f97316",
    });
  } catch (error) {
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
        <h2 className="text-gray-900 font-bold text-2xl tracking-wide">
          General Information
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Manage your basic profile details below.
        </p>

        <div className="space-y-5 border-t pt-4">
          <InputDetails
            err={nameRef.current?.value === "" && true}
            errormessage={"Please provide a valid input"}
            label={"Full Name"}
            placeholder={"Enter your name"}
            ref={nameRef}
          />
          <InputDetails
            err={emailRef.current?.value === "" && true}
            errormessage={"Please provide a valid email"}
            label={"Email Address"}
            placeholder={"Enter your email"}
            ref={emailRef}
          />
          <InputDetails
            err={contactRef.current?.value === "" && true}
            errormessage={"Please provide a valid phone number"}
            label={"Phone Number"}
            placeholder={"Enter your phone number"}
            ref={contactRef}
          />
        </div>

        <div className="pt-6">
          <OrangeButton title={"Save Changes"} onClick={handleUpdate} />
        </div>
      </div>

      <div className="hidden md:flex flex-col justify-center flex-1 px-8 py-6 bg-slate-50 rounded-lg border border-gray-100 shadow-inner">
        <h2 className="text-gray-800 font-semibold text-xl mb-3 text-center">
          Keep Your Info Updated
        </h2>
        <p className="text-gray-600 leading-relaxed text-justify text-base">
          Keeping your profile accurate helps us communicate better with you.
          Make sure your{" "}
          <span className="font-medium text-gray-800">full name</span>,{" "}
          <span className="font-medium text-gray-800">email</span>, and{" "}
          <span className="font-medium text-gray-800">phone number</span> are
          always correct. This ensures smooth access and a more personalized
          experience with your account.
        </p>
      </div>
    </div>
  );
};

export default General;
