import { useLoaderData } from "react-router";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaEye } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

const Users = () => {
    const loaderUsers = useLoaderData();
    const [users, setUsers] = useState(loaderUsers);
    const { deleteUserFB } = useContext(AuthContext);

    const handleDeleteUser = (id) => {
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

                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingUser = users.filter(user => user._id !== id);

                            setUsers(remainingUser)
                            // user deleted from fb
                            deleteUserFB()
                                .then(() => {
                                    console.log('user deleted')
                                })
                                .catch(error => {
                                    console.log(error)
                                })
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-11/12 mx-auto">
                <h1>Users {users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    No
                                </th>
                                <th>Name</th>
                                <th>Phone Number</th>
                                <th>Email Address</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">{user.address}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.phone}
                                    </td>
                                    <td>{user.email}</td>
                                    <th className="space-x-2">
                                        <button className="btn btn-md"><FaEye /></button>

                                        <button className="btn btn-md"><FaEdit /></button>

                                        <button onClick={() => handleDeleteUser(user._id)} className="btn btn-md"><MdDelete /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Users;