import React, { Component } from 'react';
import './css/style.css';

export class Header extends Component {
  render() {
    return (
        <div>
            <header className="header">
                <div className="logo-box">
                    <img src={require("./img/logo-white.png")} alt="Logo" className="logo" />
                </div>
                <div className="text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary-main">Outdoors</span>
                        <span className="heading-primary-sub">overcome your anxiety</span>
                    </h1>
                    <a href="#" className="btn btn-white btn-animated">About me</a>
                    <a href="#" className="btn btn-white btn-animated sec">Contact</a>
                </div>
            </header>
        </div>
        )
    }
}

export default Header
