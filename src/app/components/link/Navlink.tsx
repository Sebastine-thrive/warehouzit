"use client";
import React from "react";
import { useStateContext } from "../../../../context/StateContext";

const Navlink = () => {
  const { login, signup, loginOrSignupButtonHandler } = useStateContext() ?? {};

  return (
    <>
      <div className="w-[100%]  xxs:my-4 sm:my-0 pb-[-6] flex border-b-2 border-customGray ">
        <div
          className={`font-bold pr-6 hover:cursor-pointer ${
            login
              ? "text-customGreen pb-6 border-2 border-b-customGreen border-t-0 border-l-0 border-r-0"
              : "text-customGray border-0"
          }`}
          onClick={() => loginOrSignupButtonHandler()}
        >
          {" "}
          <p>Log in</p>
        </div>
        <div
          className="font-bold hover:cursor-pointer"
          onClick={() => loginOrSignupButtonHandler()}
        >
          {" "}
          <p
            className={`font-bold hover:cursor-pointer  ${
              signup
                ? "text-customGreen pb-6 border-2 border-b-customGreen border-t-0 border-l-0 border-r-0"
                : "text-customGray border-0"
            }`}
          >
            Register
          </p>
        </div>
      </div>
    </>
  );
};

export default Navlink;
