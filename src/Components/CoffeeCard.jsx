import { FaEdit, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const CoffeeCard = ({ coffee }) => {
    const { name, chef, supplier, taste, category, details, photo } = coffee
    return (
        <div className="card card-side bg-base-100 shadow-sm">
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
                        <button className="btn rounded-md text-xl text-white bg-[#3C393B]"><FaEdit /></button>
                        <button className="btn rounded-md text-xl text-white bg-[#EA4744]"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;