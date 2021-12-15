import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

const CertificateCard = ({ data }) => {
  return (
    <Card className="card-lift--hover shadow mt-4">
      <CardBody>
        <div className="d-flex ">
          <div className="">
            <h5 className="text-info">{data.name}</h5>
            <hr style={{ marginTop: "0px", marginBottom: "10px" }} />
            <img src={data.certificate} alt="" className="card-img" />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CertificateCard;
