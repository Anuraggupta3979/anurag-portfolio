import React from "react";
import Image from "next/image";
import { Card, CardBody, Col, Button } from "reactstrap";
import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  console.log(data);
  return (
    <Col lg="6">
      <Fade left duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="">
                <h1>Anurag</h1>
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
