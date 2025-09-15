import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
    const { signUp } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        const name = formData.get('name');
        const address = formData.get('address');
        const phone = formData.get('phone');
        const photo = formData.get('photo');



        // create user 
        signUp(email, password)
            .then(result => {
                console.log(result.user);

                const userProfile = { email, name, address, phone, photo, creationTime: result.user?.metadata?.creationTime, lastSignInTime: result.user?.metadata?.lastSignInTime }
                console.log(email, password, userProfile)

                // save profile info in the DB
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your Account has been created!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            form.reset();
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero bg-base-200 py-20">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div>
                            <h1 className="text-center font-bold text-3xl py-8">Create your Account</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSignUp}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name="name" className="input" placeholder="Name" />

                                    <label className="label">Address</label>
                                    <input type="text" name="address" className="input" placeholder="Address" />

                                    <label className="label">Phone Number</label>
                                    <input type="text" name="phone" className="input" placeholder="Phone Number" />

                                    <label className="label">Photo URL</label>
                                    <input type="text" name="photo" className="input" placeholder="PhotoURL" />

                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" />

                                    <label className="label">Password</label>
                                    <input type="password" className="input" name="password" placeholder="Password" />
                                    
                                    <button className="btn btn-neutral mt-4">SignUp</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;