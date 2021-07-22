import React, { Component } from 'react'
import "./Header.css";
import header1 from "../mastersgymimages/img1.jpg";
import header2 from "../mastersgymimages/header2.jpg";
import header3 from "../mastersgymimages/header3.jpg";
import header4 from "../mastersgymimages/header4.jpg";
import header5 from "../mastersgymimages/header5.jpg";
import header6 from "../mastersgymimages/header6.jpg";
import navBrand from "../mastersgymimages/logo1.png"
import { Container, Row, Col } from "reactstrap";

export class Header extends Component {
    render() {

        return (
            <div className="Header">

                <Container fluid>
                    <Row>

                        <Col lg="12" md="12" sm="12" className="p-0">

                            <div
                                id="carouselBasicExample"
                                className="carousel slide carousel-fade"
                                data-mdb-ride="carousel"
                            >
                                {/* indicators btns  */}
                                <div className="carousel-indicators">
                                    <button
                                        type="button"
                                        data-mdb-target="#carouselBasicExample"
                                        data-mdb-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                    ></button>
                                    <button
                                        type="button"
                                        data-mdb-target="#carouselBasicExample"
                                        data-mdb-slide-to="1"
                                        aria-label="Slide 2"
                                    ></button>
                                    <button
                                        type="button"
                                        data-mdb-target="#carouselBasicExample"
                                        data-mdb-slide-to="2"
                                        aria-label="Slide 3"
                                    ></button>
                                    <button
                                        type="button"
                                        data-mdb-target="#carouselBasicExample"
                                        data-mdb-slide-to="3"
                                        aria-label="Slide 4"
                                    ></button>
                                    <button
                                        type="button"
                                        data-mdb-target="#carouselBasicExample"
                                        data-mdb-slide-to="4"
                                        aria-label="Slide 5"
                                    ></button>
                                    <button
                                        type="button"
                                        data-mdb-target="#carouselBasicExample"
                                        data-mdb-slide-to="5"
                                        aria-label="Slide 6"
                                    ></button>
                                </div>

                                {/* images of slide show  */}
                                <div className="carousel-inner" style={{ height: "600px" }}>

                                    {/* image 1  */}
                                    <div className="carousel-item active">
                                        
                                        <img
                                            src={header1}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                        <div className="carousel-caption d-none d-md-block">

                                            <img src={navBrand} className="img-fluid" style={{width:"310px", height:"220px",display:"block",margin:"auto",padding:"15px"}}></img>

                                            <button className="header-btn" data-mdb-toggle="modal"
                                                data-mdb-target="#header-modal">WHY US</button>
                                        </div>
                                    </div>


                                    {/* image 2  */}
                                    <div className="carousel-item">
                                        
                                        <img
                                            src={header2}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>


                                    {/* image 3  */}
                                    <div className="carousel-item">
                                        
                                        <img
                                            src={header3}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>

                                    {/* image 4  */}
                                    <div className="carousel-item">
                                        
                                        <img
                                            src={header4}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>

                                    {/* image 5  */}
                                    <div className="carousel-item">
                                        
                                        <img
                                            src={header5}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>

                                    {/* image 6  */}
                                    <div className="carousel-item">
                                        
                                        <img
                                            src={header6}
                                            className="d-block w-100"
                                            alt="..."
                                        />
                                    </div>

                                </div>


                            </div>


                        </Col>


                    </Row>
                </Container>

                {/* modal of header  */}
                <div class="modal" tabindex="-1" id="header-modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" style={{ color: "var(--red)", fontWeight: "bold", margin: "auto" }}>Why MASTERS GYM ?</h5>
                            </div>
                            <div class="modal-body">
                                <p>A high-level gym that contains a common section for women and men, as well as a special section for women only with a private coach
                                Sponsored Workouts
                                (Captain Ahmed, the champion of Asia and Iraq)
                                (Captain Ricott, champion of Sweden and Iraq) and another group of professional trainers, the subscription price is 50$ only, plan and surprise Special offer for groups
                                The gym is open daily from 10 am to 12 midnight, at any time.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-mdb-dismiss="modal">
                                    Close
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Header
