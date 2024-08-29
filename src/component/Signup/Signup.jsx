import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Cookies from "js-cookie";
import { auth } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";

function SignUp({ darkMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      Cookies.set("authToken", token);
      console.log("Signed in with Google successfully.");
      navigate("/upload");
    } catch (error) {
      console.error("Error signing in with Google: ", error.message);
      setError("Failed to sign in with Google. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Email and password sign-in logic here.");
      navigate("/upload");
    } catch (error) {
      console.error(
        "Error signing in with email and password: ",
        error.message
      );
      setError("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <div
      className={`flex-1 flex flex-col justify-center p-6 ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div className="mb-4 mx-20 max-lg:mx-3">
        <p className="text-3xl sm:text-5xl font-bold py-2">Sign In</p>
        <p className="font-bold">Sign in to your account</p>
      </div>
      <div className="flex items-center justify-center font-bold text-gray-400 gap-4 mb-4 text-sm">
        <button
          onClick={handleGoogleSignIn}
          className={`flex items-center gap-2 p-2 rounded-lg ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <FcGoogle />
          <span>Sign in with Google</span>
        </button>
        <button
          className={`flex items-center gap-2 p-2 rounded-lg ${
            darkMode ? "bg-black" : "bg-white"
          }`}
        >
          <FaApple />

          <span>Sign in with Apple</span>
        </button>
      </div>
      <form
        className={`flex flex-col gap-4 p-8 sm:p-10 mb-4 mx-20 max-lg:mx-3 rounded-2xl font-semibold ${
          darkMode ? "bg-black" : "bg-white"
        }`}
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>
            Email address
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border p-2 py-1 rounded text-lg ${
              darkMode
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-gray-100 border-gray-300"
            }`}
            required
          />
        </label>
        <label className="flex flex-col">
          <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>
            Password
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`border p-2 py-1 rounded text-lg ${
              darkMode
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-gray-100 border-gray-300"
            }`}
            required
          />
        </label>
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-blue-600 mt-4 cursor-pointer">Forgot password?</p>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
        >
          Sign In
        </button>
      </form>
      <p className="text-center text-gray-400 mt-4">
        Don’t have an account?{" "}
        <strong className="text-blue-600 cursor-pointer">Register here</strong>
      </p>

      <div className="flex items-center justify-center gap-4 mt-8 text-gray-400">
        <FaGithub className="text-4xl  cursor-pointer" />
        <AiFillTwitterCircle className="text-4xl  cursor-pointer" />
        <FaLinkedin className="text-4xl cursor-pointer" />
        <AiFillDiscord className="text-4xl  cursor-pointer" />
      </div>
    </div>
  );
}

export default SignUp;
