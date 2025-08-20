import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import deleteAccount from '../../Api/User/deleteAccount'
import LogoutModel from './LogoutModel'
import DeleteModal from "./DeleteModal";
const DeleteAccount = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [showd, setShowd] = useState(false)



  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 m-4 md:mx-12 rounded-xl border border-gray-100 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex-1 flex flex-col gap-3 justify-center items-center">

        <div className="w-fit border border-red-300 bg-red-500 p-2 px-4 text-white font-medium rounded-md shadow-md shadow-red-300 hover:shadow-xl hover:shadow-red-700/50 hover:border-red-700 hover:bg-red-700 cursor-pointer " onClick={() => setShowd(true)}>
          Delete Account
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3 justify-center items-center">

        <div className="w-fit border border-gray-300 bg-gray-500 p-2 px-4 text-white font-medium rounded-md shadow-md shadow-gray-300 hover:shadow-xl hover:shadow-gray-700/50 hover:border-gray-700 hover:bg-gray-700 cursor-pointer " onClick={() => setShow(true)}>
          Logout
        </div>
      </div>
      {show && <LogoutModel setShow={setShow} />}
      {showd && <DeleteModal setShowd={setShowd} />}
    </div>
  );
};

export default DeleteAccount;