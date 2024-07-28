import React from "react";

function SearchInput() {
  return (
    <div className="mt-4 px-2">
      <h2
        className="text-center text-sm md:text-base lg:text-lg text-gray-500 mb-2"
      >
        Let’s Search What You Need
      </h2>
      <div className="flex justify-center">
        <div className="flex items-center bg-gray-100 py-1 px-2 gap-1 rounded-full divide-x divide-gray-300 shadow-sm max-w-sm md:max-w-md lg:max-w-lg w-full">
          {/* Location Input */}
          <div className="flex items-center pr-1 md:pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:w-4.5 md:h-4.5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Location"
              className="pl-1 md:pl-2 p-1 text-xs md:text-sm outline-none bg-transparent text-gray-600 w-20 md:w-28 lg:w-32"
            />
          </div>
          {/* Date Input */}
          <div className="flex items-center pl-1 md:pl-2">
            <input
              type="date"
              className="p-1 text-xs md:text-sm outline-none bg-transparent text-gray-600 w-20 md:w-28 lg:w-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
