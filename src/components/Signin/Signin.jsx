import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const register = async (email, password, firstName, lastName, age) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const docRef = await addDoc(collection(db, "users"), {
        email,
        firstName,
        lastName,
        age,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-black w-screen h-screen flex justify-between items-center">
      <div className="bg-slate-50 h-full p-14 space-y-4">
        <div className="mt-4">
          <h3 className="text-4xl font-serif">Sign In</h3>
          <p className="font-thin mt-1">
            Sign in is an action you take to record or enter information ...
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block font-serif">First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="border-b-black border-b-2 h-9 shadow-sm p-1 mt-2"
            />
          </div>
          <div>
            <label className="block font-serif">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="border-b-black border-b-2 h-9 shadow-sm p-1 mt-2"
            />
          </div>
          <div>
            <label className="block font-serif">Age</label>
            <input
              onChange={(e) => setAge(e.target.value)}
              type="number"
              className="border-b-black border-b-2 h-9 shadow-sm p-1 mt-2"
            />
          </div>
          <div>
            <label className="block font-serif">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border-b-black border-b-2 h-9 shadow-sm p-1 mt-2"
            />
          </div>
          <div>
            <label className="block font-serif">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="border-b-black border-b-2 p-1 h-9 shadow-sm mt-2"
            />
          </div>
          <div className="mt-3">
            <button
              type="button"
              onClick={() =>
                register(email, password, firstName, lastName, age)
              }
              className="bg-black text-white font-serif w-28 p-2 rounded-xl mt-4"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
