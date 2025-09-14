import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to="/addCoffee"><li>AddCoffee</li></Link>
                        <Link to="/updateCoffee"><li>UpdateCoffee</li></Link>
                        <Link to="/signin"><li>Signin</li></Link>
                        <Link to="/signup"><li>Signup</li></Link>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Coffee_Store</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-3 font-medium">
                    <Link to="/addCoffee"><li>Add Coffee</li></Link>
                    <Link to="/updateCoffee"><li>Update Coffee</li></Link>
                    <Link to="/signin"><li>Sign-In</li></Link>
                    <Link to="/signup"><li>Sign-Up</li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">LogIn</a>
            </div>
        </div>
    );
};

export default Navbar;