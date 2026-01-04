import React, { useEffect, useState } from "react";
import FinancialSummary from "../components/FinancialSummary";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "./../components/Loading";

const Reports = () => {
  const api = useAxiosSecure();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const res = await api.get("/my-transactions");
        setTransactions(res.data);
        setLoading(false);
      } catch (err) {
        setTransactions([]);
        setLoading(false);
      }
    };
    getTransactions();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen">
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
