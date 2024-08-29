import React from "react";
import LeftHome from "../../component/lefthome/LeftHome";
import Signup from "../../component/Signup/Signup";
import logo from "../../assets/Subtract.svg";

function Home({ darkMode }) {
  return (
    <div className="flex  w-full py-6 px-8 max-lg:p-2 max-md:flex-col max-md:p-0">
      <div className="text-4xl bg-blue-600  flex font-bold text-center md:hidden  p-[13px] text-white">
        <img src={logo} alt="" className="mx-2" />
        Base
      </div>
      <LeftHome className="w-full md:w-1/2" />
      <Signup darkMode={darkMode} className="w-full md:w-[420px]" />
    </div>
  );
}

export default Home;
