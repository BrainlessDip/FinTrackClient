import React from "react";
import Overview from "../components/Overview";
import useAuth from "./../hooks/useAuth";
import BudgetingTips from "../components/BudgetingTips";
import FinancialPlanning from "../components/FinancialPlanning";
import Carousel from "../components/Carousel";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="bg-base-300">
      <Carousel />
      {user && <Overview />}
      <BudgetingTips />
      <FinancialPlanning />
    </div>
  );
};

export default Home;
