import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TransactionCard from "../components/TransactionCard";

const MyTransactions = () => {
  const api = useAxiosSecure();
  const [data, setData] = useState([]);
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
          <TransactionCard transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default MyTransactions;
