import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import DisplayBrands from "./DisplayBrands/DisplayBrands";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import DisplayAllProducts from "./DisplayAllProducts/DisplayAllProducts";

const Home = () => {
    const products = useLoaderData();
  const [brands, setBrands] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("brand.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div>
      <Banner />

      <div>
        <div className="my-10 lg:my-20 text-center text-xl lg:text-3xl font-semibold">
          <h1>All Brands</h1>
          <p className="border-2 mt-3 w-16 mx-auto border-sky-400"></p>
        </div>

        <Marquee pauseOnHover speed={30}>
          <div className="flex justify-center items-center gap-10 lg:gap-36">
            {brands.map((brand) => (
              <DisplayBrands key={brand.id} brand={brand} />
            ))}
          </div>
        </Marquee>
      </div>

      <div className="py-20">
        <div className="my-10 lg:my-20 text-center font-semibold">
          <h1 className="text-xl lg:text-3xl mb-3">All Products</h1>
          <p className="text-gray-500">Explore Our Latest Tech Products Today!</p>
          <p className="border-2 mt-3 w-16 mx-auto border-sky-400"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 px-5 lg:px-0">
                {
                    (products.length > 8 && showAll)?
                    products.map(product => <DisplayAllProducts key={product._id} product={product} />) :
                    products.slice(0, 8).map(product => <DisplayAllProducts key={product._id} product={product} />)
                }
        </div>

                <div className="flex justify-center">
                {
                    (products.length > 8 && showAll)?
                    <button onClick={() => setShowAll(!showAll)} className="my-10 bg-slate-400 px-5 py-3 rounded-md text-lg font-medium">Show Less</button> :
                    <button onClick={() => setShowAll(!showAll)} className="my-10 bg-slate-400 px-5 py-3 rounded-md text-lg font-medium">Show All</button>
                }
                </div>

      </div>
    </div>
  );
};

export default Home;
