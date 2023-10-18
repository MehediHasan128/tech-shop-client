import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";


const DisplayBrands = ({brand}) => {

    const {brand_Name, brand_Image} = brand;

    return (
        <Link to={`/products/${brand_Name}`} className="cursor-pointer flex flex-col">
            <img className="w-20 lg:w-24" src={brand_Image} alt="" />
            <h1 className="text-center mt-3 text-2xl font-semibold">{brand_Name}</h1>
        </Link>
    );
};

DisplayBrands.propTypes = {
    brand: PropTypes.object
}

export default DisplayBrands;