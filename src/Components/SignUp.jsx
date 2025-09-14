import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "../Context/AuthContext";

const SignUp = () => {
    const {signUp} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password')
        console.log({email,password});

        // create user 
        signUp(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
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
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" name="password" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">SignUP</button>
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