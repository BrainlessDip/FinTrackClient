import React from "react";
import Overview from "../components/Overview";
import useAuth from "./../hooks/useAuth";
import MotivationalTagline from "../components/MotivationalTagline";
import BudgetingTips from "../components/BudgetingTips";
import FinancialPlanning from "../components/FinancialPlanning";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="bg-base-300">
      <MotivationalTagline />
      {user && <Overview />}
      <BudgetingTips />
      <FinancialPlanning />
    </div>
  );
};

export default Home;
