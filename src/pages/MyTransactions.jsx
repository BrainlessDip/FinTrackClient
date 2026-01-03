import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TransactionCard from "../components/TransactionCard";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import SkeletonCard from "../components/SkeletonCard";

const MyTransactions = () => {
  const api = useAxiosSecure();
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  const { theme } = useAuth();

  useEffect(() => {
    let txns = [...data];

    if (sort === "date") {
      txns.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sort === "amount") {
      txns.sort((a, b) => Number(b.amount) - Number(a.amount));
    }

    setData(txns);
  }, [sort]);

  const deleteTransaction = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      theme: theme ? "dark" : "light",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    const res = await toast.promise(api.delete(`/transaction/${id}`), {
      pending: "Deleting your transaction...",
      success: {
        render({ data }) {
          return data?.data?.message;
        },
      },
      error: {
        render({ data }) {
          return (
            data?.response?.data?.message ||
            "Failed to delete transaction. Please try again!"
          );
        },
      },
    });
    if (res.status === 200) {
      setData(data.filter((transaction) => transaction._id !== id));
    }
  };

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const res = await api.get("/my-transactions");
        setData(res.data);
        setLoading(false);
      } catch (err) {
        setData([]);
        setLoading(false);
      }
    };
    getTransactions();
  }, []);

  return (
    <div className="bg-base-300 min-h-screen">
      <div className="flex justify-center items-center gap-5 flex-col">
        <h1 className="mx-auto text-4xl pt-5 border-b-2 border-blue-500 w-fit">
          My Transaction
        </h1>
        <select
          defaultValue=""
          className="select select-success border py-2 rounded-sm border-[#d2d2d2] bg-base-100"
        >
          <option value="" disabled>
            Sort by...
          </option>
          <option
            value="date"
            onClick={() => {
              setSort("date");
            }}
          >
            Sort by date
          </option>
          <option
            value="amount"
            onClick={() => {
              setSort("amount");
            }}
          >
            Sort by amount
          </option>
        </select>
        <div></div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-7">
          {[...Array(8)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-7">
          {data.length > 0 ? (
            data.map((transaction) => (
              <TransactionCard
                transaction={transaction}
                key={transaction._id}
                deleteTransaction={() => {
                  deleteTransaction(transaction._id);
                }}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500 dark:text-gray-400 text-lg">
              No transactions found. Start adding some!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyTransactions;
