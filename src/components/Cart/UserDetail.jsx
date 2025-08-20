import React, { useRef, useState } from "react";
import InputDetails from "./InputDetails";
import OrangeButton from "../Button/OrangeButton";
import { useNavigate } from "react-router";

const UserDetail = () => {
  const navigate = useNavigate()
 const [error, setError] = useState(0);
const name = useRef();
const address = useRef();
const phone = useRef();

const nameRegex = /^[A-Za-z\s]{2,}$/;
const phoneRegex = /^\d{10}$/;
const addressRegex = /^.{5,}$/;

const handleClick = () => {
  const nameVal = name.current?.value.trim();
  const phoneVal = phone.current?.value.trim();
  const addressVal = address.current?.value.trim();
  localStorage.removeItem('cart')
  navigate('/')
  if (!nameRegex.test(nameVal)) {
    setError(1);
  } else if (!phoneRegex.test(phoneVal)) {
    setError(2);
  } else if (!addressRegex.test(addressVal)) {
    setError(3);
  } else {
    setError(0);
  }
  
};
  return (
    <div>
      <InputDetails 
        placeholder={"Enter your name"} 
        error={error==1 && true}   
        label={"Name"} 
        ref={name} 
    />
      <InputDetails
        placeholder={"Enter your contact no"}
        label={"Contact"}
        ref={phone}
        error={error==2 && true}
      />
      <InputDetails
        placeholder={"Enter your Address"}
        label={"Address"}
        error={error==3 && true}
        ref={address}
      />
      <div className="relative top-4 flex justify-center md:mb-1 mb-5">
        <OrangeButton title={'Proceed'} onClick={()=>handleClick()}/>
      </div>
    </div>
  );
};

export default UserDetail;
