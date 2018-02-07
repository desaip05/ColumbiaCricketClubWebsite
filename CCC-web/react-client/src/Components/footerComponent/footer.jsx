import React, { Component } from "react";
class Footer extends Component {
  render() {
    return (
      <footer>
        <div class="footer">
          <div class="container">
            <div class="footer-wrapper">
              <div class="row foot1">
                {/* Footer Col. */}
                <div class="col-md-3 col-sm-3 footer-col">
                  <div class="footer-content">
                    <div class="footer-content-logo">
                      <a href="http://www.onehippo.com" target="_blank">
                        {" "}
                        <img src="images/logo-hippo.png" alt="onehippo.com" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* //Footer Col.// */}

                {/* Footer Col. */}
                <div class="col-md-3 col-sm-3 footer-col">
                  <div class="footer-title">SERVICE</div>
                  <div class="footer-content footer-recent-tweets-container">
                    <ul class="footer-category-list">
                      <li>
                        <a href="rss">RSS</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* //Footer Col.// */}

                {/* Footer Col. */}
                <div class="col-md-3 col-sm-3 footer-col">
                  <div class="footer-title">SECTIONS</div>
                  <div class="footer-content">
                    <ul class="footer-category-list">
                      <li>
                        <a href="news.html">News</a>
                      </li>
                      <li>
                        <a href="events.html">Events</a>
                      </li>
                      <li>
                        <a href="blogs.html">Blogs</a>
                      </li>
                      <li>
                        <a href="products.html">Products</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* //Footer Col.// */}

                {/* Footer Col. */}
              </div>
              <div class="row foot2">
                <div class="col-md-12">
                  <h5>Our Sponsors</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src="images/sponsor/BurkwWillsLogoHeader.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/sponsor/MCCLogoHeader.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="images/sponsor/Hotstar-official-logo.jpeg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-12 col-sm-12 center-text">
                  <div class="copyright-text">ColumbiaCricketClub &copy; 1957-2018</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;