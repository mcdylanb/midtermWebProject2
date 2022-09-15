import './App.css';
import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';


function App2() {
    return (
        <div>
            <nav id="topnav">
                <img id="img" src="img/NXTLVL_WEBDEV_VIVA_LOGO.png" alt="logo" width="150" height="120"/>
                <ul id="ul">
                    <li className="top-head"><a href="#"> Bibendum</a></li>
                    <li className="top-head"><a href="#"> Sollicitudin</a></li>
                    <li className="top-head"><a href="#"> Metus</a></li>
                    <li id="top-head"><a href="#"> Egestas</a></li>
                    <textarea className="txtarea" rows="1" cols="5" id="background"></textarea>
                </ul>
            </nav>
            <div>
                <p id="topP">Vivamus interdum nunc ac sem fringilla</p>
                <p className="TopP">Duis risus urna, mattis eget justo non, gravida ultrices diam</p>
            </div>
            <div className="container">
                <ul className="progressbar">
                    <li><a href="file:///C:/webProjectsMidterm/contents/index.html"></a></li>
                    <li className="active"></li>
                    <li><a href="file:///C:/webProjectsMidterm/contents/index2.html"></a></li>
                </ul>
            </div>
            <div id="for-center">
                <div id="div1">
                    <header id="header">
                        <nav id="nav">
                            Your Donation
                        </nav>
                        <div id="form">
                            <div>
                                <button id="paypal">PayPal</button>
                                <div id="creditcard">Credit Card</div>
                                <div id="clearfix"></div>
                            </div>
                            <div className="fill">Donation Amount*</div>
                            <textarea id="txtarea" rows="20" cols="100"></textarea>
                            <div className="fill">Card Holder Name*</div>
                            <textarea className="txtarea1" rows="20" cols="100"></textarea>
                            <div className="fill">Credit Card no.*</div>
                            <textarea className="txtarea1" rows="20" cols="100"></textarea>
                            <div className="fill">Card Security Code*</div>
                            <textarea className="txtarea2" rows="20" cols="100"></textarea>
                            <div className="fill">Expiry Date*</div>
                            <textarea className="txtarea2" rows="20" cols="100"></textarea>
                        </div>
                    </header>
                </div>
            </div>
            <div id="button1">
                <button id="back"><a href="file:///C:/webProjectsMidterm/contents/index.html">Back</a></button>
                <button id="button"><a href="file:///C:/webProjectsMidterm/contents/index2.html">Next</a></button>
            </div>
            <footer id="footer">
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

export default App2;
