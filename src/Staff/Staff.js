import React, { Component } from 'react';
import "./Staff.css"
import axios from 'axios';
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export class Staff extends Component {

    // empty state 
    state = {
        staff: []
    }

    componentDidMount() {

        axios.get("MYJSON/Staff.json")
            .then(res => {
                this.setState({
                    staff: res.data.staff
                })

            })

    }

    render() {

        const styled = {
            color: "var(--red)",
            fontWeight: "bold"
        }

        const { staff } = this.state;
        const allStaff = staff.map((item) => {
            return (

                <Col sm="12" md="6" lg="6" xl="6">

                    <div>
                        <Card className=" m-5 text-center">
                            <CardImg top width="100%" src={item.image} alt="Card image cap" style={{ height: "500px" }} />
                            <CardBody>
                                <CardTitle tag="h5" style={styled}>{item.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2">{item.job}</CardSubtitle>
                                <CardText style={{ color: "#000", fontWeight: "bold" }}>{item.country}</CardText>
                            </CardBody>
                        </Card>
                    </div>

                </Col>


            );
        })

        return (
            <div className="staff">

                <h1 className="m-auto pt-5 text-center" style={{ fontWeight: "bold" }}>Staff of <span style={{color:"red"}}>Masters Gym</span></h1>
                <hr/>
                <Container>
                    <Row>
                        {allStaff}
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Staff
