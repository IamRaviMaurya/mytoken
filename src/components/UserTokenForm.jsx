import React from 'react';
import { useSearchParams } from 'react-router-dom';

const UserTokenForm = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userid');

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Fill the details to generate a token
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          {/* Display the user ID from the QR code */}
          {userId && (
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                User ID
              </label>
              <div className="mt-2">
                <input
                  id="userid"
                  name="userid"
                  type="text"
                  value={userId}
                  disabled
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your Full Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="tel"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile Number
            </label>
            <div className="mt-2">
              <input
                id="tel"
                name="tel"
                type="tel"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="symptoms"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Symptoms
            </label>
            <div className="mt-2">
              <textarea
                id="symptoms"
                name="symptoms"
                rows="3"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
            >
              Generate Token
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserTokenForm;
