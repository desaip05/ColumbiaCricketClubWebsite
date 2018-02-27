import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { browserHistory } from "react-router";
import HomePage from "./pages/home.jsx";
import Fixtures from "./pages/fixtures.jsx";
import FixtureCalendar from "./pages/calendar.jsx";
import Register from "./pages/register.jsx";
import Announcements from "./pages/announcements.jsx";
import NavBar from "./headerComponent/navBar.jsx";
import Footer from "./footerComponent/footer.jsx";
/*css import*/
// import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

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
            <Route path="/announcements" component={Announcements}/>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;