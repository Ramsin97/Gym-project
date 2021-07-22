import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";

export class Home3 extends Component {
    render() {

        return (
            <div style={{marginBottom:"150px"}}>



                <Container className="p-5">
                    <Row>

                        <Col md="4">
                            <div className="females-div">
                                <div className="females-inner text-center">
                                    <i className="fas fa-clock fa-5x p-4" style={{
                                        color: "#fe019a", border: "2px solid #fe019a",
                                        borderRadius: "50%"
                                    }}></i>
                                </div>
                                <p className="females-pargraph text-center p-3" style={{ color: "#fe019a" }}>The 30-minute full body workout burns up to 500 calories</p>
                            </div>

                        </Col>

                        <Col md="4">
                            <div className="females-div">
                                <div className="females-inner text-center">
                                    <i className="fas fa-dumbbell fa-5x p-4" style={{
                                        color: "#fe019a", border: "2px solid #fe019a",
                                        borderRadius: "50%"
                                    }}></i>
                                </div>
                                <p className="females-pargraph text-center p-3" style={{ color: "#fe019a" }}>A proven workout combining strength training, cardio and stretching</p>
                            </div>

                        </Col>

                        <Col md="4">
                            <div className="females-div">
                                <div className="females-inner text-center">
                                    <i className="fas fa-user fa-5x p-4" style={{
                                        color: "#fe019a", border: "2px solid #fe019a",
                                        borderRadius: "50%"
                                    }}></i>
                                </div>
                                <p className="females-pargraph text-center p-3" style={{ color: "#fe019a" }}>A Curves coach is there to train and motivate you during every workout</p>
                            </div>

                        </Col>

                    </Row>
                </Container>


            </div>
        )
    }
}

export default Home3
