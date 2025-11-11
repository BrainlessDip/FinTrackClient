import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const UpdateTransaction = () => {
  const api = useAxiosSecure();

  const { id } = useParams();

  const [costType, setCostType] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const res = await api.get(`/transaction/${id}`);
        setData(res.data);
        setCostType(res.data.type);
        setLoading(false);
      } catch (err) {
        setData([]);
      }
    };
    getTransactions();
  }, []);

  const handleUpdateTransaction = async (e) => {
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

    toast.promise(api.patch(`/transaction/${id}`, data), {
      pending: "Updating your transaction...",
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
  };
  if (loading) return <Loading />;
  return (
    <div className="bg-base-300">
      <h1 className="mx-auto text-4xl pt-5 border-b-2 border-blue-500 w-fit">
        Update Transaction
      </h1>
      <div className="flex justify-center items-center flex-col relative min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-74px)]">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <form onSubmit={handleUpdateTransaction} className="space-y-2">
            <select
              defaultValue={data.type}
              key={data?.type}
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
              defaultValue={data.category}
              key={data?.category}
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
              defaultValue={data?.amount}
              min={1}
              required
              className="input"
            />

            <input
              type="text"
              name="description"
              placeholder="Enter description"
              defaultValue={data?.description}
              className="input"
              autoComplete="off"
              required
            />

            <input
              type="datetime-local"
              name="date"
              defaultValue={
                data?.date
                  ? new Date(
                      new Date(data.date).getTime() -
                        new Date().getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .slice(0, 16)
                  : ""
              }
              required
              className="input"
            />

            <button className="btn btn-neutral mt-4 w-full">
              Update Transaction
            </button>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default UpdateTransaction;
