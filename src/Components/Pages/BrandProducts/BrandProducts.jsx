import { useLoaderData } from "react-router-dom";
import DisplayBrandProduct from "./DisplayBrandProduct/DisplayBrandProduct";

const BrandProducts = () => {
  const products = useLoaderData();

  return (
    <div>
      <div className="flex justify-center">
      <div className="carousel lg:w-[70%]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/D4Gt7cG/Upcoming-Products-2022-Feature.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/cxcDRp2/financing-products-og-202006.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.prestigeonline.com/wp-content/uploads/sites/8/2022/12/29152503/iphone-14-pro-model-select-202209-6-1inch_av1-scaled-1.jpeg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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

      <div className="mt-10 lg:mt-20">
        <div className="text-center">
            <h1 className="text-xl lg:text-3xl font-bold">Similer Products</h1>
            <p className="border-2 mt-3 w-16 mx-auto border-sky-400"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {
                products.map(product => <DisplayBrandProduct key={product._id} product={product} />)
            }
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
