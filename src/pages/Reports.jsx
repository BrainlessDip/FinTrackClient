import React, { useEffect, useState } from "react";
import FinancialSummary from "../components/FinancialSummary";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Reports = () => {
  const api = useAxiosSecure();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const res = await api.get("/my-transactions");
        setTransactions(res.data);
      } catch (err) {
        setTransactions([]);
      }
    };
    getTransactions();
  }, []);

  return (
    <div className="bg-base-300 h-screen">
      <h1 className="mx-auto text-4xl pt-5 border-b-2 border-blue-500 w-fit">
        Reports
      </h1>
      <div>
        <FinancialSummary transactions={transactions} />
      </div>
    </div>
  );
};

export default Reports;
