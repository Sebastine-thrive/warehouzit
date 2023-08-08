"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

import { AiOutlineUser } from "react-icons/ai";

import visible_icon from "../../../../public/assets/visibility-on.svg";
import invisible_icon from "../../../../public/assets/visibility-off.svg";
import Image from "next/image";
import google_icon from "../../../../public/assets/google.svg";
import facebook_icon from "../../../../public/assets/facebook.svg";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
}) => (
  <div className="input-container">
    <input
      className="login-text-input placeholder-customGray border-2  border-customGray focus:placeholder-opacity-100  my-3"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={type}
    />

    <label className="login-label absolute transition-all duration-200 px-1  text-gray-300 pointer-events-none">
      {label}
    </label>
  </div>
);

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [agreement, setAgreement] = useState<boolean>(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  const handleLoginAgreement = () => {
    setAgreement((prevState) => !prevState);
    console.log(agreement);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="email_container relative">
        <InputField
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="user-icon absolute ">
          <AiOutlineUser width={25} height={25} />
        </div>
      </div>

      <div className="password_container relative">
        <InputField
          label="Password"
          type={passwordVisibility ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-visibility-icon absolute cursor-pointer ">
          <Image
            src={passwordVisibility ? invisible_icon : visible_icon}
            width={25}
            height={25}
            alt=" view or hide password icon"
            onClick={() => handlePasswordVisibility()}
          />
        </div>
      </div>

      <div className="agreement mb-6 flex items-center justify-between xxs:text-[8px] sm:text-[12px]">
        <div className="flex items-center ">
          <input
            type="checkbox"
            name="agreement"
            value="agreement"
            checked={agreement}
            onChange={() => handleLoginAgreement()}
          />{" "}
          <p className="ml-3"> I agree to the terms of service </p>
        </div>

        <p className="cursor-pointer "> Forgot Password?</p>
      </div>

      <button
        type="submit"
        className="w-full bg-customGreen text-white py-3 rounded-md font-bold"
      >
        {" "}
        Register{" "}
      </button>

      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400" />
        <p className="text-center text-sm font-semibold text-black ">
          {" "}
          or continue with{" "}
        </p>
        <hr className="border-gray-400" />
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="google_img_container p-4 rounded-lg cursor-pointer ">
          <Image src={google_icon} width={40} height={40} alt=" google icon" />
        </div>

        <div className="p-4 rounded-lg bg-[#e2e7f3] ml-8 cursor-pointer">
          <Image
            src={facebook_icon}
            width={40}
            height={40}
            alt=" facebook icon"
          />
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
