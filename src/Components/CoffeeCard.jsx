import { FaEdit, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, coffees, setCoffees, reFetch }) => {
    const { _id, name, chef, supplier, taste, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remainData = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainData);
                reFetch.revalidate()

                        }
                    })

            }
        });
    }
    return (
        <div className="card card-side bg-[#F5F4F1] rounded-xl shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between items-center w-full pr-4">
                <div> <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {chef}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p></div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                        <button className="btn text-xl text-white rounded-md bg-[#D2B48C]"><FaRegEye /></button>
                        <Link to={`updateCoffee/${_id}`}>
                            <button className="btn rounded-md text-xl text-white bg-[#3C393B]"><FaEdit /></button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn rounded-md text-xl text-white bg-[#EA4744]"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;