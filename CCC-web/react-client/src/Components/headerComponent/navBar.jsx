import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends Component {
    Blog(props) {
        return (
            <div class="container">
                <div class="row header">
                    {/* -- Logo */}
                    <div class="col-xs-2 logo">
                        <a href="index.html">
                            <img
                                src="images/ccc_logo_trans_bw.png"
                                alt=""
                                height="107"
                            />
                        </a>
                    </div>
                    {/* -- //Logo// */}

                    {/* -- Main navigation */}
                    {/* -- Navigation File */}
                    <div class="col-md-12">
                        {/* -- Mobile Button Menu */}
                        <div class="mobile-menu-button">
                            <i class="fa fa-list-ul" />
                        </div>
                        {/* -- //Mobile Button Menu// */}

                        <nav>
                            <ul class="navigation" id="main-navigation">
                                <li>
                                    <Link to="/"><span class="label-nav">Home</span></Link>
                                </li>
                                <li>
                                    <Link to="/fixtures"><span class="label-nav">Fixtures</span></Link>
                                        
                                </li>
                                <li>
                                    <Link to="/register"><span class="label-nav">Register</span></Link>
                                </li>
                                <li>
                                    <a href="events.html">
                                        <span class="label-nav">Events</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="products.html">
                                        <span class="label-nav">Products</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="about.html">
                                        <span class="label-nav">About</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* -- Mobile Nav. Container */}
                        <ul class="mobile-nav">
                            <li class="responsive-searchbox">
                                {/*-- Responsive Nave */}
                                <form action="index.html#" method="get">
                                    <input
                                        type="text"
                                        class="searchbox-inputtext"
                                        id="searchbox-inputtext-mobile"
                                        name="s"
                                    />
                                    <button class="icon-search" />
                                </form>
                                {/* //Responsive Nave// */}
                            </li>
                        </ul>
                        {/* -- //Mobile Nav. Container// */}
                    </div>
                    {/* -- //Main navigation// */}
                </div>
            </div>
        );
    }

    render() {
        const posts = [
            {
                id: 1,
                title: "Events",
                content: "events.html",
                image: "images/icon/f6.png"
            },
            {
                id: 2,
                title: "Register",
                content: "register.html",
                image: "images/icon/r2.png"
            },
            {
                id: 3,
                title: "About",
                content: "about.html",
                image: "images/icon/about.png"
            },
            {
                id: 4,
                title: "Contact Us",
                content: "contact.html",
                image: "images/icon/contact.png"
            }
        ];

        return (
            /*-- Header */
            <div class="top_wrapper">
                <div class="top-bar">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-7 langnav">
                                <nav>
                                    <ul class="" id="language">
                                        <li class="active">
                                            <i class="fa fa-ellipsis-h" />{" "}
                                            <span>United States</span>
                                            <ul>
                                                <li>
                                                    <a href="fr.html">France</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-sm-5" id="top-search">
                                <div class="searchbox">
                                    <form action="search.html" method="get">
                                        <input
                                            type="text"
                                            class="searchbox-inputtext"
                                            id="searchbox-inputtext"
                                            name="query"
                                            placeholder="Search"
                                        />{" "}
                                        <label
                                            class="searchbox-icon"
                                            for="searchbox-inputtext"
                                        />{" "}
                                        <input
                                            type="submit"
                                            class="searchbox-submit"
                                            value="Search"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <header id="header">
                    <this.Blog posts={posts} />
                </header>
            </div>
            /*-- //Header// */
        );
    }
}

export default NavBar;