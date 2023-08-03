import React from "react";
import Image from "next/image";

import { IoInformationCircleOutline } from "react-icons/io5";

export const EmptyUsername = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md ">
        Please enter your username
      </p>
    </div>
  );
};

export const EmptyFirstName = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        Please enter your first name
      </p>
    </div>
  );
};

export const IncorrectFirstName = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        First name can only contain alphabets
      </p>
    </div>
  );
};

export const EmptyLastName = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        Please enter your last name
      </p>
    </div>
  );
};

export const IncorrectLastName = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        Last name can only contain alphabets
      </p>
    </div>
  );
};

export const EmptyEmailErrorComponent = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        Please enter your email
      </p>
    </div>
  );
};

export const IncorrectEmailErrorComponent = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        Please enter the right email format !
      </p>
    </div>
  );
};

export const EmptyPasswordErrorComponent = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        Please enter your password
      </p>
    </div>
  );
};

export const EmptyPasswordConfirmErrorComponent = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        Please confirm your password correctly
      </p>
    </div>
  );
};

export const IncorrectPasswordConfirmErrorComponent = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        Please confirm your password
      </p>
    </div>
  );
};

export const EmptyPhoneNumberComponent = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        Please enter your phone number
      </p>
    </div>
  );
};

export const IncorrectPhoneNumberComponent = () => {
  return (
    <div className="flex text-red-500">
      <IoInformationCircleOutline />

      <p className="sm:text-xs md:text-sm ml-3 xl:text-md">
        Please enter a correct 11-digit number !
      </p>
    </div>
  );
};
