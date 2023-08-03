"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useStateContext } from "../../../../context/StateContext";

const Welcome: React.FC = () => {
  const { cancelGreeting, greet } = useStateContext() ?? {};


  return (
    <>
      {greet ? (
        <div className="welcome_container bg-customGreen text-white w-[100%] h-[50px] rounded-tl-sm rounded-tr-sm flex text-center items-center">
          <div className="flex px-[1rem] justify-between text-center items-center w-[100%] max-h-[100%]">
            <h2 className="font-bold"> Hello, Welcome</h2>{" "}
            <button className="cancel_welcome" onClick={() => cancelGreeting()}>
              <FaTimes />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Welcome;
