"use client";

import React, { useEffect } from "react";
import { useStateContext } from "../../../../context/StateContext";
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const RoleSelector = () => {
  const { role, setRole } = useStateContext() ?? {};

  const setSpaceSeeker = () => {
    setRole("spaceseeker");
  };

  const setSpaceOwner = () => {
    setRole("spaceowner");
  };

  return (
    <>
      <div className="role_container flex justify-between my-6">
        <div
          className={`role bg-${
            role === "spaceseeker" ? "customGreen" : "[#e2e7f3]"
          } flex text-${
            role === "spaceseeker" ? "white" : "customGray"
          } items-center sm:w-[45%] md:w-[40%] h-12 rounded-md flex justify-center text-center hover:cursor-pointer px-3`}
          onClick={() => setSpaceSeeker()}
        >
          {" "}
          <FaUser />{" "}
          <p className="ml-3 sm:text-sm md:text-base">Space Seekers </p>
        </div>
        <div
          className={` role bg-${
            role === "spaceowner" ? "customGreen" : "[#e2e7f3]"
          } flex text-${
            role === "spaceowner" ? "white" : "customGray"
          } items-center w-[40%] h-12 rounded-md flex justify-center text-center hover:cursor-pointer px-3`}
          onClick={() => setSpaceOwner()}
        >
          {" "}
          <FaHome />
          <p className="ml-3">Space Owners </p>
        </div>
      </div>
    </>
  );
};

export default RoleSelector;
