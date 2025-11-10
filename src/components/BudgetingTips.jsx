import React from "react";

const BudgetingTips = () => {
  return (
    <section className="mt-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 drop-shadow-lg text-center dark:text-white mb-2">
        Budgeting Tips
      </h2>
      <div className="w-28 h-1 mx-auto mt-1 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-700 dark:from-purple-400 dark:via-pink-400 dark:to-orange-300 rounded-full shadow-md"></div>

      <div className="flex justify-center items-start flex-col md:flex-row font-medium gap-2 md:gap-20 mt-5 p-2">
        <div>
          <ul className="list-disc text-left space-y-2 ml-5">
            <li>Track your expenses</li>
            <li>Set realistic goals</li>
            <li>Create a monthly spending plan</li>
            <li>Separate needs from wants</li>
            <li>Automate your savings</li>
            <li>Review subscriptions regularly</li>
            <li>Use cash for daily expenses to stay disciplined</li>
            <li>Set up an emergency fund</li>
            <li>Plan meals to reduce food waste</li>
            <li>Avoid impulse purchases—wait 24 hours before buying</li>
          </ul>
        </div>
        <div>
          <ul className="list-disc text-left space-y-2 ml-5">
            <li>Set a fixed percentage of income for savings each month</li>
            <li>Use budgeting apps to visualize your spending</li>
            <li>Review your budget after major life or income changes</li>
            <li>Negotiate bills like internet or insurance for lower rates</li>
            <li>Buy essentials in bulk to save over time</li>
            <li>Use discount codes or cashback apps when shopping online</li>
            <li>Schedule “no-spend” days each week</li>
            <li>
              Invest small amounts regularly instead of waiting to save big
            </li>
            <li>
              Track seasonal expenses (like holidays or tuition) in advance
            </li>
            <li>Reward yourself occasionally to avoid budget burnout</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BudgetingTips;
