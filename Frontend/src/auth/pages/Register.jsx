
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const Register = () => {
  const { loading, HandleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await HandleRegister(username, email, password);

    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-4 relative overflow-hidden">

      {/* Soft background shades */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl" />

      {/* Register card */}
      <div className="relative w-full max-w-[360px]">

        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">

          {/* Heading */}
          <div className="text-center mb-6">

            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-gray-900 text-white flex items-center justify-center font-semibold">
              P
            </div>

            <h1 className="text-xl font-semibold text-gray-900">
              Create an account
            </h1>

            <p className="text-xs text-gray-500 mt-1">
              Get started with Perplexcity
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Username */}
            <div>

              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="
                  w-full
                  h-9
                  px-3
                  text-xs
                  rounded-lg
                  bg-gray-50
                  border border-gray-200
                  text-gray-800
                  placeholder:text-gray-400
                  outline-none
                  transition
                  focus:bg-white
                  focus:border-blue-400
                  focus:ring-2
                  focus:ring-blue-100
                "
                required
              />

            </div>

            {/* Email */}
            <div>

              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  h-9
                  px-3
                  text-xs
                  rounded-lg
                  bg-gray-50
                  border border-gray-200
                  text-gray-800
                  placeholder:text-gray-400
                  outline-none
                  transition
                  focus:bg-white
                  focus:border-blue-400
                  focus:ring-2
                  focus:ring-blue-100
                "
                required
              />

            </div>

            {/* Password */}
            <div>

              <label className="block text-xs font-medium text-gray-600 mb-1.5">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  h-9
                  px-3
                  text-xs
                  rounded-lg
                  bg-gray-50
                  border border-gray-200
                  text-gray-800
                  placeholder:text-gray-400
                  outline-none
                  transition
                  focus:bg-white
                  focus:border-blue-400
                  focus:ring-2
                  focus:ring-blue-100
                "
                required
              />

            </div>

            {/* Register button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                h-9
                rounded-lg
                bg-gray-900
                text-white
                text-xs
                font-medium
                transition
                hover:bg-gray-800
                active:scale-[0.98]
                disabled:opacity-50
              "
            >
              {loading ? "Creating account..." : "Create account"}
            </button>

          </form>

          {/* Login */}
          <p className="text-center text-xs text-gray-500 mt-5">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-gray-900 font-medium hover:underline"
            >
              Sign in
            </Link>

          </p>

        </div>

        <p className="text-center text-[10px] text-gray-400 mt-4">
          Secure authentication
        </p>

      </div>

    </div>
  );
};

export default Register;

