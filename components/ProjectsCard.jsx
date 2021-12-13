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
                <h3>{data.name}</h3>

                {data.github ? (
                  <Button
                    className="btn-icon"
                    color="github"
                    href={data.link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Github"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-github" />
                    </span>
                  </Button>
                ) : null}
                {data.link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={data.link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
