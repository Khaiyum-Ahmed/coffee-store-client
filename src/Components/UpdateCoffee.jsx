import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste,category,details, photo } = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(updatedCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Coffee successful',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleUpdateCoffee}>
                <fieldset className="fieldset max-w-11/12 mx-auto bg-[#F4F3F0] border-base-300 rounded-box border py-16 px-28">
                    <div>
                        <h1 className="rancho text-5xl text-center text-[#374151] mb-8 ">Update Coffee {name}</h1>
                    </div>

                    <div className="md:flex gap-5 space-y-3">
                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Name</label>
                            <input type="text"
                                name="name"
                                defaultValue={name}
                                className="input w-full" placeholder="Enter coffee name" />
                        </div>

                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Chef</label>
                            <input type="text"
                                name="chef"
                                defaultValue={chef}
                                className="input w-full" placeholder="Enter coffee chef" /></div>
                    </div>
                    <div className="md:flex gap-5 space-y-3">
                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Supplier</label>
                            <input type="text"
                                name="supplier"
                                defaultValue={supplier}
                                className="input w-full" placeholder="Enter coffee supplier" />
                        </div>

                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Taste</label>
                            <input type="text"
                                name="taste"
                                defaultValue={taste}
                                className="input w-full" placeholder="Enter coffee taste" /></div>
                    </div>
                    <div className="md:flex gap-5 space-y-3">
                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Category</label>
                            <input type="text"
                                name="category"
                                defaultValue={category}
                                className="input w-full" placeholder="Enter coffee category" />
                        </div>

                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Details</label>
                            <input type="text"
                                name="details"
                                defaultValue={details}
                                className="input w-full" placeholder="Enter coffee details" /></div>
                    </div>
                    <div className="w-full mb-3">
                        <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Photo</label>
                        <input type="text"
                            name="photo"
                            defaultValue={photo}
                            className="input w-full" placeholder="Enter photo URL" /></div>
                    <input type="submit" className="border border-[#331A15] bg-[#D2B48C] text-2xl text-[#331A15] py-3 w-full font-black rounded-md cursor-pointer" value="Update Coffee" />
                </fieldset>

            </form>
        </div>
    );
};

export default UpdateCoffee;