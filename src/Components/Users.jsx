import { useLoaderData } from "react-router";
import Navbar from "./Navbar";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaEye } from "react-icons/fa";

const Users = () => {
    const loaderUsers = useLoaderData();
    const [users, setUsers] =  useState(loaderUsers)

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
                            users.map((user, index) =>  <tr key={user._id}>
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

                                    <button className="btn btn-md"><MdDelete /></button>
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