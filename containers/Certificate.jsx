import { certificate } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import CertificateCard from "../components/CertificateCard";
import { Fade } from "react-reveal";

const Certificate = () => {
  return (
    <section className="section section-lg">
      <Container>
        <Fade bottom duration={1000} distance="40px">
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-star text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Certificates</h4>
            </div>
          </div>
        </Fade>
        <Row className="row-grid align-items-center">
          {certificate.map((data, i) => {
            return (
              <Col key={i} lg={6}>
                <CertificateCard data={data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Certificate;
