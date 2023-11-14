import React from "react";


const Navbar = () => {
    return (
        <>
            <nav className="flex justify-between">
                <div>Hamburger</div>
                <div className="hidden sm:block">Get The App</div>
                <ul className="hidden sm:flex">
                    <li>Investor Relation</li>
                    <li>Add Restaurant</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </nav>
        </>
    )
}


export default Navbar