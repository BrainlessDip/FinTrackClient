import React, { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "./../hooks/useAxiosSecure";

const AddTransaction = () => {
  const { user } = useAuth();
  const api = useAxiosSecure();

  const [costType, setCostType] = useState("");
  const handleAddTransaction = async (e) => {
    e.preventDefault();
    const type = e.target.type.value;
    const category = e.target.category.value;
    const amount = e.target.amount.value;
    const description = e.target.description.value;
    const date = e.target.date.value;

    if (!["income", "expense"].includes(type)) {
      toast.error("Please select a valid type: Income or Expense");
      return;
    }

    if (category == "Select a category") {
      toast.error("Please select a valid category");
      return;
    }
    const data = {
      type,
      category,
      amount,
      description,
      date,
    };

    const res = await toast.promise(api.post("/add-transaction", data), {
      pending: "Adding your transaction...",
      success: {
        render({ data }) {
          return data?.data?.message;
        },
      },
      error: {
        render({ data }) {
          return (
            data?.response?.data?.error ||
            "Failed to add transaction. Please try again!"
          );
        },
      },
    });
    if (res.status === 200) {
      e.target.reset();
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl pb-6 border-b-2 border-primary mb-8 text-center font-bold">
        Add Transaction
      </h1>
      <div className="w-full max-w-md">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <form onSubmit={handleAddTransaction} className="space-y-2">
            <select
              defaultValue="Select a cost type"
              className="select"
              name="type"
              required
              onChange={(e) => {
                const type = e.target.value;
                setCostType(type);
                if (costType !== type) {
                  e.target.parentNode.category.value = "Select a category";
                }
              }}
            >
              <option disabled={true}>Select a cost type</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <select
              defaultValue="Select a category"
              className="select"
              name="category"
              required
            >
              <option disabled={true}>Select a category</option>
              <optgroup label="Income" hidden={costType !== "income"}>
                <option value="salary">Salary</option>
                <option value="freelance">Freelance</option>
                <option value="investments">Investments</option>
                <option value="bonus">Bonus</option>
                <option value="gifts">Gifts</option>
                <option value="other_income">Other</option>
              </optgroup>

              <optgroup label="Expenses" hidden={costType !== "expense"}>
                <option value="food">Food</option>
                <option value="rent">Rent</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
                <option value="transport">Transport</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="shopping">Shopping</option>
                <option value="subscriptions">Subscriptions</option>
                <option value="other_expense">Other</option>
              </optgroup>
            </select>

            <input
              type="number"
              name="amount"
              placeholder="Type amount"
              min={1}
              required
              className="input"
            />

            <input
              type="text"
              name="description"
              placeholder="Enter description"
              className="input"
              autoComplete="off"
              required
            />

            <input
              type="datetime-local"
              name="date"
              required
              className="input"
            />

            <input
              type="email"
              name="email"
              defaultValue={user.email}
              className="input"
              readOnly
            />
            <input
              type="email"
              name="name"
              value={user.displayName || undefined}
              className="input"
              readOnly
            />

            <button className="btn btn-neutral mt-4 w-full">
              Add Transaction
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default AddTransaction;
