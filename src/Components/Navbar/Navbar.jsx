import React from "react";
import "./Navbar.scss";

const Navbar = () => {
    return(
        <nav className="navbar_container">
            <div className="logo">
                <h2>AccoEdutech</h2>
            </div>
            <div className="links">
                <ul>
                    <li className="active">Home</li>
                    <li>Courses</li>
                    <li>For Bussiness</li>
                    <li>Company</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar