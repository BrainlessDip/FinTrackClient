import React from "react";

const About = () => {
  return (
    <div className="bg-base-300 min-h-screen pt-10 px-6">
      <div className="max-w-4xl mx-auto bg-base-100 p-8 rounded-xl shadow-lg border border-base-200">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">About FinTrack</h1>
        <p className="text-lg leading-relaxed mb-4 text-base-content">
          FinTrack is your ultimate personal finance companion, designed to simplify the way you manage your money. 
          Our mission is to empower individuals to take control of their financial future through intuitive tracking, 
          insightful reports, and effortless budgeting.
        </p>
        <p className="text-lg leading-relaxed mb-4 text-base-content">
          Whether you are saving for a dream vacation, managing daily expenses, or planning for retirement, 
          FinTrack provides the tools you need to succeed. From detailed transaction logs to visual spending breakdowns, 
          we bring clarity to your finances.
        </p>
        <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="italic text-base-content/70">"Financial freedom for everyone, everywhere."</p>
        </div>
      </div>
    </div>
  );
};

export default About;
