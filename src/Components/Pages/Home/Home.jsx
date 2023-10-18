import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import DisplayBrands from "./DisplayBrands/DisplayBrands";
import Marquee from "react-fast-marquee";

const Home = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() =>{
        fetch('brand.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])

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
                    {
                        brands.map(brand => <DisplayBrands key={brand.id} brand={brand} />)
                    }
                </div>
                </Marquee>
            </div>

            <div>
            <div className="my-10 lg:my-20 text-center text-xl lg:text-3xl font-semibold">
                <h1>All Products</h1>
                <p className="border-2 mt-3 w-16 mx-auto border-sky-400"></p>
                </div>
            </div>
        </div>
    );
};

export default Home;