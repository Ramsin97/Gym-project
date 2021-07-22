import React, { Component } from 'react'
import "./Navbar.css"
import navBrand from "../mastersgymimages/logo1.png"
import { Link, NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";

export class Navbar extends Component {
    render() {

        window.addEventListener("scroll", function () {
            var nav = document.querySelector("nav");
            nav.classList.toggle("sticky", window.scrollY > 0);
        
        });
        return (

            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-light">

                    <Link className="navbar-brand ml-5" to="/"><img src={navBrand} className="img-fluid"></img></Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ml-auto mr-5">

                            <li className="nav-item">
                                <Link className="nav-link" to="/"><i class="fas fa-home pr-2"></i>Home</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Staff"><i class="fas fa-restroom pr-2"></i>staff</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Cafeteria"><i class="fas fa-shopping-cart pr-2"></i>store</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Packages"><i class="fas fa-dollar-sign pr-2"></i>packages</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Contactus"><i class="fas fa-people-arrows pr-2"></i>contact us</NavLink>
                            </li>
                            <li className="nav-item">
                                <DarkMode/>
                            </li>


                        </ul>

                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
