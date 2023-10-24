import React, { useEffect, useState } from "react";
import Payments from "./Payments";
import "./style.css";
import Details from "./Details";
import { NavLink } from "reactstrap";
import { Icons } from "../../../assets/icons";

function PaymentDetails(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <div className="page-header me-2 mb-0 pt-3 d-flex justify-content-end">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink href="#">Customer Profile</NavLink>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                {Icons.arrow}
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Payment Details
              </li>
            </ol>
          </div>
        </div>

        <div className="col-md-12">
          <Payments loadng={loading} />
        </div>

        <div className="col-md-12">
          <Details loadng={loading} />
        </div>
      </div>
    </div>
  );
}

export default PaymentDetails;
