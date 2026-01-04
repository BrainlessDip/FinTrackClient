import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    quote: "“By failing to prepare, you are preparing to fail.”",
    image: "https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    cta: "Start Planning"
  },
  {
    id: 2,
    quote: "“Plan your work, then work your plan.”",
    image: "https://cdn.pixabay.com/photo/2016/07/13/12/14/new-year-background-1514296_640.jpg",
    cta: "View Goals"
  },
  {
    id: 3,
    quote: "“Dreams don’t work unless you do.”",
    image: "https://st2.depositphotos.com/1004061/7392/i/450/depositphotos_73926393-stock-photo-success-word-bridge.jpg",
    cta: "Take Action"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  return (
    <div 
      className="relative w-11/12 mx-auto group overflow-hidden rounded-4xl mt-8"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-[450px] relative flex flex-col items-center justify-center">
            <img src={slide.image} className="absolute inset-0 w-full h-full object-cover" alt="slide" />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
              <h1 className="text-xl md:text-3xl font-bold text-white mb-6 drop-shadow-md animate-fadeIn">
                {slide.quote}
              </h1>
              <button className="btn btn-primary btn-md rounded-full px-8 hover:scale-105 transition-transform">
                {slide.cta}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-5 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={prevSlide} className="btn btn-circle bg-white/20 border-none text-white hover:bg-white/40">❮</button>
        <button onClick={nextSlide} className="btn btn-circle bg-white/20 border-none text-white hover:bg-white/40">❯</button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all ${currentIndex === i ? 'w-8 bg-white' : 'w-2 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
