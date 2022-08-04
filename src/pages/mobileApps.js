import React from "react";
import "jquery/dist/jquery.min.js"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";
AOS.init();

class MobileApps extends React.Component {
  render() {
    return (
      <div>
        <main id="main">
          <section class="section site-portfolio">
            <div class="container">
            <div class="row mb-5 align-items-center">
                <div class="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                  <h2>Hi, I'm Pallabi Ghosh Das</h2>
                  <p class="mb-0">UI/UX Designer &amp; Frontend Developer</p>
                </div>
                <div
                  class="col-md-12 col-lg-6 text-start text-lg-end"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div id="filters" class="filters">
                    <a href="/" data-filter="*" >
                      All
                    </a>
                    <Link to="/mobileApp" data-filter=".mobile" class="active">
                      Mobile Apps
                    </Link>
                    <a href="/design" data-filter=".design" >
                      Design
                    </a>
                    <a href="/dailyUI" data-filter=".branding">
                      Daily UI
                    </a>
                    <a href="/freelancingWork" data-filter=".illustration" >
                      Illustration
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="portfolio-grid"
                class="row no-gutter"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="item mobile col-sm-6 col-md-4 col-lg-4 mb-4">
                  <Link to="/joynapp" class="item-wrap fancybox">
                    <div class="work-info">
                      <h3>Packitup/JOYN</h3>
                      <span>Mobile App</span>
                    </div>
                    <img class="img-fluid" src="assets/img/Frame26.png" />
                  </Link>
                </div>

                <div class="item mobile col-sm-6 col-md-4 col-lg-4 mb-4">
                  <Link to="/konsusapp" class="item-wrap fancybox">
                    <div class="work-info">
                      <h3>Konsus App</h3>
                      <span>Mobile App</span>
                    </div>
                    <img class="img-fluid" src="assets/img/Frame27.png" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default MobileApps;
