import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link><br/>
            <Link to="/About">About Me</Link><br/>
            <Link to="/Portfolio">Portfolio</Link>
        </div>
    );
};

export default Navbar;

