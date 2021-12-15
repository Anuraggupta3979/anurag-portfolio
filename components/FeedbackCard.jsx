import React from "react";
import { Card, CardBody, Button } from "reactstrap";
const FeedbackCard = ({ data }) => {
  return (
    <Card className="card-lift--hover shadow mt-4">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-info">{data.name}</h5>
            <img src={data.vector} alt="" className="card-img" />
            {/* <p className="description mt-3">{data.feedback}</p> */}
            <div className="mt-2">
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
                <span className="nav-link-inner--text ml-1">
                  <i className="fa fa-chrome mr-2" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;
