import Navbar from "./Navbar";

const SignUp = () => {
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
                            <form>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />
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