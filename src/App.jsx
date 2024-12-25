import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./container/MainRoutes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        <div
          className={`fixed bottom-24 left-24 flex items-center p-2  rounded-full z-50 max-md:hidden ${
            darkMode ? "bg-gray-900 " : "bg-gray-100 "
          }`}
        >
          <button
            className={`w-8 h-8  rounded-full shadow-md transform transition-transform duration-300 ${
              darkMode ? "translate-x-full" : "translate-x-0"
            }`}
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <MoonIcon
                className={`w-6 h-6 text-gray-400  ${
                  darkMode ? "bg-black text-white" : " text-gray-400 bg-white"
                }`}
              />
            ) : (
              <SunIcon
                className={`w-6 h-6   ${
                  darkMode ? "bg-black " : " text-black"
                }`}
              />
            )}
          </button>

          <button
            className={`w-8 h-8  rounded-full  transform transition-transform duration-300 ${
              darkMode
                ? "-translate-x-full text-gray-100"
                : "translate-x-0 bg-gray-100"
            }`}
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6 text-gray-400" />
            ) : (
              <MoonIcon
                className={`w- h- text-gray-400 p-1 rounded-full  ${
                  darkMode ? "bg-black  text-white" : " text-gray-400"
                }`}
              />
            )}
          </button>
        </div>

        <MainRoutes darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
