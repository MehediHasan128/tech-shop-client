import Swal from "sweetalert2";


const AddProduct = () => {

    const handeAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.productName.value;
        const brandName = form.brandName.value;
        const categorie = form.productType.value;
        const price = form.price.value;
        const ratings = form.productRatings.value;
        const image = form.photoUrl.value;
        const description = form.productDescription.value;  
        
        const product = {name, brandName, categorie, price, ratings, image, description}
        
        fetch('https://tech-shop-server-p8f7onnde-mehedihasan128.vercel.app/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire({
                    icon: 'success',
                    title: 'Product Successfully added',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        })
        form.reset();
    }

    return (
        <div className="flex justify-center items-center my-16">
            <div className="w-[80%] lg:px-20">

                <h1 className="text-center text-3xl font-semibold">Add a Tech Product</h1>

                <form className="mt-10 lg:mt-20" onSubmit={handeAddProduct}>
                    <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between">
                        <input className="w-full lg:w-[48%] px-5 py-3 border-2 rounded-md text-lg" type="text" name="productName" placeholder="Enter a product name" />
                        {/* <input className="w-full lg:w-[48%] px-5 py-3 border-2 rounded-md" type="text" name="brandName" placeholder="Enter brand name" /> */}

                        <select className="w-full lg:w-[48%] px-5 py-3 border-2 rounded-md text-lg" name="brandName">
                            <option value='' disabled selected>---Select Brand---</option>
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="One Plus">One Plus</option>
                            <option value="Google">Google</option>
                            <option value="Sony">Sony</option>
                            <option value="Dji">Dji</option>
                        </select>
                    </div>
                    <select className="block px-5 w-full my-5 border-2 py-3 rounded-md text-lg" name="productType">
                            <option value='' disabled selected>---Product Category---</option>
                            <option value="Phone">Phone</option>
                            <option value="Computer">Computer</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Head Phone">Head Phone</option>
                            <option value="Drone">Drone</option>
                            <option value="Smart Watch">Smart Watch</option>
                            <option value="Camera">Camera</option>
                            <option value="Gadgets">Gadgets</option>
                        </select>
                    <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between">
                        <input className="w-full lg:w-[48%] px-5 py-3 border-2 rounded-md text-lg" type="text" name="price" placeholder="Product Price" />
                        <input className="w-full lg:w-[48%] px-5 py-3 border-2 rounded-md text-lg" type="text" name="productRatings" placeholder="Product Rating" />
                    </div>

                    <input className="my-5 border-2 w-full px-5 py-3 rounded-md text-lg" type="url" name="photoUrl" placeholder="Product URL" />

                    <div>
                    <textarea className="w-full border-2 rounded-md px-5 py-3 text-lg" name="productDescription" placeholder="Write a short description" cols="30" rows="10"></textarea>
                    </div>

                    <input className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white mx-auto mt-9 lg:mt-10 px-3 lg:px-5 py-2 lg:py-3 rounded-lg lg:text-xl font-semibold gap-2 mb-20 lg:mb-0 cursor-pointer" type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;