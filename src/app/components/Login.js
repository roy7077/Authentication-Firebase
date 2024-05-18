"use client"; // Ensure this file is treated as a client component

import { useFirebase } from "../context/firebase";
import { useState } from 'react';

export default function Login() {
  const fire = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  console.log("firebase -user ",fire.user)
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Image */}
      <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
        <img
          src="https://dbdzm869oupei.cloudfront.net/img/quadres/preview/50803.png"
          alt="Login Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 bg-[#212121] text-white flex items-center justify-center">
        <div className="max-w-md w-full p-6 bg-[#333332] border border-white rounded-md">
          <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
          <p className="text-xl mb-4 text-center">Choose a Login Method</p>
          <button
            onClick={fire.googleAuth}
            className="w-full py-2 mb-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            Login with Google
          </button>
          <div className="flex items-center justify-between mb-4">
            <hr className="w-full border-gray-600" />
            <span className="px-2 text-gray-400">OR</span>
            <hr className="w-full border-gray-600" />
          </div>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={()=>{
                fire.emailLogin(email,password);
              }}
              className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
            >
              Login with Email
            </button>
          </div>
          <p className="text-gray-400 mt-4 text-center">
            Don't have an account? <a href="/signup" className="text-blue-400">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}
