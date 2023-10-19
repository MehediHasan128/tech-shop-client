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
            src="https://i.ytimg.com/vi/_ph7TzyW318/maxresdefault.jpg"
            className="w-full rounded-md"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-2xl">
              ❮
            </a>
            <a href="#slide2" className="text-2xl">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apple-news-lead-1666107951.jpg"
            className="w-full rounded-md"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-2xl">
              ❮
            </a>
            <a href="#slide3" className="text-2xl">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.pcmag.com/imagery/reviews/03SBVB3dvq5wKhOWeatb9Ad-17..v1618346354.jpg"
            className="w-full rounded-md"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-2xl">
              ❮
            </a>
            <a href="#slide1" className="text-2xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                products.map(product => <DisplayBrandProduct key={product._id} product={product} />)
            }
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
