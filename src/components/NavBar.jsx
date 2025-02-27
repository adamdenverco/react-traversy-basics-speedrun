import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/logo.png";

const navOptions = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Jobs", url: "/jobs" },
    { id: 4, name: "Add Job", url: "/add-job" },
];
// console.log(navOptions);

const defaultCss =
    "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

const linkClass = ({ isActive }) => {
    return isActive ? `bg-black ` + defaultCss : defaultCss;
};

const NavBar = () => {
    return (
        <nav className="bg-indigo-700 border-b border-indigo-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                        {/* <!-- Logo --> */}
                        <Link
                            className="flex flex-shrink-0 items-center mr-4"
                            to="/"
                        >
                            <img
                                className="h-10 w-auto"
                                src={logo}
                                alt="React Jobs"
                            />
                            <span className="hidden md:block text-white text-2xl font-bold ml-2">
                                React Jobs
                            </span>
                        </Link>
                        <div className="md:ml-auto">
                            <div className="flex space-x-2">
                                {navOptions.map((n) => {
                                    return (
                                        <NavLink
                                            key={n.id}
                                            to={n.url}
                                            className={linkClass}
                                        >
                                            {n.name}
                                        </NavLink>
                                    );
                                })}
                                {/* <NavLink to="/jobs" className={linkClass}>
                                    Jobs
                                </NavLink>
                                <NavLink to="/add-job" className={linkClass}>
                                    Add Job
                                </NavLink> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
