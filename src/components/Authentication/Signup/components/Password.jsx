import React, { useRef, useState } from 'react'
import InputDetails from '../../../Cart/InputDetails'
import OrangeButton from '../../../Button/OrangeButton'
import signupApi from '../../../Api/Auth/signupApi'
import { useNavigate } from "react-router";
const Password = ({ userDetail, setUserDetail, setstage }) => {
  const navigate = useNavigate()
  const passwordRef = useRef()
  const errorMessageRef = useRef()
  const conformpasswordRef = useRef()
  const [error, setError] = useState()

  const handleProceed = () => {

    if (passwordRef.current.value == "" || passwordRef.current.value.length < 2) {
      errorMessageRef.current = 'password should be provided Correctly'
      setError(1);
    }
    else if (conformpasswordRef.current.value !== passwordRef.current.value) {

      errorMessageRef.current = "Password and Conform Password Does't match"
      setError(2)
      console.log(errorMessageRef.current);

    } else {
      setError(0);
      let username = userDetail.username
      let email = userDetail.email
      let contactNumber = userDetail.contactNumber
      let city = userDetail.city
      let street = userDetail.street
      let deliveryDescription = userDetail.deliveryDescription
      errorMessageRef.current = null
      setUserDetail({
        username: username,
        email: email,
        contactNumber: contactNumber,
        password: passwordRef.current.value,
        city: city,
        street: street,
        deliveryDescription: deliveryDescription,
      });
      signupApi(userDetail, navigate, setstage, setUserDetail);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center relative top-5">
        <InputDetails
          label={"Password"}
          placeholder={"Enter your password"}
          ref={passwordRef}
          error={error == 1 && true}
          errorMessage={errorMessageRef.current}
        />
        <InputDetails
          label={"Confirm Password"}
          placeholder={"Enter your password"}
          ref={conformpasswordRef}
          error={error == 2 && true}
          errorMessage={errorMessageRef.current}
        />
        <OrangeButton title={"Proceed"} onClick={() => handleProceed()} />
      </div>
    </div>
  )
}

export default Password
