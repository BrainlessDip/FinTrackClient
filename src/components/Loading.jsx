import React from "react";
import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950/90 backdrop-blur-md">
      <CircleLoader color="#216bd8" />
      <span className="mt-6 text-gray-200 text-xl font-semibold tracking-wide animate-pulse">
        Loading<span className="animate-bounce">...</span>
      </span>
    </div>
  );
};

export default Loading;
