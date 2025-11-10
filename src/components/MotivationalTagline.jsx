import axios from "axios";
import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const MotivationalTagline = () => {
  const api = useAxios();
  const [quote, setQuote] = useState({
    quote: "...",
    author: "...",
  });

  useEffect(() => {
    const getQuote = async () => {
      try {
        const res = await api.get("/quote");
        setQuote(res.data);
      } catch (err) {
        setQuote({
          quote: "...",
          author: "...",
        });
      }
    };
    getQuote();
  }, []);

  return (
    <div className="w-11/12 mx-auto p-2 rounded-2xl dark:text-white text-black text-center">
      <p className="text-xl italic leading-relaxed mb-4">“{quote.quote}”</p>
    </div>
  );
};

export default MotivationalTagline;
