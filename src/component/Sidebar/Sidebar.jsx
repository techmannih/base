import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  DocumentTextIcon,
  CalendarIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { FaCloudUploadAlt } from "react-icons/fa";

import logo from "../../assets/logo1.svg";

function Sidebar({ darkMode, isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed top-0 left-0 h-screen transition-transform duration-300 px-4 py-8 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${
        darkMode ? "bg-black" : "bg-white"
      } md:relative md:translate-x-0 md:w-64`}
    >
      <button className="md:hidden text-3xl mb-4" onClick={toggleSidebar}>
        &times;
      </button>

      <div className="text-2xl sm:text-3xl flex font-bold text-center items-center justify-start w-full h-16 rounded-3xl p-12 my-2">
        <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
        Base
      </div>

      <ul className="space-y-5 pl-8">
        <li className="flex items-center font-semibold p-2 mx-4 text-xl text-gray-400">
          <HomeIcon className="h-6 w-6 mr-3" />
          Dashboard
        </li>
        <li className="flex items-center font-semibold p-2 mx-4 text-xl text-gray-400">
          <FaCloudUploadAlt className="h-6 w-6 mr-3" />
          <Link
            to="/upload"
            className={({ isActive }) =>
              `ml-1 ${isActive ? "text-blue-600" : "text-gray-400"}`
            }
          >
            Upload
          </Link>
        </li>
        <li className="flex items-center font-semibold p-2 mx-4 text-xl text-gray-400">
          <DocumentTextIcon className="h-6 w-6 mr-3" />
          <Link>Invoice</Link>
        </li>
        <li className="flex items-center font-semibold p-2 mx-4 text-xl text-gray-400">
          <CalendarIcon className="h-6 w-6 mr-3" />
          <Link>Schedule</Link>
        </li>
        <li className="flex items-center font-semibold p-2 mx-4 text-xl text-gray-400">
          <CalendarIcon className="h-6 w-6 mr-3" />
          <Link>Calendar</Link>
        </li>
        <li className="flex items-center font-semibold p-2 mx-4 text-xl text-gray-400">
          <BellIcon className="h-6 w-6 mr-3" />
          <Link>Notification</Link>
        </li>
        <li className="flex items-center font-semibold p-2 mx-4 text-xl text-gray-400">
          <Cog6ToothIcon className="h-6 w-6 mr-3" />
          <Link>Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
