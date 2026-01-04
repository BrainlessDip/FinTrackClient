import React from "react";

const FinancialPlanning = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 drop-shadow-lg text-center dark:text-white">
          Why Financial Planning Matters
        </h2>
        <div className="w-28 h-1 mx-auto mt-1 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-700 dark:from-purple-400 dark:via-pink-400 dark:to-orange-300 rounded-full shadow-md mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-4 w-full max-w-6xl font-medium">
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex-1">
            <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-red-600 rounded-full"></span>
              If You Don't
            </h3>
            <ul className="list-disc text-left space-y-3 ml-6 text-lg text-base-content/80">
              <li>Run out of money before the month ends</li>
              <li>Accumulate debt without realizing it</li>
              <li>Struggle to afford emergencies</li>
              <li>Miss investment opportunities</li>
              <li>Feel anxious or uncertain about your future</li>
              <li>Live paycheck to paycheck</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex-1">
            <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-green-600 rounded-full"></span>
              If You Did
            </h3>
            <ul className="list-disc text-left space-y-3 ml-6 text-lg text-base-content/80">
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
    </section>
  );
};

export default FinancialPlanning;
