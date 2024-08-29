import React from "react";
import image from "../../assets/img.svg";
import logo from "../../assets/logo1.svg";

function LeftHome() {
  return (
    <div className="flex-1 flex items-center justify-center p-8 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-400 md:block hidden">
      <div className="relative flex flex-col h-full w-full rounded-2xl bg-blue-800 bg-opacity-25">
        <div className="flex-grow p-10 max-lg:p-6">
          <div className="text-2xl sm:text-3xl flex font-bold text-center bg-white w-[151px] h-[61px] rounded-3xl p-[13px] text-black">
            <img src={logo} alt="logo" className="mx-1" />
            Base
          </div>
          <p className="font-bold text-white text-3xl sm:text-5xl py-8 pr-16">
            Generate detailed reports with just one click
          </p>
        </div>
        <img
          src={image}
          alt="Illustration"
          className="absolute bottom-[-2px] right-[-2px]  md:w-[200px] lg:w-[250px] xl:w-[280px] h-auto"
        />
      </div>
    </div>
  );
}

export default LeftHome;
