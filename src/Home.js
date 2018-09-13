import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import BackgroundImg from './Backgroung.jpg';
class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>

                <img src={BackgroundImg} alt="BackgroundImg"/>

            </div>

        );
    }
}

export default Home;