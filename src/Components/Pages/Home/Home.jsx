import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import DisplayBrands from "./DisplayBrands/DisplayBrands";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import DisplayAllProducts from "./DisplayAllProducts/DisplayAllProducts";
import EmailVerificationBanner from "../EmailVerificationBanner/EmailVerificationBanner";
import OurSupport from "./OurSupport/OurSupport";
import OurServices from "./OurServices/OurServices";

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
        <div className="my-10 lg:my-20 text-center font-semibold px-4 md:px-16 lg:px-0">
          <h1 className="text-xl lg:text-3xl">All Brands</h1>
          <p className="border-2 my-3 w-16 mx-auto border-sky-400"></p>
          <p className="text-gray-500">Discover the best in tech from a diverse array of top brands at our online tech shop. We offer a curated selection of products from renowned <br /> names in the industry, ensuring you have access to the latest innovations and quality you can trust.</p>
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
          <p className="border-2 my-3 w-16 mx-auto border-sky-400"></p>
          <p className="text-gray-500">Explore Our Latest Tech Products Today!</p>
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
                    <button onClick={() => setShowAll(!showAll)} className="my-10 bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 rounded-md text-lg font-medium text-white">Show Less</button> :
                    <button onClick={() => setShowAll(!showAll)} className="my-10 bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-3 rounded-md text-lg font-medium text-white">Show All</button>
                }
                </div>

      </div>

      <div>
        <EmailVerificationBanner />
      </div>

      <div className="my-20">
      <div className="my-10 lg:my-20 text-center font-semibold">
          <h1 className="text-xl lg:text-3xl mb-3">Our Services</h1>
          <p className="border-2 my-3 w-16 mx-auto border-sky-400"></p>
          <p className="text-gray-500">Explore Our Latest Tech Products Today!</p>
        </div>
        <OurServices />
      </div>

      <div>
      <div className="my-10 lg:my-20 text-center font-semibold px-5 lg:px-0">
          <h1 className="text-xl lg:text-3xl mb-3">Our Support</h1>
          <p className="border-2 my-3 w-16 mx-auto border-sky-400"></p>
          <p className="text-gray-500">Need help or have questions? Our support team is here for you. Contact us anytime, and <br /> we will assist you promptly with any tech-related inquiries or issues.</p>
        </div>

        <div className="mb-36">
          <OurSupport />
        </div>

      </div>
    </div>
  );
};

export default Home;
