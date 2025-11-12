const Carousel = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="carousel overflow-hidden w-full mt-10">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-[392px] w-fit object-cover rounded-4xl"
            />
            <h1 className="text-[15px] font-bold text-white tracking-wide -mt-15">
              “By failing to prepare, you are preparing to fail.”
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <img
              src="https://cdn.pixabay.com/photo/2016/07/13/12/14/new-year-background-1514296_640.jpg"
              className="h-[392px] w-[392px] object-cover rounded-4xl"
            />
            <h1 className="text-[15px] font-bold text-white tracking-wide -mt-15">
              “Plan your work, then work your plan.”
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <img
              src="https://st2.depositphotos.com/1004061/7392/i/450/depositphotos_73926393-stock-photo-success-word-bridge.jpg"
              className="h-[392px] w-fit object-cover rounded-4xl"
            />
            <h1 className="text-[15px] font-bold text-white tracking-wide -mt-15">
              “Dreams don’t work unless you do.”
            </h1>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
