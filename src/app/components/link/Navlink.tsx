"use client";
import React from "react";
import { useStateContext } from "../../../../context/StateContext";

const Navlink = () => {
  const { login, signup, loginOrSignupButtonHandler } = useStateContext() ?? {};

  return (
    <>
      <div className="w-[100%] pb-6 flex border-b-2 border-customGray ">
        <div
          className="font-bold hover:cursor-pointer"
          onClick={() => loginOrSignupButtonHandler()}
        >
          {" "}
          <p className={login ? "text-customGreen" : "text-customGray"}>
            Log in
          </p>
        </div>
        <div
          className="font-bold ml-6 hover:cursor-pointer"
          onClick={() => loginOrSignupButtonHandler()}
        >
          {" "}
          <p className={signup ? "text-customGreen" : "text-customGray"}>
            Register
          </p>
        </div>
      </div>
    </>
  );
};

export default Navlink;
