import React from "react";
import { Link } from "react-router";

const TransactionCard = ({ transaction, deleteTransaction }) => {
  const typeColor =
    transaction.type === "income"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";

  return (
    <div className="flex flex-col p-4 rounded-xl shadow-md border border-gray-200 dark:border-blue-300 bg-base-100">
      <span className="text-black dark:text-white font-semibold text-md text-center mb-2">
        {new Date(transaction.date).toLocaleDateString()}
      </span>
      <div className="flex justify-center items-center gap-3 mb-2">
        <span
          className={`px-3 py-1 rounded-full text-sm font-bold ${typeColor}`}
        >
          {transaction.type.toUpperCase()}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm font-bold ${typeColor}`}
        >
          {transaction.category.toUpperCase()}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-sm font-bold ${typeColor}`}
        >
          ${transaction.amount}
        </span>
      </div>
      <p className="text-black dark:text-white text-2xl">
        {transaction.description}
      </p>

      <div className="mt-3 flex justify-center items-center gap-5">
        <Link
          to={`/update-transaction/${transaction._id}`}
          className="btn btn-outline btn-primary btn-sm"
        >
          Update
        </Link>
        <button
          className="btn btn-outline btn-error btn-sm hover:text-white"
          onClick={deleteTransaction}
        >
          Delete
        </button>
        <button className="btn btn-outline btn-primary btn-sm hover:text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
