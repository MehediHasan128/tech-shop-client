import { useLoaderData } from "react-router-dom";


const BrandProducts = () => {

    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <h1>This is brand product section</h1>
        </div>
    );
};

export default BrandProducts;