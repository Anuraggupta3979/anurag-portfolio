import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";
import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  console.log(data)
  return (
    <Col lg="6">
      <Fade left duration={1000} distance="40px">
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div className="d-flex px-3">
              <div className="">
                <h3>{data.name}</h3>
                <p className="description mt-3">{data.desc}</p>

               
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
