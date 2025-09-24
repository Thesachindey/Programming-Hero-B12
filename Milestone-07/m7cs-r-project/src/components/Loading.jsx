import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {/* Fancy spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-blue-500 font-bold">⚡</span>
        </div>
      </div>

      {/* Text below */}
      <p className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
