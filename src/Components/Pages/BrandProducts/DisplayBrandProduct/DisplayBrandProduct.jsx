import { PropTypes } from "prop-types";
import { BsFillStarFill } from 'react-icons/bs';


const DisplayBrandProduct = ({product}) => {

    const {_id, name, brandName, categorie, price, ratings, image, description} = product;

    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={image}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-2">
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        {name}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        ${price}.00
      </p>
    </div>

    <div className="flex justify-between my-5">
    <div>
    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Category: {categorie}
      </p>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        Brand: {brandName}
      </p>
    </div>
    <div>
    <p className="flex items-center gap-2 font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
        <BsFillStarFill className="text-yellow-400" />
        {ratings}
      </p>
    </div>
    </div>

    {
        description.length > 150 ? <>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 text-justify">
      {description.slice(0, 150)}
    </p>
        </>
    :
    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 text-justify">
      {description}
    </p>
    }
  </div>
  <div className="p-6 pt-0">
    <button
      className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      Details
    </button>
  </div>
</div>
    );
};

DisplayBrandProduct.propTypes = {
    product: PropTypes.object
}

export default DisplayBrandProduct;