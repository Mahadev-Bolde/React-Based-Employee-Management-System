import React, { useState } from "react";

export default function Login({ handleLogin }) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="Enter your Email"
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="Enter your Password"
            className="outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400 mt-3"
          />

          <button
            type="submit"
            className="mt-10 w-full font-bold bg-emerald-600 rounded-full py-3 px-5 text-xl text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
