import React, { Component } from 'react'
import "./Home.css";
import Home1 from './Home1';
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';

export class Home extends Component {
    render() {


        return (
            <div className="home">
                <Home1/>
                <Home2/>
                <h1 className="text-center m-auto fp"><i className="fas fa-venus pr-2"></i>Females section</h1>
                <hr className="fpr"/>
                <Home4/>
                <Home3/>
            </div>
        )
    }
}

export default Home
