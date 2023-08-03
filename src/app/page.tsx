"use client";

import { useStateContext } from "../../context/StateContext";
import Welcome from "./components/welcome/Welcome";
import Navlink from "./components/link/Navlink";
import RoleSelector from "./components/role/RoleSelector";
import SignupForm from "./components/signup/SignupForm";
import LoginForm from "./components/login/Login";

export default function Home() {
  const { signup } = useStateContext() ?? {};

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 xxs:w-[90vw]  sm:w-[80vw] md:w-[60vw] lg:w-[40vw] bg-white rounded-sm h-auto sm:min-h-[50vh] md:min-h-[40vh]  flex flex-col">
        <Welcome />
        <div className="xs:p-4 md:p-8 lg:p-12">
          <Navlink />
          <RoleSelector />
          {signup ? <SignupForm /> : <LoginForm />}
        </div>
      </div>
    </main>
  );
}
