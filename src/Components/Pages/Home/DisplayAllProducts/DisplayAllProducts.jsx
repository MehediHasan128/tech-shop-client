import { PropTypes } from "prop-types";


const DisplayAllProducts = ({product}) => {

    const {image, name, price} = product

    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
  <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
    <img
      src={image}
      className="object-cover w-full h-full hover:scale-150 duration-700"
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
  </div>
</div>
    );
};

DisplayAllProducts.propTypes = {
    product: PropTypes.object
}

export default DisplayAllProducts;