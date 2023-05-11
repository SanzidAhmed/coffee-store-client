import { EyeIcon, PencilIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, photo, coffeeName, quantity, categoryName } = coffee;


    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5200/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const reamaing = coffees.filter(coffee => coffee._id !== _id);
                            setCoffees(reamaing);
                        }
                        
                    })
            }
        })
    }
    return (
        <div>
            <div className="card card-side bg-[#F5F4F1] border border-purple-600 p-8">
                <figure><img src={photo} alt="Movie" className="h-60 w-48" /></figure>
                <div className="flex justify-between w-full items-center p-8">
                    <div>
                        <h2 className="card-title">{coffeeName}</h2>
                        <p><span className=" font-medium">Quantity:</span> {quantity}</p>
                        <p><span className=" font-medium mt-0">Category Name:</span> {categoryName}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <button className="btn btn-square bg-[#D2B48C]">
                            <EyeIcon className="h-6 w-6 text-white" />
                        </button>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-square">
                                <PencilIcon className="h-6 w-6 text-white" />
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-square bg-red-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;