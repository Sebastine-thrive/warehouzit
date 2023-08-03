"use client";

import React, { useState } from "react";
import { useStateContext } from "../../../../context/StateContext";
import axios, { AxiosResponse } from "axios";

import toast, { Toaster } from "react-hot-toast";

import { useForm, SubmitHandler } from "react-hook-form";
import {
  EmptyUsername,
  EmptyFirstName,
  EmptyLastName,
  IncorrectFirstName,
  IncorrectLastName,
  EmptyEmailErrorComponent,
  IncorrectEmailErrorComponent,
  EmptyPasswordErrorComponent,
  EmptyPasswordConfirmErrorComponent,
  EmptyPhoneNumberComponent,
  IncorrectPhoneNumberComponent,
  IncorrectPasswordConfirmErrorComponent,
} from "../errorComponents/ErrorComponents";
import Image from "next/image";
import visible_icon from "../../../../public/assets/visibility-on.svg";
import invisible_icon from "../../../../public/assets/visibility-off.svg";
import google_icon from "../../../../public/assets/google.svg";
import facebook_icon from "../../../../public/assets/facebook.svg";

interface FormInputs {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

interface ResponseData {
  success: boolean;
  message: string;
}

const SignupForm: React.FC = () => {
  const { role } = useStateContext() ?? {};

  const [username, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState<boolean>(false);
  const [agreement, setAgreement] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const successNotify = () =>
    toast.success(`Signup Sucessful!, ${successMessage}`);
  const errorNotify = () => toast.error("Sorry,");

  const handlePasswordVisibility = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  const handleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisibility((prevState) => !prevState);
  };

  const handleAgreement = () => {
    setAgreement((prevState) => !prevState);
  };

  const resetForm = () => {
    setUsername("");
    setFirstName(""), setLastName("");
    setPassword("");
    setEmail(""), setConfirmPassword("");
    setPhoneNumber("");
  };

  // submit function
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);

    const formData = {
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phonenumber: data.phoneNumber,
      password: data.password,
      role,
    };

    const postUrl =
      "https://warehouzitserver.onrender.com/api/v1/auth/register";

    const sendRequest = async () => {
      resetForm();
      setLoading(true);

      try {
        const response = await axios.post<ResponseData>(postUrl, formData);
        if (response.data.success) {
          setSuccessMessage(response.data.message);
          console.log(successMessage);
          successNotify();
          setErrorMessage("");
        } else {
          setErrorMessage(response.data.message);
          errorNotify();
          setSuccessMessage("");
        }
      } catch (error) {
        setErrorMessage("An error occurred while sending the request.");
        console.log(errorMessage);
        setSuccessMessage("");
      }
    };

    sendRequest();
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container my-3 ">
          <input
            className="text-input placeholder-customGray border-2  border-customGray focus:placeholder-opacity-100 focus:border-customGreen my-1 z-50"
            type="text"
            name={username}
            placeholder="Username"
            {...register("username", { required: true })}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="label absolute z-0 transition-all duration-200 px-1  text-gray-300 ">
            Username
          </label>

          <div className="flex items-center">
            {" "}
            {errors.username?.type === "required" && <EmptyUsername />}
          </div>
        </div>

        <div className="input-container my-3 ">
          <input
            className="text-input placeholder-customGray border-2  border-customGray focus:placeholder-opacity-100 focus:border-customGreen my-1 z-50"
            type="text"
            name="firstname"
            placeholder="firstname"
            {...register("firstname", { required: true })}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label className="label absolute z-0 transition-all duration-200 px-1  text-gray-300 ">
            First Name
          </label>
          <div className="flex items-center">
            {errors.firstname?.type === "required" && <EmptyFirstName />}
          </div>
        </div>

        <div className="input-container my-3">
          <input
            className="text-input placeholder-customGray border-2  border-customGray focus:placeholder-opacity-100 focus:border-customGreen my-1 z-50"
            type="text"
            name="firstname"
            placeholder="lastname"
            {...register("lastname", { required: true })}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label className="label absolute z-0 transition-all duration-200 px-1  text-gray-300 ">
            Last Name
          </label>

          <div className="flex items-center">
            {errors.lastname?.type === "required" && <EmptyLastName />}
          </div>
        </div>

