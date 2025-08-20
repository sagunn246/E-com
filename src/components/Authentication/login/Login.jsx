import React, { useRef, useState } from "react";
import InputDetails from "../../Cart/InputDetails";
import OrangeButton from "../../Button/OrangeButton";
import { useNavigate } from "react-router";
import loginApi from "../../Api/Auth/LoginApi";
const Login = ({ setScreen }) => {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(0);
  const [loginerr, setLoginerr] = useState('');
  const errorMessageRef = useRef();
  const handleLogin = () => {
    if (usernameRef.current.value == "") {
      setError(1);
      errorMessageRef.current = "Please Fill the Username";
    } else if (passwordRef.current.value == "") {
      setError(2);
      errorMessageRef.current = "Please Full the Password";
    } else {
      setError(0);
      errorMessageRef.current = "";
      const userDetail = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }
      console.log(userDetail);
      loginApi(userDetail, navigate, setLoginerr);
    }
  };
  return (
    <div className="p-3">
      <div className="text-3xl relative top-5 font-bold text-center text-orange-400">
        Login
      </div>
      <div className="flex flex-col justify-center relative">
        <div className="flex flex-col gap-5 justify-center items-center relative top-5">
          <InputDetails
            label={"Username"}
            placeholder={"Enter your Username"}
            ref={usernameRef}
            error={error == 1 && true}
            errorMessage={errorMessageRef.current}
          />
          <InputDetails
            label={"Password"}
            placeholder={"Enter your Password"}
            ref={passwordRef}
            error={error == 2 && true}
            errorMessage={errorMessageRef.current}
          />
          <div className="text-red-500 text-left  w-full">{loginerr}</div>
          <div className=" text-center">
            <OrangeButton title={"Login"} onClick={() => handleLogin()} />
          </div>
          <div className="text-center">
            Don't have an Account?{" "}
            <span onClick={() => setScreen(true)} className="cursor-pointer text-orange-500">Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
