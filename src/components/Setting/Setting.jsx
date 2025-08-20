import React, { useState } from "react";
import General from "./components/General";
import Location from "./components/Location";
import Password from "./components/Password";
import DeleteAccount from "./components/DeleteAccount";
import Navbar from "../NavBar/Navbar";
import { FaBars } from "react-icons/fa";



const Setting = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      <div className=" flex flex-col mt-17 px-4 py-2 ">
        <General />
        <Location />
        <Password />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default Setting;
