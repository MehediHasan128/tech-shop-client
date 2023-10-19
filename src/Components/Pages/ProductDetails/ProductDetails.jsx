import { useLoaderData } from "react-router-dom";
import { BsFillStarFill } from 'react-icons/bs';
import Swal from "sweetalert2";

const ProductDetails = () => {

    const product = useLoaderData();
    
    const {name, brandName, categorie, price, ratings, image, description} = product;

    const cartProduct = {name, brandName, categorie, price, ratings, image, description}
    console.log(cartProduct);

    const handelAddToCart = () =>{
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
              Swal.fire({
                icon: 'success',
                title: 'Product Add to Cart',
                showConfirmButton: false,
                timer: 1500
              })
            }
        })
    }

    return (
        <div className="hero">
  <div className="hero-content flex-col lg:flex-row lg:gap-20">
    <img src={image} className="lg:w-[650px] rounded-lg shadow-2xl" />
    <div>
      <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <div className="mt-10 flex justify-between">
      <h2 className="text-3xl font-bold text-red-600">${price}</h2>
      <p className="flex items-center gap-3 text-xl">
        <BsFillStarFill className="text-yellow-500" />
        {ratings}
      </p>
      </div>
      </div>
      <hr className="my-5" />

    
      <p className="text-lg font-medium mb-2">Category: {categorie}</p>
      <p className="text-lg font-medium">Brand: {brandName}</p>
      <p className="py-6">{description}</p>
      <button onClick={handelAddToCart} className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-lg text-white font-medium">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default ProductDetails;