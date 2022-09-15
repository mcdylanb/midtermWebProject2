import './App.css';
import React from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import App2 from './App2'
import logo from './NXTLVL_WEBDEV_VIVA_LOGO.png'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="topnav">
                    <ul className="ul">
                        <img className="img" src={logo} alt="logo" width="150" height="120"/>
                        <li className="top-head"><Link to="/App2"> Bibendum </Link></li>
                        <li className="top-head"><Link to="/App2"> Sollicitudin </Link></li>
                        <li className="top-head"><Link to="/App2"> Metus  </Link></li>
                        <li className="top-head"><Link to="/App2"> Egestas  </Link></li>
                        <textarea className="txtarea" rows="1" cols="5" id="background"></textarea>
                    </ul>
                </div>
            </BrowserRouter>
            <div>
                <p className="topP">In euismod sapien eu maximus tempus</p>
                <p className="TopP">Vestibulum bibendum posuere dui, in pharetra est hendrerit ac.</p>
                <p className="P">Integer posuere metus lacus</p>
            </div>
            <div className="container">
                <ul className="progressbar">
                    <li className="active"></li>
                    <li><a href="file:///C:/webProjectsMidterm/contents/index1.html"></a></li>
                    <li></li>
                </ul>
            </div>
            <div className="for-center">
                <div className="div1">
                    <header className="header">
                        <nav className="nav">
                            About You
                        </nav>
                        <div className="form">
                            <div className="clearfix"></div>
                            <div className="fill">First Name</div>
                            <textarea className="txtarea" rows="20" cols="100"></textarea>
                            <div className="right" className="fill">Last Name</div>
                            <textarea className="txtarea1" rows="20" cols="100"></textarea>
                            <div className="fill">Email</div>
                            <textarea className="txtarea1" rows="20" cols="100"></textarea>
                            <div className="fill">Mobile Number</div>
                            <textarea className="txtarea2" rows="20" cols="100"></textarea>
                        </div>
                    </header>
                </div>
            </div>
            <div className="button1">
                <button className="button"><a href="file:///C:/webProjectsMidterm/contents/index1.html">Next</a></button>
            </div>
            <footer className="footer">
                <div>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>
                <div>
                    <p className="ulP"> Pellentesque </p>
                    <p className="ulP"> Et interdum </p>
                    <p className="ulP"> Neque </p>
                    <p className="ulP"> Integer </p>
                    <p className="ulP"> Ullamcorper </p>
                    <p className="ulP"> Sagittis </p>
                </div>
                <div>
                    <p className="PP">Copyright © 2015 Proin eget ipsum libero </p>
                    <p className="PP">All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
