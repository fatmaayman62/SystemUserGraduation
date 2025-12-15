import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function LayOut() {
  let [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  function changeMode(x) {
    if (x == "light") {
      setMode("light");
    } else {
      setMode("dark");
    }
    localStorage.setItem("mode", x); 
  }
  return (
    <>
      <main className={mode}>
        <div className="bg-[#F8F9FA] dark:bg-[#000e29] dark:text-white">
          <Navbar changeMode={changeMode} mode={mode} />
          <div className="pt-20">
            <Outlet></Outlet>
          </div>
        </div>
      </main> 
    </>
  );
}

export default LayOut;
