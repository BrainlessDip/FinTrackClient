import React from "react";
import Overview from "../components/Overview";
import useAuth from "./../hooks/useAuth";
import BudgetingTips from "../components/BudgetingTips";
import FinancialPlanning from "../components/FinancialPlanning";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import Services from "../components/home/Services";
import Carousel from "../components/Carousel";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="bg-base-100 min-h-screen flex flex-col">
      <Carousel />
      {user && <Overview />}
      <Services />
      <BudgetingTips />
      <Testimonials />
      <FAQ />
      <FinancialPlanning />
    </div>
  );
};

export default Home;