        <div className="input-container my-3">
          <input
            className="text-input placeholder-customGray border-2  border-customGray focus:placeholder-opacity-100 focus:border-customGreen my-1 z-50"
            type="text"
            name="email"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address.",
              },
            })}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label absolute z-0 transition-all duration-200 px-1  text-gray-300 ">
            Email
          </label>
          <div className="flex items-center my-1">
            {errors.email?.type === "pattern" && (
              <IncorrectEmailErrorComponent />
            )}{" "}
          </div>

          <div className="flex items-center">
            {errors.email?.type === "required" && <EmptyEmailErrorComponent />}
          </div>
        </div>

        <div className="input-container my-3 ">
          <input
            className="text-input placeholder-customGray border-2  border-customGray focus:placeholder-opacity-100 focus:border-customGreen my-1 z-50"
            type="text"
            name="phoneNumber"
            {...register("phoneNumber", {
              required: true,
              pattern: {
                value: /^\d{11}$/,
                message:
                  "Invalid phone number. Phone number should be 11 digits",
              },
            })}
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label className="label absolute z-0 transition-all duration-200 px-1  text-gray-300 ">
            Phone Number
          </label>
          <div className="flex items-center my-1">
            {errors.phoneNumber?.type === "pattern" && (
              <IncorrectPhoneNumberComponent />
            )}{" "}
          </div>

          <div className="flex items-center">
            {errors.phoneNumber?.type === "required" && (
              <EmptyPhoneNumberComponent />
            )}
          </div>
        </div>

        <div className="input-container relative my-3 ">
          <input
            className="text-input placeholder-customGray border-2  border-customGray focus:placeholder-opacity-100 focus:border-customGreen my-1 z-50"
            type={passwordVisibility ? "text" : "password"}
            name="password"
            placeholder="password"
            {...register("password", {
              required: true,
            })}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="label absolute z-0 transition-all duration-200 px-1  text-gray-300 ">
            Password
          </label>

          <div className="visibility-icon absolute ">
            <Image
              src={passwordVisibility ? invisible_icon : visible_icon}
              width={25}
              height={25}
              alt=" view or hide password icon"
              onClick={() => handlePasswordVisibility()}
            />
          </div>

          <div className="flex items-center">
            {errors.password?.type === "required" && (
              <EmptyPasswordErrorComponent />
            )}
          </div>
        </div>

        <div className="input-container my-3 ">
          <input
            className="text-input placeholder-customGray border-2  border-customGray focus:placeholder-opacity-100 focus:border-customGreen my-1 z-50"
            type={confirmPasswordVisibility ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label className="label absolute z-0 transition-all duration-200 px-1  text-gray-300 ">
            Confirm Password
          </label>

          <div className="visibility-icon absolute ">
            <Image
              src={confirmPasswordVisibility ? invisible_icon : visible_icon}
              width={25}
              height={25}
              alt=" view or hide password icon"
              onClick={() => handleConfirmPasswordVisibility()}
            />
          </div>

          <div className="flex items-center my-1">
            {errors.confirmPassword?.type === "validate" && (
              <IncorrectPasswordConfirmErrorComponent />
            )}{" "}
          </div>

          <div className="flex items-center">
            {errors.password?.type === "required" && (
              <EmptyPasswordConfirmErrorComponent />
            )}
          </div>
        </div>

        <div className="agreement my-6">
          <input
            type="checkbox"
            name="agreement"
            value="agreement"
            checked={agreement}
            onChange={() => handleAgreement()}
            className=" xss:text-[8px] xs:text-[10px] md:text-sm  "
          />{" "}
          I agree to the terms of service
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-customGreen text-white py-3 rounded-md font-bold"
        >
          {" "}
          Register{" "}
        </button>

        <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
          <hr className="border-gray-400" />
          <p className="text-center text-sm font-semibold text-black">
            {" "}
            or continue with{" "}
          </p>
          <hr className="border-gray-400" />
        </div>

        <div className="flex justify-center items-center mt-6">
          <div className="google_img_container p-4 rounded-lg cursor-pointer ">
            <Image
              src={google_icon}
              width={40}
              height={40}
              alt=" google icon"
            />
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
    </>
  );
};

export default SignupForm;
