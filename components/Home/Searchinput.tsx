import React from "react";

function SearchInput() {
  return (
    <div className="mt-5 px-4">
      <h2
        className="text-center text-base md:text-lg lg:text-xl text-gray-400 mb-3"
      >
        Let’s Search What You Need
      </h2>
      <div className="flex justify-center">
        <div className="flex items-center bg-gray-100 py-1 px-2 md:py-1 md:px-4 lg:py-2 lg:px-6 gap-1 md:gap-3 lg:gap-4 rounded-full divide-x divide-gray-300 shadow-sm max-w-xs md:max-w-md lg:max-w-lg w-full">
          {/* Location Input */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 md:w-5 md:h-5 text-gray-600"
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
              className="pl-1 md:pl-2 p-1 text-xs md:text-sm lg:text-base outline-none bg-transparent text-gray-700 w-24 md:w-32 lg:w-40"
            />
          </div>
          {/* Date Input */}
          <div className="flex items-center pl-1 md:pl-2">
            <input
              type="date"
              className="p-1 text-xs md:text-sm lg:text-base outline-none bg-transparent text-gray-700 w-24 md:w-32 lg:w-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
