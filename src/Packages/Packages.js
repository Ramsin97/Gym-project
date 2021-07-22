import React, { Component } from 'react'
import "./Packages.css";
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from "reactstrap";

export class Packages extends Component {
    render() {


        const crd = {
            height: "auto",
            width: "300px",
            margin: "20px auto",
            transition: "all .5s ease-in-out"
        }


        


        return (
            <div className="Packages" style={{marginTop:"150px"}}>
                <Container fluid className="p-5 text-center m-auto">
                    <Row>

                        <Col sm="12" md="6" lg="6" xl="3">

                            <div className="text-center m-auto">
                                <Card className="text-center" style={crd}>
                                    <div className="card1-header">
                                        <div className="card1-circle">

                                            59<sup>$</sup>

                                        </div>
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5" className="card1-title">basic</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 ">30 Days</CardSubtitle>
                                        <CardText>This package allow you to join <span style={{ color: "red", fontWeight: "bold" }}>Masters Gym</span> for 1 month</CardText>
                                        <Button data-toggle="modal" data-target="#sign" className="card1-btn">JOIN</Button>
                                    </CardBody>
                                </Card>
                            </div>

                        </Col>

                        <Col sm="12" md="6" lg="6" xl="3">

                            <div>
                                <Card className="text-center" style={crd}>
                                    <div className="card2-header">
                                        <div className="card2-circle">

                                            179<sup>$</sup>

                                        </div>
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5" className="card2-title">bronz</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 ">90 Days</CardSubtitle>
                                        <CardText>This package allow you to join <span style={{ color: "red", fontWeight: "bold" }}>Masters Gym</span> for 3 month</CardText>
                                        <Button data-toggle="modal" data-target="#sign" className="card2-btn">JOIN</Button>
                                    </CardBody>
                                </Card>
                            </div>

                        </Col>

                        <Col sm="12" md="6" lg="6" xl="3">

                            <div>
                                <Card className="text-center" style={crd}>
                                    <div className="card3-header">
                                        <div className="card3-circle">

                                            299<sup>$</sup>

                                        </div>
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5" className="card3-title">silver</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 ">180 Days</CardSubtitle>
                                        <CardText>This package allow you to join <span style={{ color: "red", fontWeight: "bold" }}>Masters Gym</span> for 6 month</CardText>
                                        <Button data-toggle="modal" data-target="#sign" className="card3-btn">JOIN</Button>
                                    </CardBody>
                                </Card>
                            </div>

                        </Col>

                        <Col sm="12" md="6" lg="6" xl="3">

                            <div>
                                <Card className="text-center" style={crd}>
                                    <div className="card4-header">
                                        <div className="card4-circle">

                                            599<sup>$</sup>

                                        </div>
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5" className="card4-title">gold</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 ">365 Days</CardSubtitle>
                                        <CardText>This package allow you to join <span style={{ color: "red", fontWeight: "bold" }}>Masters Gym</span> for 1 year</CardText>
                                        <Button data-toggle="modal" data-target="#sign" className="card4-btn">JOIN</Button>
                                    </CardBody>
                                </Card>
                            </div>

                        </Col>

                    </Row>
                </Container>





                {/* modals  */}
                <div className="modal" tabindex="-1" role="dialog" id="sign">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{fontSize:"15px",color:"blue"}}>
                                    <span aria-hidden="true">cancel</span>
                                </button>

                            </div>
                            <div className="modal-body">

                                {/* <!-- Pills navs --> */}
                                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link log"
                                            id="tab-login"
                                            data-mdb-toggle="pill"
                                            href="#pills-login"
                                            role="tab"
                                            aria-controls="pills-login"
                                            aria-selected="true"
                                            
                                        >Login</a
                                        >
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a
                                            className="nav-link reg"
                                            id="tab-register"
                                            data-mdb-toggle="pill"
                                            href="#pills-register"
                                            role="tab"
                                            aria-controls="pills-register"
                                            aria-selected="false"
                                            
                                        >Register</a
                                        >
                                    </li>
                                </ul>
                                {/* <!-- Pills navs --> */}

                                {/* <!-- Pills content --> */}
                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-login"
                                        role="tabpanel"
                                        aria-labelledby="tab-login"
                                    >
                                        <form>
                                            <div className="text-center mb-3">
                                                <p>Sign in with:</p>
                                                <button type="button" className="btn btn-primary btn-floating mx-1 p-0">
                                                    <i className="fab fa-facebook-f p-0 m-0"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1 p-0">
                                                    <i className="fab fa-google"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1 p-0">
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1 p-0">
                                                    <i className="fab fa-github"></i>
                                                </button>
                                            </div>

                                            <p className="text-center">or:</p>

                                            {/* <!-- Email input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="email" id="loginName" className="form-control" />
                                                <label className="form-label" for="loginName">Email or username</label>
                                            </div>

                                            {/* <!-- Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="password" id="loginPassword" className="form-control" />
                                                <label className="form-label" for="loginPassword">Password</label>
                                            </div>

                                            {/* <!-- 2 column grid layout --> */}
                                            <div className="row mb-4">
                                                <div className="col-md-6 d-flex justify-content-center">
                                                    {/* <!-- Checkbox --> */}
                                                    <div className="form-check mb-3 mb-md-0">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            id="loginCheck"
                                                            checked
                                                        />
                                                        <label className="form-check-label" for="loginCheck"> Remember me </label>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 d-flex justify-content-center">
                                                    {/* <!-- Simple link --> */}
                                                    <a href="#!">Forgot password?</a>
                                                </div>
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                                            {/* <!-- Register buttons --> */}
                                            <div className="text-center">
                                                <p>Not a member? <a href="#!">Register</a></p>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        className="tab-pane fade"
                                        id="pills-register"
                                        role="tabpanel"
                                        aria-labelledby="tab-register"
                                    >
                                        <form>
                                            <div className="text-center mb-3">
                                                <p>Sign up with:</p>
                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-google"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-twitter"></i>
                                                </button>

                                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                                    <i className="fab fa-github"></i>
                                                </button>
                                            </div>

                                            <p className="text-center">or:</p>

                                            {/* <!-- Name input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="text" id="registerName" className="form-control" />
                                                <label className="form-label" for="registerName">Name</label>
                                            </div>

                                            {/* <!-- Username input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="text" id="registerUsername" className="form-control" />
                                                <label className="form-label" for="registerUsername">Username</label>
                                            </div>

                                            {/* <!-- Email input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="email" id="registerEmail" className="form-control" />
                                                <label className="form-label" for="registerEmail">Email</label>
                                            </div>

                                            {/* <!-- Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="password" id="registerPassword" className="form-control" />
                                                <label className="form-label" for="registerPassword">Password</label>
                                            </div>

                                            {/* <!-- Repeat Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="password" id="registerRepeatPassword" className="form-control" />
                                                <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                                            </div>

                                            {/* <!-- Checkbox --> */}
                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="registerCheck"
                                                    checked
                                                    aria-describedby="registerCheckHelpText"
                                                />
                                                <label className="form-check-label" for="registerCheck">
                                                    I have read and agree to the terms
                                                </label>
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- Pills content --> */}






                            </div>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}

export default Packages