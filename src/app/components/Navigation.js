import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../js/jquery.magnific-popup.min.js'
import '../js/jquery-min.js'
import '../js/popper.min.js'
import '../js/bootstrap.min.js'
import '../js/classie.js'
import '../js/color-switcher.js'
import '../js/jquery.mixitup.js'
import '../js/nivo-lightbox.js'
import '../js/owl.carousel.js'
import '../js/jquery.stellar.min.js'
import '../js/jquery.nav.js'
import '../js/scrolling-nav.js'
import '../js/jquery.easing.min.js'
import '../js/wow.js'
import '../js/jquery.vide.js'
import '../js/jquery.counterup.min.js'
import '../js/waypoints.min.js'
import '../js/form-validator.min.js'
import '../js/contact-form-script.js'
import '../js/main.js'


import '../css/bootstrap.min.css'
import '../css/line-icons.css'
import '../css/owl.carousel.css'
import '../css/owl.theme.css'
import '../css/nivo-lightbox.css'
import '../css/magnific-popup.css'
import '../css/animate.css'
import '../css/color-switcher.css'
import '../css/menu_sideslide.css'
import '../css/main.css'
import '../css/responsive.css'






export default class Navigation extends Component {

    render() {

        return (

                <nav class="navbar navbar-expand-md fixed-top scrolling-navbar bg-white">
                    <div class="container">
                        <a class="navbar-brand" href="index.html"><span class="lni-bulb"></span>ESSENCE</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="lni-menu"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav mr-auto w-100 justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#slider-area">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#services">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#features">Features</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#portfolios">Works</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#pricing">Pricing</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#team">Team</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#subscribe">Subscribe</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#blog">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

        );
    }
}

