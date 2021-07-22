import React, { Component } from 'react'
import "./Contactus.css";

export class C1 extends Component {
    render() {
        return (
            <div>

                <h1 className="p-5 text-center mt-5"><i className="fas fa-map-marker-alt pr-4"></i>Visit <span style={{color:"red"}}>Masters Gym</span> in Ainkawa mall now ! <br/>  We are open daily from 10 am to 12 midnight</h1>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3217.913092166191!2d43.98773101512798!3d36.24160508006753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40071f3073a83df7%3A0x976dfcfb8e4a421a!2sAnkawa%20Mall!5e0!3m2!1sen!2siq!4v1622822168780!5m2!1sen!2siq" width="100%" height="700" style={{ border: "0", margin: "1px auto", display: "block", textAlign: "center" }} allowfullscreen="" loading="lazy" className="pt-5 pb-5 myMap"></iframe>

            </div>
        )
    }
}

export default C1
