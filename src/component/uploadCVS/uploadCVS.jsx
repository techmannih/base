import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import Cookies from "js-cookie";
import { useAuth } from "../../auth/authcontext";
import { signOut } from "firebase/auth";
import { auth } from "../../auth/firebase";
import Papa from "papaparse";
import CsvDataTable from "./CsvDatatable";
import excel from "../../assets/excel.svg";
import { LuUpload } from "react-icons/lu";
import { BellIcon } from "@heroicons/react/24/outline";
function UploadCVS({ darkMode }) {
  const { user } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove("authToken");
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out: ", error.message);
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setCsvData([]);
  };

  const handleUpload = () => {
    if (file) {
      setUploading(true);
      setTimeout(() => {
        Papa.parse(file, {
          header: true,
          complete: (result) => {
            setCsvData(result.data);
            setFile(null);
          },
          error: (error) => {
            console.error("Error parsing CSV file: ", error.message);
          },
        });
        setUploading(false);
      }, 3000);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="w-full flex justify-between items-center p-4">
        <p className="text-2xl font-semibold">Upload CSV</p>
        <div className="flex items-center space-x-4  max-md:hidden">
          <div className="flex items-center font-semibold p-2  text-xl text-gray-400">
            <BellIcon
              className={`text-2xl h-6 w-6  ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            />
          </div>
          <div className="relative max-md:hidden">
            <img
              src={user?.photoURL || "default-avatar-url"} // Display user profile image
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            {dropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg ${
                  darkMode ? "bg-gray-800 text-white" : "text-gray-900"
                }`}
              >
                <div className="border-t border-gray-300">
                  <button
                    onClick={handleLogout}
                    className="w-full p-2 text-red-500 hover:bg-red-100 flex items-center space-x-2"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-1">
        <div
          className={`w-full max-w-lg text-center flex flex-col items-center p-4 rounded-lg ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div className="w-full flex justify-center border-dashed border-2 border-gray-400 p-12">
            <input
              type="file"
              id="file"
              accept=".csv"
              className="hidden h-94"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file"
              className="block w-full p-4 rounded-lg cursor-pointer flex flex-col items-center text-center"
            >
              <img src={excel} alt="Excel Icon" className="mb-2 w-10 h-10" />
              <p className="font-figtree text-sm text-gray-400 leading-6">
                Drop your excel sheet here or{" "}
                <span className="text-blue-600">browse</span>
              </p>
              {file && (
                <button onClick={handleRemoveFile} className="p-2 text-red-500">
                  Remove
                </button>
              )}
            </label>
          </div>

          <button
            onClick={handleUpload}
            className="mt-4 w-full p-2  bg-blue-600 text-white rounded-lg"
            disabled={!file}
          >
            <LuUpload className="inline-block w-6 h-6 mr-2" />
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </div>

      {csvData.length > 0 && (
        <CsvDataTable data={csvData} darkMode={darkMode} />
      )}
    </div>
  );
}

export default UploadCVS;
