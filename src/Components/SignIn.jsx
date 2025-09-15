import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginData = { email, password }
        console.log(loginData);

        // user Sign In
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                const signInInfo = {
                    email, 
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                }
                fetch('http://localhost:5000/users',{
                    method: 'PATCH',
                    headers:{
                        "content-type":"application/json"
                    },
                    body: JSON.stringify(signInInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log("after update patch",data)
                })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You Have Successfully Log In",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero py-20">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="py-8 text-center text-3xl font-bold">Log in Form</h1>
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;