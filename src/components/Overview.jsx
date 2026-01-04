import React, { useEffect, useState } from "react";
import Card from "./Card";
import useAxiosSecure from "./../hooks/useAxiosSecure";

const Overview = () => {
  const api = useAxiosSecure();
  const [data, setData] = useState({
    balance: "...",
    income: "...",
    expense: "...",
  });

  useEffect(() => {
    const getBalance = async () => {
      try {
        const res = await api.get("/balance");
        setData(res.data);
      } catch (err) {
        setData({ balance: "0", income: "0", expense: "0" });
      }
    };
    getBalance();
  }, []);

  return (
    <section className="py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-600 drop-shadow-lg text-center dark:text-white">
        Overview
      </h2>
      <div className="w-28 h-1 mx-auto mt-1 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-700 dark:from-purple-400 dark:via-pink-400 dark:to-orange-300 rounded-full shadow-md"></div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-10">
        <Card value={data.balance} name="Balance" />
        <Card value={data.income} name="Income" />
        <Card value={data.expense} name="Expenses" />
      </div>
    </section>
  );
};

export default Overview;
