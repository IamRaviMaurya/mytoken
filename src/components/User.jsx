export default function User() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Add Patient Button */}
      <div className="flex justify-end mb-4">
        <button
          className="bg-indigo-950 text-white font-medium py-2 px-4 rounded hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
          onClick={() => {
            // Handle the add patient action here
            console.log("Add Patient button clicked");
          }}
        >
          Add Patient
        </button>
      </div>

      {/* Table */}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Patient Name</th>
            <th scope="col" className="px-6 py-3">Patient Contact</th>
            <th scope="col" className="px-6 py-3">Token Id</th>
            <th scope="col" className="px-6 py-3">Symptoms</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Ravi
            </th>
            <td className="px-6 py-4">84084928</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">Headache</td>
            <td className="px-6 py-4">
              <a
                href="/"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Done
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
