import React, { useState } from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import UploadCVS from "../../component/uploadCVS/uploadCVS";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";
import { useAuth } from "../../auth/authcontext";
import logo from "../../assets/logo1.svg";
function Upload({ darkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="w-full flex justify-between items-center p-4 md:hidden">
        <button onClick={toggleSidebar}>
          {sidebarOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
        <div className="text-2xl sm:text-3xl flex font-bold text-center items-center justify-start w-full h-16 rounded-3xl p-12 my-2">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          Base
        </div>
        <div className="flex items-center space-x-4">
          <FaBell className="text-xl" />
          <img
            src={user?.photoURL || "default-avatar-url"}
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>

      <div className="flex flex-grow">
        <Sidebar
          darkMode={darkMode}
          isOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        <div
          className={`flex-1 p-6 transition-all duration-300 ${
            sidebarOpen ? " md:opacity-100" : "opacity-100"
          }`}
        >
          <UploadCVS darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default Upload;
