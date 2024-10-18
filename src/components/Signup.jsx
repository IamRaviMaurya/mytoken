import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../services/userService";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [categoryTitle, setCategoryTitle] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const navigate = useNavigate(); // htmlFor navigation

  const handleSignup = async (e) => {
    e.preventDefault();
    if(!selectedCategory){
      console.log(selectedCategory);
      setErrorMessage("Please select a category.")
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return; // Stop form submission
    }

    setErrorMessage("");

    const userData = {
      userName,
      categoryTitle,
      password,
      name,
      category: selectedCategory,
    };

    try {
     await signupUser(userData);
      setMessage("Signup successful!");
      setUserName("");
      setCategoryTitle("");
      setPassword("");
      setName("");
      setSelectedCategory("");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setMessage("Signup failed");
    }
  };

  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  // Function to handle category selection
  const selectCategory = (category) => {
    setSelectedCategory(category); // Update the selected category
    setShowDropDown(false); // Close the dropdown after selection
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Choose category
          </label>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            {selectedCategory || "Choose category"}{" "}
            {/* Display the selected category */}
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {showDropDown && (
          <div
            className="inline-flex w-full justify-center right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <button
                className="block px-4 py-2 text-sm text-gray-700  hover:bg-slate-100 rounded-md"
                role="menuitem"
                onClick={() => selectCategory("CLINIC")}
              >
                CLINIC
              </button>
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100 rounded-md"
                role="menuitem"
                onClick={() => selectCategory("HOTEL")}
              >
                HOTEL
              </button>
            </div>
          </div>
        )}
        {errorMessage && (
          <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
        )}
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSignup} method="POST">
          <div>
            <label
              htmlFor="category-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your name
            </label>
            <div className="mt-2">
              <input
                id="category-name"
                name="category-name"
                type="text"
                autoComplete="text"
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* <div>
            <label
              htmlFor="profile-photo"
             className="block text-sm font-medium leading-6 text-gray-900"
            >
              Profile photo
            </label>
            <div className="mt-2">
              <input
                id="profile-photo"
                name="profile-photo"
                type="file"
               className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}

          <div>
            <label
              htmlFor="user-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User name
            </label>
            <div className="mt-2">
              <input
                id="user-name"
                name="user-name"
                type="text"
                autoComplete="user-name"
                onChange={(e) => setUserName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="category-title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category title
            </label>
            <div className="mt-2">
              <input
                id="category-title"
                name="category-title"
                type="text"
                autoComplete="text"
                onChange={(e) => setCategoryTitle(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (confirmPassword && e.target.value !== confirmPassword) {
                    setErrorMessage("Passwords do not match");
                  } else {
                    setErrorMessage("");
                  }
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (password && e.target.value !== password) {
                    setErrorMessage("Passwords do not match");
                  } else {
                    setErrorMessage("");
                  }
                }}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            {errorMessage && (
              <p className="text-sm text-red-600 mt-2">{errorMessage}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create an account
            </button>
          </div>
          {message && (
            <div classNameName="mb-4 text-center text-sm text-green-600">
              <p
                classNameName={
                  message === "Signup successful!"
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {message}
              </p>
              {message === "Signup successful!" && (
                <Link
                  to="/login"
                  classNameName="text-indigo-600 hover:underline"
                >
                  Go to Login
                </Link>
              )}
            </div>
          )}
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
