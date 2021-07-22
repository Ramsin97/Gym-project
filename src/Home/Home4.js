import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
import f1 from "../mastersgymimages/f1.jpg";
import f2 from "../mastersgymimages/f2.jpg";
import f3 from "../mastersgymimages/f3.jpg";
import f4 from "../mastersgymimages/f4.jpg";
import f5 from "../mastersgymimages/f5.jpg";



export class Home4 extends Component {
    render() {
        return (
            <div style={{marginBottom:"150px"}}>
                <Container fluid className="p-5">
                    <Row>

                        <Col lg="12" md="12" sm="12" className="p-0">


                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">

                                    <div class="carousel-item active">
                                        
                                        <img class="d-block w-100" src={f1} alt="First slide" />
                                    </div>

                                    <div class="carousel-item">
                                   
                                        <img class="d-block w-100" src={f2} alt="Second slide" />

                                    </div>

                                    <div class="carousel-item">
                                        
                                        <img class="d-block w-100" src={f3} alt="Third slide" />

                                    </div>

                                    <div class="carousel-item">
                                      
                                        <img class="d-block w-100" src={f4} alt="Third slide" />

                                    </div>

                                    <div class="carousel-item">
                                        
                                        <img class="d-block w-100" src={f5} alt="Third slide" />

                                    </div>

                                </div>

                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <i class="fas fa-chevron-left fa-3x"></i>
                                </a>

                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <i class="fas fa-chevron-right fa-3x"></i>
                                </a>

                            </div>



                        </Col>


                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home4
