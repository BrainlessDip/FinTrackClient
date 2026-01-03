import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col rounded-xl shadow-md border border-gray-200 dark:border-gray-700 bg-base-100 h-full animate-pulse">
      <div className="h-40 w-full bg-gray-300 dark:bg-gray-700 rounded-t-xl"></div>

      <div className="p-4 flex flex-col grow gap-3">
        <div className="flex justify-between items-center">
          <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-3 w-16 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>

        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          <div className="h-6 w-20 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
        </div>

        <div className="h-8 w-32 bg-gray-300 dark:bg-gray-700 rounded my-1"></div>

        <div className="flex flex-col gap-2">
          <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-3 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>

        <div className="mt-auto pt-4 flex justify-between gap-2">
          <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-8 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
