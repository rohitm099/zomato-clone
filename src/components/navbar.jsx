import React from "react";
import { FiAlignJustify } from "react-icons/fi"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-between container">
            <div className="block sm:hidden">
                <FiAlignJustify size={30} color="green" />
            </div>
            <div className="hidden sm:block">Get App</div>
            <ul className="hidden sm:flex gap-2">
                <li><Link to="/">Investor Relation</Link></li>
                <li><Link to="/">Add Restaurant</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Signup</Link></li>
            </ul>
        </nav>
    );
};


export default Navbar

