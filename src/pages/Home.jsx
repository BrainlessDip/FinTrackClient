import React from "react";
import Overview from "../components/Overview";
import useAuth from "./../hooks/useAuth";
import MotivationalTagline from "../components/MotivationalTagline";
import BudgetingTips from "../components/BudgetingTips";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="bg-base-300 h-screen">
      <MotivationalTagline />
      {user && <Overview />}
      <BudgetingTips />
    </div>
  );
};

export default Home;
