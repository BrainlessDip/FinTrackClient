import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TransactionCard from "../components/TransactionCard";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const MyTransactions = () => {
  const api = useAxiosSecure();
  const [data, setData] = useState([]);
  const { theme } = useAuth();

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

    const res = await toast.promise(api.delete(`/my-transactions/${id}`), {
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
      } catch (err) {
        setData([]);
      }
    };
    getTransactions();
  }, []);

  return (
    <div className="bg-base-300 h-screen">
      <h1 className="mx-auto text-4xl pt-5 border-b-2 border-blue-500 w-fit">
        My Transaction
      </h1>

      <div className="grid grid-cols-5 gap-6 p-7">
        {data.map((transaction) => (
          <TransactionCard
            transaction={transaction}
            key={transaction._id}
            deleteTransaction={() => {
              deleteTransaction(transaction._id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MyTransactions;
