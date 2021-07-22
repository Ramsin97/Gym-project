import React, { Component } from 'react'
import "./Contactus.css";
import {
    Container, Row,
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export class C2 extends Component {
    render() {
        return (
            <div style={{marginBottom:"100px"}}>

                <Container className="pt-5">
                    <Row>

                        <Col sm="12" md="6" lg="6" xl="3">

                            <div className="p-2">
                                <Card className="contact-cards fb-card p-3">
                                    <div className="crd-flex">
                                        <CardBody>
                                            <CardTitle tag="h5">You can visit us on <b>FaceBook</b></CardTitle>
                                        </CardBody>
                                        <i class="fab fa-facebook-f fa-3x p-3"></i>
                                    </div>
                                    <a href="https://www.facebook.com/Masters-Gym-1388388364791194" target="_blank"><Button className="p-2 m-3 fb-btn">Visit us</Button></a>
                                </Card>
                            </div>

                        </Col>


                        <Col sm="12" md="6" lg="6" xl="3">

                            <div className="p-2">
                                <Card className="contact-cards snap-card p-3">
                                    <div className="crd-flex">
                                        <CardBody>
                                            <CardTitle tag="h5">You can visit us on <b>Snapchat</b></CardTitle>
                                        </CardBody>
                                        
                                        <i class="fab fa-snapchat-ghost fa-3x p-3"></i>
                                    </div>
                                    <a href="https://www.snapchat.com/" target="_blank"><Button className="p-2 m-3 snap-btn">Visit us</Button></a>
                                </Card>
                            </div>

                        </Col>


                        <Col sm="12" md="6" lg="6" xl="3">

                            <div className="p-2">
                                <Card className="contact-cards insta-card p-3">
                                    <div className="crd-flex">
                                        <CardBody>
                                            <CardTitle tag="h5">You can visit us on <b>Instagram</b></CardTitle>
                                        </CardBody>
                                        <i class="fab fa-instagram fa-3x p-3"></i>
                                    </div>
                                    <a href="https://www.instagram.com/masters_gym22/" target="_blank"><Button className="p-2 m-3 insta-btn">Visit us</Button></a>
                                </Card>
                            </div>

                        </Col>


                        <Col sm="12" md="6" lg="6" xl="3">

                            <div className="p-2">
                                <Card className="contact-cards whats-card p-3">
                                    <div className="crd-flex">
                                        <CardBody>
                                            <CardTitle tag="h5">You can visit us on <b>Whatsapp</b></CardTitle>
                                        </CardBody>
                                        <i class="fab fa-whatsapp fa-3x p-3"></i>
                                    </div>
                                    <a href="https://www.instagram.com/masters_gym22/" target="_blank"><Button className="p-2 m-3 whats-btn">Visit us</Button></a>
                                </Card>
                            </div>

                        </Col>


                    </Row>
                </Container>


            </div>
        )
    }
}

export default C2
