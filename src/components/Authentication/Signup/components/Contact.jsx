import React, { useRef, useState } from "react";
import InputDetails from "../../../Cart/InputDetails";
import OrangeButton from "../../../Button/OrangeButton";

const Contact = ({ userDetail, setUserDetail, setstage }) => {
  const [error, setError] = useState(0);

  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const errorMessageRef = useRef()
  const handleProceed = () => {
    
    if (nameRef.current.value == "" || nameRef.current.value.length < 2) {
      errorMessageRef.current='Name should be provided Correctly'
      setError(1);
    }  else if (emailRef.current.value == "") {
      errorMessageRef.current='Provide Valid Email'
      setError(2);
    }
      else if (contactRef.current.value == "") {
      errorMessageRef.current='Provide Valid Conatact'
      setError(3);
    
    } else {
      setError(0);
      errorMessageRef.current=null
      setUserDetail({
      username: nameRef.current.value,
      email: emailRef.current.value,
      contactNumber: contactRef.current.value,
      password: "",
      city: "",
      street: "",
      deliveryDescription: "",
    });
    setstage(2)
    }
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center relative top-5">
      <InputDetails
        label={"Name"}
        placeholder={"Enter your Name"}
        ref={nameRef}
        error={error == 1 && true}
        errorMessage={errorMessageRef.current}
      />
      <InputDetails
        label={"Email"}
        placeholder={"Enter your email"}
        ref={emailRef}
        error={error == 2 && true}
        errorMessage={errorMessageRef.current}
      />
      <InputDetails
        label={"Contact Number"}
        placeholder={"Enter your contact"}
        ref={contactRef}
        error={error == 3 && true}
        errorMessage={errorMessageRef.current}
      />
      <OrangeButton title={"Proceed"} onClick={() => handleProceed()} />
    </div>
  );
};

export default Contact;
