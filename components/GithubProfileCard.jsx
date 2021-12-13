import React from "react";

import { Card, Col, Row, Container, NavLink } from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-1 order-3" lg="4">
              <h5 style={{ color: "white", marginTop: "30px" }}>
                Reach Out to Me
              </h5>
              <hr />
              <p style={{ color: "white" }}>
                <a
                  className="mail-icon"
                  href="https://www.google.co.in/maps/place/New+Colony,+Lalsot,+Rajasthan+303503/@26.5607949,76.3250372,18z/data=!3m1!4b1!4m5!3m4!1s0x396dfc524afec21f:0x956da7d6c2a6b175!8m2!3d26.5608457!4d76.3264611"
                  target="_blank"
                >
                  {/* {prof.location} */}
                  <i className="ni ni-pin-3  mr-2" /> Behind Rest House, New
                  Colony Lalsot, 303503, Rajasthan
                </a>
              </p>
              <hr />
              <a href="tel:7232013979" className="mail-icon mb-5">
                <i className="fa fa-phone"></i> +91-7232013979
              </a>
              <br />
              <a
                href="mailto: anuraggupta3979@gmail.com"
                className="mail-icon mt-5"
              >
                <i className="fa fa-envelope-open"></i>{" "}
                anuraggupta3979@gmail.com
              </a>
              <hr />
              <SocialLinks></SocialLinks>
            </Col>
            <Col className="order-lg-2 " lg="1"></Col>
            <Col className="order-lg-2 order-2" lg="3">
              <h5
                style={{
                  color: "white",
                  // textAlign: "center",
                  //   fontFamily: "Augestina",
                  marginTop: "30px",
                }}
              >
                More
              </h5>
              <hr />
              <>
                <NavLink
                  rel="noopener"
                  aria-label="mail"
                  className="nav-link-icon "
                  style={{ marginLeft: "-13px" }}
                >
                  <i className="fa fa-home"></i> HOME
                </NavLink>
              </>
              <>
                <NavLink
                  rel="noopener"
                  aria-label="mail"
                  className="nav-link-icon "
                >
                  <i className="fa fa-file"></i> CERTIFICATES
                </NavLink>
              </>
            </Col>
            <Col className="order-lg-2" lg="1"></Col>
            <Col className="order-lg-2 order-1" lg="3">
              <h5
                style={{
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Augestina",
                  marginTop: "30px",
                }}
              >
                That's Me
              </h5>
              <hr />
              <img
                src={prof.avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center   mb-4"
              />
              <h5 className="text-center mb-2">
                <strong style={{ color: "white" }}>Anurag Gupta</strong>
              </h5>
              <p style={{ color: "white" }} className="text-center">
                Full Stack Developer
              </p>
            </Col>
            {/* <Col className="order-lg-2" lg="4">
              <img
                src={prof.avatar_url}
                style={{ width: "200px" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">Reach Out to me!</h2>
              <p className="lead text-white mt-3">
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                ALL
              </p>
              <p className="text-white mt-3">{prof.bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                <a
                  href="https://www.google.co.in/maps/place/New+Colony,+Lalsot,+Rajasthan+303503/@26.5607949,76.3250372,18z/data=!3m1!4b1!4m5!3m4!1s0x396dfc524afec21f:0x956da7d6c2a6b175!8m2!3d26.5608457!4d76.3264611"
                  target="_blank"
                >
                  {prof.location}
                </a>
              </div>
              <SocialLinks />
            </Col> */}
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
