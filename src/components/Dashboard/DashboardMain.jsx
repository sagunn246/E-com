import React, { useState, useEffect } from "react";
import DashNav from "./Components/DashNav";
import Dashboard from "./Components/Dashboard";
import Order from "./Components/Order";
import Navbar from "../NavBar/Navbar";
import getOrder from "../Api/Order/getOrder";
import { useOutletContext } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";

const DashboardMain = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  if (!user || user?.role === "user") {
    window.location.href = "/";
  }

  const [activeScreen, setActiveScreen] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const maindata = useOutletContext();
  const [order, setOrder] = useState([]);

  useEffect(() => {
    getOrder(setOrder);
  }, []);

  return (
    <>
      <Navbar />

      {/* Mobile Sidebar Button */}
      <div className="md:hidden flex px-4 py-2 absolute mt-20">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 bg-orange-500 text-white rounded-md shadow-md hover:bg-orange-600 transition"
        >
          <FaBars size={24} />
        </button>
      </div>

      <div className="flex h-screen bg-orange-50 pt-20">
        {/* Sidebar Navigation */}
        <DashNav
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeScreen === 1 && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-md rounded-2xl p-6 border border-orange-100"
              >
                <Dashboard order={order} productData={maindata} />
              </motion.div>
            )}
            {activeScreen === 2 && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-md rounded-2xl p-6 border border-orange-100"
              >
                <Order order={order} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
