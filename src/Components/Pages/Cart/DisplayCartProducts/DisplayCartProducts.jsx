import { PropTypes } from "prop-types";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const DisplayCartProducts = ({ product, handelDelete }) => {
  const { _id, image, name, brandName, price, categorie } = product;

  return (
    <div>
      <div className="relative flex flex-col w-[90%] lg:w-full mx-auto lg:h-72 max-w-[48rem] lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
          <TransformWrapper>
            <TransformComponent>
                  <img
                    src={image}
                    alt="image"
                    className="object-cover w-full lg:h-full rounded-r-lg lg:rounded-r-none"
                  />
            </TransformComponent>
          </TransformWrapper>
        </div>
        <div className="p-6">
          <div className="flex justify-between">
            <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
              {brandName}
            </h6>
            <div className="text-2xl flex gap-5 text-pink-500">
              <Link to={`/updateProduct/${_id}`}>
                <MdEdit className="cursor-pointer" />
              </Link>
              <MdDelete
                onClick={() => handelDelete(_id)}
                className="cursor-pointer"
              />
            </div>
          </div>
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {name}
          </h4>
          <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </p>
          <div className="flex gap-5">
            <div className="text-lg font-medium border-2 w-fit px-3 rounded-lg border-pink-500 text-pink-500">
              <h1>${price}</h1>
            </div>
            <div className="text-lg font-medium border-2 w-fit px-3 rounded-lg border-pink-500 text-pink-500">
              <h1>{categorie}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DisplayCartProducts.propTypes = {
  product: PropTypes.object,
  handelDelete: PropTypes.function,
};

export default DisplayCartProducts;
