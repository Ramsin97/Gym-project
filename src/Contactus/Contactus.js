import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import C1 from './C1';
import C2 from './C2';
import "./Contactus.css";

export class Contactus extends Component {

    render() {



        return (
            <div className="contact">

                <C2 />

                <Container fluid>
                    <Row>

                        <Col sm="12" md="12" lg="12" xl="12" className="p-0">

                            <C1 />

                        </Col>


                    </Row>
                </Container>





            </div>
        )
    }
}

export default Contactus
