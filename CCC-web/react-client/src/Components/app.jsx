import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";
import HomePage from "./pages/home.jsx";
import Fixtures from "./pages/fixtures.jsx";
import FixtureCalendar from "./pages/calendar.jsx";
import Register from "./pages/register.jsx";
import NavBar from "./headerComponent/navBar.jsx";
import Footer from "./footerComponent/footer.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div id="wrapper" class="boxed">
          <NavBar />
          <div class="content-wrapper">
            <div class="top-title-wrapper">
              <div class="container">
                <div class="row">
                  <div class="col-md-12 col-sm-12">
                    <div class="page-info" />
                  </div>
                </div>
              </div>
            </div>
            <Route exact path="/"  component={HomePage} />
            <Route path="/fixtures" component={Fixtures}/>
            <Route path="/calendar" component={FixtureCalendar}/>
            <Route path="/register" component={Register}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;