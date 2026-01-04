import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonials = () => {
  const testimonials = [
    {
      text: "FinTrack completely changed how I manage my money. I saved $5,000 in my first year!",
      author: "Sarah J.",
      role: "Freelancer",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "The analytics are incredible. I finally understand where my paycheck goes every month.",
      author: "Michael T.",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Simple, beautiful, and effective. The best budgeting app I've ever used. Highly recommend!",
      author: "Jessica L.",
      role: "Small Business Owner",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4 text-base-content">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Loved by Thousands</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
            <p className="text-base-content/60">See what our users have to say about their journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <div key={i} className="card bg-base-200 p-8 rounded-3xl relative shadow-sm hover:shadow-md transition-shadow">
                    <FaQuoteLeft className="text-4xl text-primary/20 absolute top-6 left-6" />
                    <p className="mb-6 mt-4 relative z-10 text-lg italic text-base-content/80 font-medium">"{t.text}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                        <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full border-2 border-primary" />
                        <div>
                            <h4 className="font-bold">{t.author}</h4>
                            <p className="text-xs opacity-60 uppercase tracking-wider">{t.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
