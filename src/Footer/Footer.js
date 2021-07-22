import React, { Component } from 'react'
import "./Footer.css"
import footerbrand from "../mastersgymimages/logo1.png"
import { Link, NavLink } from "react-router-dom";

export class Footer extends Component {
    render() {
        return (

            <div>

                <footer className="text-center text-lg-start">

                    <section >
                        <div className="container text-center text-md-start mt-5">

                            <div className="row mt-3">

                                <div className="col-md-12 col-lg-12 col-xl-3 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold pt-1">
                                        <img src={footerbrand} className="pr-3 footer-logo" />MASTERS GYM
                                    </h6>
                                    <p>
                                        one of the best gyms in the city of Erbil in the Kurdistan region of Iraq. We have the best and most efficient global and international trainers and the best American and Italian equipment that will lead you to your goal of having a perfect body and a healthy lifestyle
                                    </p>
                                </div>



                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4 pt-3">
                                        Useful links
                                    </h6>
                                    <p>
                                        <Link to="/" className="text-reset footer-link">Home</Link>
                                    </p>
                                    <p>
                                        <Link to="/Staff" className="text-reset footer-link">Staff</Link>
                                    </p>
                                    <p>
                                        <Link to="/Packages" className="text-reset footer-link">Packages</Link>
                                    </p>
                                    <p>
                                        <Link to="/Cafeteria" className="text-reset footer-link">Store</Link>
                                    </p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4 pt-3">
                                        social media
                                    </h6>
                                    <p className="s1">
                                        <i class="fab fa-facebook-square pr-3"></i>Masters Gym
                                    </p>
                                    <p className="s2">
                                        <i class="fab fa-snapchat-square pr-3"></i>Master.gym22
                                    </p>
                                    <p className="s3">
                                        <i class="fab fa-instagram-square  pr-3"></i>Masters.gum22
                                    </p>
                                    <p className="s4">
                                        <i class="fab fa-whatsapp-square pr-3"></i>+9647506004664
                                    </p>
                                </div>

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                    <h6 className="text-uppercase fw-bold mb-4 pt-3">
                                        Contact
                                                </h6>
                                    <p><i class="fas fa-map-marker-alt pr-3"></i>Iraq-Kurdistan-Erbil-Ainkawa/108-Ainkawa mall</p>
                                    <p>
                                        <i className="fas fa-envelope me-3"></i>
                                                Masters.gym22@gmail.com
                                                </p>
                                    <p><i className="fas fa-phone me-3"></i>+9647506004664</p>

                                </div>

                            </div>

                        </div>
                    </section>

                    <div className="text-center p-4" style={{ backgroundColor: "rgb(0, 0, 0, 0.05)" }}>
                        © 2021 Copyright: <b>RamsinYaro</b>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Footer
