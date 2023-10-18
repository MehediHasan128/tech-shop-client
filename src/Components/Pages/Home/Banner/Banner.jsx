import img1 from "../../../../assets/Banner/banner1.jpg";
import img2 from "../../../../assets/Banner/banner2.jpg";
import img3 from "../../../../assets/Banner/banner3.jpg";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="w-full h-full absolute">
          <div className="h-full flex justify-center items-center">
            <div className="text-center">
              <h1 className="text-xl lg:text-6xl font-bold mb-5">
                Discover the Future of Tech at <span className="text-sky-500">Tech</span> Shop
              </h1>
              <p className="text-sm lg:text-xl font-medium">
                Discover the latest and greatest in tech products and services.
              </p>
              <button className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white mx-auto mt-9 lg:mt-10 px-3 lg:px-5 py-2 lg:py-3 rounded-lg lg:text-xl font-semibold gap-2">
                Shop Now
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a className="lg:text-3xl" href="#slide3">
            <MdOutlineArrowBackIosNew />
          </a>
          <a className="lg:text-3xl" href="#slide2">
            <MdOutlineArrowForwardIos />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="w-full h-full absolute">
          <div className="h-full flex justify-center items-center">
            <div className="text-center text-white">
              <h1 className="text-xl lg:text-6xl font-bold mb-5">
                Discover the Future of Tech at <span className="text-sky-500">Tech</span> Shop
              </h1>
              <p className="text-sm lg:text-xl font-medium">
                Discover the latest and greatest in tech products and services.
              </p>
              <button className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white mx-auto mt-9 lg:mt-10 px-3 lg:px-5 py-2 lg:py-3 rounded-lg lg:text-xl font-semibold gap-2">
                Shop Now
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a className="lg:text-3xl text-white" href="#slide1">
            <MdOutlineArrowBackIosNew />
          </a>
          <a className="lg:text-3xl text-white" href="#slide3">
            <MdOutlineArrowForwardIos />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="w-full h-full absolute">
          <div className="h-full flex justify-center items-center">
            <div className="text-center text-white">
              <h1 className="text-xl lg:text-6xl font-bold mb-5">
                Discover the Future of Tech at <span className="text-sky-500">Tech</span> Shop
              </h1>
              <p className="text-sm lg:text-xl font-medium">
                Discover the latest and greatest in tech products and services.
              </p>
              <button className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white mx-auto mt-9 lg:mt-10 px-3 lg:px-5 py-2 lg:py-3 rounded-lg lg:text-xl font-semibold gap-2">
                Shop Now
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a className="lg:text-3xl text-white" href="#slide2">
            <MdOutlineArrowBackIosNew />
          </a>
          <a className="lg:text-3xl text-white" href="#slide1">
            <MdOutlineArrowForwardIos />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
