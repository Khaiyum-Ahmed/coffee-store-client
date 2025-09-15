import Swal from 'sweetalert2'
import Navbar from './Navbar';
const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo };
        console.log(newCoffee);

        // send data to the server
        fetch('https://coffee-store-server-eight-eta.vercel.app/coffee', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Add Coffee added successful',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                }
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleAddCoffee}>
                <fieldset className="fieldset max-w-11/12 mx-auto bg-[#F4F3F0] border-base-300 rounded-box border py-16 px-28">
                    <div>
                        <h1 className="rancho text-5xl text-center text-[#374151] mb-8 ">Add New Coffee</h1>
                        <p className="text-[18px] text-[rgba(27,26,26,.7)] text-center mb-5">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>

                    <div className="md:flex gap-5 space-y-3">
                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Name</label>
                            <input type="text"
                                name="name"
                                className="input w-full" placeholder="Enter coffee name" />
                        </div>

                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Chef</label>
                            <input type="text"
                                name="chef"
                                className="input w-full" placeholder="Enter coffee chef" /></div>
                    </div>
                    <div className="md:flex gap-5 space-y-3">
                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Supplier</label>
                            <input type="text"
                                name="supplier"
                                className="input w-full" placeholder="Enter coffee supplier" />
                        </div>

                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Taste</label>
                            <input type="text"
                                name="taste"
                                className="input w-full" placeholder="Enter coffee taste" /></div>
                    </div>
                    <div className="md:flex gap-5 space-y-3">
                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Category</label>
                            <input type="text"
                                name="category"
                                className="input w-full" placeholder="Enter coffee category" />
                        </div>

                        <div className="w-full">
                            <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Details</label>
                            <input type="text"
                                name="details"
                                className="input w-full" placeholder="Enter coffee details" /></div>
                    </div>
                    <div className="w-full mb-3">
                        <label className="label text-[rgba(27,26,26,.8)] text-xl font-semibold">Photo</label>
                        <input type="text"
                            name="photo"
                            className="input w-full" placeholder="Enter photo URL" /></div>
                    <input type="submit" className="border border-[#331A15] bg-[#D2B48C] text-2xl text-[#331A15] py-3 w-full font-black rounded-md cursor-pointer" value="Add Coffee" />
                </fieldset>

            </form>
        </div>
    );
};

export default AddCoffee;