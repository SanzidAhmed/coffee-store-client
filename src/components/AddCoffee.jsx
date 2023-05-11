import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const quantity = form.quantity.value;
        const coffeeName = form.coffeeName.value;
        const supplierName = form.supplierName.value;
        const taste = form.taste.value;
        const categoryName = form.categoryName.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newProduct = {coffeeName, quantity, supplierName, taste, categoryName, details, photo};
        console.log(newProduct);

        fetch('http://localhost:5200/coffee',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: 'Success',
                text: 'product added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            form.reset();
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-32">
            <h1 className="text-center font-extrabold text-3xl mb-14">Added some coffee</h1>
            <form onSubmit={handleAddCoffee} className=" ">
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium ">Coffee Name</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Coffee name" name="coffeeName" className="input input-bordered rounded-lg w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Quantity</span>
                        </label>
                        <label className="">
                            <input type="number" placeholder="Quantity" name="quantity" className="input input-bordered rounded-lg w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium ">Supplier Name</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Supplier name" name="supplierName" className="input input-bordered rounded-lg w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Taste</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered rounded-lg w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium ">Category Name</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Category name" name="categoryName" className="input input-bordered rounded-lg w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Details</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Coffee details" name="details" className="input input-bordered rounded-lg w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex gap-5 mb-10">
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Photo URL</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Entire photo url" name="photo" className="input input-bordered rounded-lg w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="add coffee"  className="btn btn-block bg-[#D2B48C]" />
            </form>
        </div>
    );
};

export default AddCoffee;