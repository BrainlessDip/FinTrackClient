import React from "react";

const FinancialPlanning = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-center pb-5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 drop-shadow-lg text-center dark:text-white">
          Why Financial Planning Matters
        </h2>
        <div className="w-28 h-1 mx-auto mt-1 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-700 dark:from-purple-400 dark:via-pink-400 dark:to-orange-300 rounded-full shadow-md mb-3"></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-5 w-full max-w-4xl font-medium">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 shadow-md flex-1">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              If You Don't
            </h3>
            <ul className="list-disc text-left space-y-2 ml-5">
              <li>Run out of money before the month ends</li>
              <li>Accumulate debt without realizing it</li>
              <li>Struggle to afford emergencies</li>
              <li>Miss investment opportunities</li>
              <li>Feel anxious or uncertain about your future</li>
              <li>Live paycheck to paycheck</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 shadow-md flex-1">
            <h3 className="text-xl font-bold text-green-600 mb-4">
              If You Did
            </h3>
            <ul className="list-disc text-left space-y-2 ml-5">
              <li>Have full control over your money</li>
              <li>Build long-term wealth steadily</li>
              <li>Save easily for vacations or big goals</li>
              <li>Handle emergencies stress-free</li>
              <li>Invest confidently for the future</li>
              <li>Enjoy peace of mind and financial freedom</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanning;
<div className="flex flex-col items-center text-center my-12">
  <h2 className="text-3xl font-semibold mb-10">
    Why Financial Planning Matters
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-start gap-16 w-full max-w-4xl">
    {/* If You Don’t */}
    <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 shadow-md flex-1">
      <h3 className="text-xl font-bold text-red-600 mb-4">If You Don’t</h3>
      <ul className="list-disc text-left space-y-2 ml-5">
        <li>Run out of money before the month ends</li>
        <li>Accumulate debt without realizing it</li>
        <li>Struggle to afford emergencies</li>
        <li>Miss investment opportunities</li>
        <li>Feel anxious or uncertain about your future</li>
        <li>Live paycheck to paycheck</li>
      </ul>
    </div>

    {/* If You Did */}
    <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 shadow-md flex-1">
      <h3 className="text-xl font-bold text-green-600 mb-4">If You Did</h3>
      <ul className="list-disc text-left space-y-2 ml-5">
        <li>Have full control over your money</li>
        <li>Build long-term wealth steadily</li>
        <li>Save easily for vacations or big goals</li>
        <li>Handle emergencies stress-free</li>
        <li>Invest confidently for the future</li>
        <li>Enjoy peace of mind and financial freedom</li>
      </ul>
    </div>
  </div>
</div>;
