import React from "react";
import { RiDashboardFill, RiShoppingBagFill, RiAddCircleFill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";

const DashNav = ({ activeScreen, setActiveScreen, isSidebarOpen, setIsSidebarOpen }) => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, label: "Dashboard", icon: <RiDashboardFill />, action: () => setActiveScreen(1) },
    { id: 2, label: "Orders", icon: <RiShoppingBagFill />, action: () => setActiveScreen(2) },
    { id: 3, label: "Add Product", icon: <RiAddCircleFill />, action: () => navigate("/addProduct") },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-30 transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:shadow-none
        `}
      >
        {/* Close Button for mobile */}
        <div className="md:hidden flex justify-end mb-4 pt-20">
          <button onClick={() => setIsSidebarOpen(false)}>
            <FaTimes size={24} className="text-orange-500" />
          </button>
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-8 hidden lg:block">Admin Panel</h2>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                item.action();
                setIsSidebarOpen(false);
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 relative text-left
                ${activeScreen === item.id
                  ? "bg-orange-50 text-orange-600 font-semibold"
                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                }
              `}
            >
              {/* Active indicator */}
              {activeScreen === item.id && (
                <span className="absolute left-0 top-0 h-full w-1 bg-orange-500 rounded-r-lg"></span>
              )}
              <span className="text-xl">{item.icon}</span>
              <span className="flex text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default DashNav;
