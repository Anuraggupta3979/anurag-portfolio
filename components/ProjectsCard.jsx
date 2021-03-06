import React from "react";
import { Card, CardBody, Col, Button } from "reactstrap";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="">
              <h3>{data.name}</h3>
              <img src={data.vector} alt="ProjectImage" className="card-img" />
              <p className="description mt-3">{data.description}</p>
              {data.features ? (
                <p className="description mt-3">Features : {data.features}</p>
              ) : null}
              {data.tech ? (
                <p className="description mt-3">Tech : {data.tech}</p>
              ) : null}
              {data.github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={data.github}
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
    </Col>
  );
};

export default ProjectsCard;
