import React, { useRef, useState } from 'react'
import InputDetails from '../../../Cart/InputDetails'
import OrangeButton from '../../../Button/OrangeButton'

const Address = ({userDetail,setUserDetail,setstage}) => {
  const cityRef = useRef()
  const streetRef = useRef()
  const deliverydescRef = useRef()
  const[error,setError]=useState(0)
  const errorMessageRef = useRef()
  console.log(userDetail)
  const handleProceed = () => {
    
    if (cityRef.current.value == "" || cityRef.current.value.length < 2) {
      errorMessageRef.current='Name should be provided Correctly'
      setError(1);
    }  else if (streetRef.current.value == "") {
      errorMessageRef.current='Provide Valid State'
      setError(2);
    }
      else if (deliverydescRef.current.value == "") {
      errorMessageRef.current='Provide Valid description'
      setError(3);
    
    } else {
      setError(0);
      let username = userDetail.username
      let email = userDetail.email
      let contactNumber =userDetail.contactNumber
      errorMessageRef.current=null
      setUserDetail({
      username: username,
      email: email,
      contactNumber: contactNumber,
      password: '',
      city: cityRef.current.value,
      street: streetRef.current.value,
      deliveryDescription: deliverydescRef.current.value,
    });
    setstage(3)
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center relative top-5">
      <InputDetails
        label={"City"}
        placeholder={"Enter your City"}
        ref={cityRef}
        error={error == 1 && true}
        errorMessage={errorMessageRef.current}
      />
      <InputDetails
        label={"State"}
        placeholder={"Enter your state"}
        ref={streetRef}
        error={error == 2 && true}
        errorMessage={errorMessageRef.current}
      />
      <InputDetails
        label={"Delivery Description"}
        placeholder={"Write delivery description"}
        ref={deliverydescRef}
        error={error == 3 && true}
        errorMessage={errorMessageRef.current}
      />
      <OrangeButton title={"Proceed"} onClick={() => handleProceed()} />
    </div>
    </div>
  )
}

export default Address
