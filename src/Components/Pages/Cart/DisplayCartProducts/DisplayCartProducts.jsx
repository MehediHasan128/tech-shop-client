import { PropTypes } from 'prop-types';
import { MdEdit, MdDelete } from 'react-icons/md';

const DisplayCartProducts = ({product, handelDelete}) => {
    
    const {_id, image, name, brandName} = product;

    return (
        <div>
            <div className="relative flex flex-col w-full lg:h-72 max-w-[48rem] lg:flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
    <img
      src={image}
      alt="image"
      className="object-cover w-full h-full"
    />
  </div>
  <div className="p-6">
    <div className='flex justify-between'>
        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
      {brandName}
        </h6>
        <div className='text-2xl flex gap-5 text-pink-500'>
            <MdEdit className='cursor-pointer' />
            <MdDelete onClick={() => handelDelete(_id)} className='cursor-pointer' />
        </div>
    </div>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {name}
    </h4>
    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
      Like so many organizations these days, Autodesk is a company in
      transition. It was until recently a traditional boxed software company
      selling licenses. Yet its own business model disruption is only part of
      the story
    </p>
    <a className="inline-block" href="#">
      <button
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

DisplayCartProducts.propTypes = {
    product: PropTypes.object,
    handelDelete: PropTypes.function
}

export default DisplayCartProducts;