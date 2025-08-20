import React, { useRef, useState } from "react";
import InputDetails from "../../Cart/InputDetails";
import OrangeButton from "../../Button/OrangeButton";
import changeuserPassword from "../../Api/User/changeuserPassword";
import Swal from "sweetalert2";

const Password = () => {
  const prevPasswordRef = useRef();
  const currentPasswordRef = useRef();
  const [err, setError] = useState("");

  const handleUpdate = async () => {
    const updatedData = {
      prevpassword: prevPasswordRef.current.value,
      currentpassword: currentPasswordRef.current.value,
    };

    const res = await changeuserPassword(updatedData, setError);

    if (err === 'Password Changed Successfully') {
      Swal.fire({
        icon: "success",
        title: "Password Updated",
        text: err || "Your password has been successfully changed!",
        confirmButtonColor: "#f97316",
      });
      prevPasswordRef.current.value = "";
      currentPasswordRef.current.value = "";
    } else {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: err || "Something went wrong. Please try again.",
        confirmButtonColor: "#f97316",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 m-4 md:mx-12 rounded-xl border border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">

      <div className="w-full md:w-[45%] px-3 space-y-2">
        <div className="text-gray-700 font-bold text-xl ">
          Change Password
        </div>

        <div>
          <InputDetails
            err={prevPasswordRef.current?.value === "" && true}
            errormessage={"Please provide your old password"}
            label={"Old Password"}
            placeholder={"Enter your old password"}
            ref={prevPasswordRef}
          />
          <InputDetails
            err={currentPasswordRef.current?.value === "" && true}
            errormessage={"Please provide a valid new password"}
            label={"New Password"}
            placeholder={"Enter your new password"}
            ref={currentPasswordRef}
          />
        </div>

        <div>
          <OrangeButton title={"Update"} onClick={handleUpdate} />
        </div>
      </div>


      <div className="hidden md:flex flex-col justify-center flex-1 gap-4 px-4 bg-slate-50 rounded-lg border border-gray-100 shadow-inner">
        <div className="text-gray-800 mt-6 font-bold text-xl text-center">
          Why Change Your Password?
        </div>
        <p className="text-gray-600 font-medium lg:text-lg text-justify">
          Keeping your password up-to-date is one of the easiest ways to protect your account.
          A strong password should be at least <span className="font-semibold">8 characters</span> long,
          include <span className="font-semibold">uppercase letters, lowercase letters, numbers, and symbols</span>.
        </p>
        <p className="text-gray-600 font-medium lg:text-lg text-justify">
          Avoid using passwords you've used on other sites. Changing your password regularly helps prevent unauthorized access.
          Make sure your new password is memorable but difficult to guess.
        </p>
        <p className="text-gray-600 font-medium lg:text-lg text-justify">
          If you suspect your account may have been compromised, change your password immediately and review your account security settings.
        </p>
        <p className="text-gray-600 font-medium lg:text-lg text-justify">
          Remember: Never share your password with anyone. Consider using a password manager to generate and store secure passwords safely.
        </p>
      </div>
    </div>
  );
};

export default Password;
