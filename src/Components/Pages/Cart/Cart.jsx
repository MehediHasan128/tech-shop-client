import { useLoaderData } from "react-router-dom";
import DisplayCartProducts from "./DisplayCartProducts/DisplayCartProducts";
import { useState } from "react";
import Swal from "sweetalert2";

const Cart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  const handelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tech-shop-server-q92m3tttj-mehedihasan128.vercel.app//cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingProducts = products.filter(
                (product) => product._id !== id
              );
              setProducts(remainingProducts);

              Swal.fire({
                icon: "success",
                title: "Product has been deleted.",
                showConfirmButton: false,
                timer: 1000,
              });
            }
          });
      }
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {products.map((product) => (
        <DisplayCartProducts
          key={product._id}
          product={product}
          handelDelete={handelDelete}
        />
      ))}
    </div>
  );
};

export default Cart;
