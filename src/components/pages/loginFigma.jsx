import React from "react";
import { FaMeta } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function LoginFigma() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[485px] flex flex-col justify-around p-20 shadow-lg rounded bg-white h-4/5">
          <div className="">
            <h1 className="font-bold text-2xl">Hey, Welcome to Admin Pannel</h1>
            <p>Choose one of the option to go</p>
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              className="rounded-md w-84 my-3 border px-4 py-3 focus:border-slate-500 outline-none"
              placeholder="gettest@gmail.com"
            />
            <input
              type="password"
              className="rounded-md w-84 my-3 border px-4 py-3 focus:border-slate-500 outline-none "
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between items-center ">
            <p>Or continue with</p>
            <span className="h-[1px] w-48 bg-[#D9D9D9]"></span>
          </div>
          <div className="flex justify-evenly my-4">
            <button className="py-2 px-5">
              <FaGoogle size={30} />
            </button>
            <button className="py-2 px-5">
              <FaApple size={30} />
            </button>
            <button className="py-2 px-5">
              <FaMeta size={30} />
            </button>
          </div>
          <div className="w-full flex justify-center ">
            <button className="py-3 px-32 text-white bg-[#0366FF] rounded-md">
              Log in
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginFigma;
