import React, { Component } from "react";
import { Container } from "reactstrap";
import { BsFacebook, BsTwitter, BsGoogle, BsInstagram } from "react-icons/bs";

class Footer extends Component {
  render() {
    return (
      <Container fluid className="footer fixed-bottom pt-5">
        <Container>
          <footer className="text-center text-lg-start text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div className="me- d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a href="" className="me-4 text-reset">
                  <BsFacebook size="30" color="EF704B" />
                </a>
                <a href="" className="me-4 text-reset ml-3">
                  <BsTwitter size="30" color="EF704B" />
                </a>
                <a href="" className="me-4 text-reset ml-3">
                  <BsGoogle size="30" color="EF704B" />
                </a>
                <a href="" className="me-4 text-reset ml-3">
                  <BsInstagram size="30" color="EF704B" />
                </a>
              </div>
            </section>

            <section>
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Phones
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        TV
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Games
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Clothes
                      </a>
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Phones
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        TV
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Games
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Clothes
                      </a>
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Useful links
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">
                        About Us
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Terms of Service
                      </a>
                    </p>
                    <p>
                      <a href="#!" className="text-reset">
                        Privacy Policy
                      </a>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                      Help & Contact
                    </h6>
                    <p>
                      <a href="#!" className="text-reset">
                        Contact Us
                      </a>
                    </p>
                    <p>info@example.com</p>
                    <p>
                      <a href="#!" className="text-reset">
                        Report
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center p-4">
              © 2022 Copyright
              <a
                className="text-reset fw-bold ml-2"
                href="https://best24deals.com/"
              >
                Best@4Deals.com
              </a>
            </div>
          </footer>
        </Container>
      </Container>
    );
  }
}
export default Footer;
