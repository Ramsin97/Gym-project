import React, { Component } from 'react'
import "./Cafeteria.css";
import axios from 'axios';
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Filter from './Filter';


export class MainProducts extends Component {



    // empty state 
    state = {
        Products: []
    }

    componentDidMount() {

        axios.get("MYJSON/Store.json")
            .then(res => {
                this.setState({
                    Products: res.data.Products
                })

            })

    }

    sortProducts = (event) => {
        const sort = event.target.value;
        this.setState((state) => ({

            sort: sort,
            Products: this.state.Products.slice().sort((a, b) => (

                sort === "lowest" ?
                    ((a.price > b.price) ? 1 : -1) :
                    sort === "highest" ?
                        ((a.price < b.price) ? 1 : -1) :
                        ((a.id > b.id) ? 1 : -1)

            ))

        }));

        console.log(event.target.value);
    }



    render() {

        const { Products } = this.state;
        const allProducts = Products.map((item) => {
            return (

                <Col sm="12" md="6" lg="4" xl="3">

                    <div>
                        <Card className="mt-5 mb-5" style={{ width: "280px", height: "725px", border: "none", margin: "auto" }}>
                            <CardImg top width="100%" src={item.image} alt="Card image cap" style={{ height: "500px" }} />
                            <CardBody>
                                <CardTitle tag="h5" style={{ fontWeight: "bold", color: "var(--red)" }}>{item.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2">{item.company}</CardSubtitle>
                                <CardText style={{ color: "#000", fontWeight: "bold" }}>{item.price}$</CardText>
                                <button onClick={this.props.onAdd} className="btn btn-danger" style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    backgroundColor: "var(--red)"

                                }}>ADD TO CARD</button>
                            </CardBody>
                        </Card>
                    </div>

                </Col>

            );


        })

        return (
            <div className="store">

                <Filter count={this.state.Products.length} sort={this.state.sort} sortProducts={this.sortProducts} />

                <Container>
                    <Row>
                        {allProducts}
                    </Row>
                </Container>
            </div>
        )
    }

}


export default MainProducts
