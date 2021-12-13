import React from "react";
import Image from "next/image";
import { Card, CardBody, Col, Button } from "reactstrap";
import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade left duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>anurag</CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
