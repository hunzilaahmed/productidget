import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const logOn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="bg-black w-screen h-screen flex justify-between items-center">
      <div className="bg-slate-50 h-full p-14 space-y-4">
        <div className="mt-4">
          <h3 className="text-4xl font-serif">Login</h3>
          <p className="font-thin mt-1">
            Log in is an action you take to record or enter information ...
          </p>
        </div>
        <form action="" className="space-y-4">
          <div>
            <label className="block font-serif" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border-b-black border-b-2 h-9 shadow-sm p-1 mt-2"
            />
          </div>
          <div>
            <label className="block font-serif" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="border-b-black border-b-2 p-1 h-9 shadow-sm mt-2"
            />
          </div>
          <div className="mt-3">
            <button
              type="button"
              onClick={() => logOn(email, password)}
              className="bg-black text-white font-serif w-28 p-2 rounded-xl mt-4"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
