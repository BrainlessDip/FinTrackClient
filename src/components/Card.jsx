import React from "react";

const Card = ({ value, name }) => {
  return (
    <div className="flex flex-col justify-center items-center w-fit h-fit p-10 text-3xl border-2 dark:border-orange-300 border-blue-700 rounded-2xl shadow-md transform transition-normal duration-400 ease-in-out hover:scale-120 cursor-default">
      <h1>${value}</h1>
      <h1 className="font-bold">{name}</h1>
    </div>
  );
};

export default Card;
