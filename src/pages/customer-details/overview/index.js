import React, { useEffect, useState } from "react";
import { Icons } from "../../../assets/icons";
import { NavLink } from "react-router-dom";
import "./style.css";
import BorrowerDetail from "./BorrowerDetail";
import EmiDetails from "./EmiDetails";
import CreditReport from "./CreditReport";
import Documents from "./Documents";
import PersonalDetails from "./PersonalDetails";
import References from "./References";
import Skeleton from "react-loading-skeleton";

function Overview(props) {
  const [tabs, setTabs] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="page-header me-3 mb-0 d-flex justify-content-end">
            <ol className="breadcrumb mt-3">
              <li className="breadcrumb-item">
                <NavLink href="#">Customer Profile</NavLink>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                {Icons.arrow}
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Overview
              </li>
            </ol>
          </div>
          <BorrowerDetail loading={loading} />

          {/* Tabs */}

          <div className="card border-0 my-3">
            <div id="user-profile" className="tabs">
              {loading ? (
                <ul className="d-flex">
                  <li>
                    <Skeleton width={110} className="py-1" />
                  </li>
                  <li>
                    <Skeleton width={110} className="py-1" />
                  </li>
                  <li>
                    <Skeleton width={110} className="py-1" />
                  </li>
                  <li>
                    <Skeleton width={110} className="py-1" />
                  </li>
                  <li>
                    <Skeleton width={110} className="py-1" />
                  </li>
                </ul>
              ) : (
                <ul className="d-flex">
                  <li
                    onClick={() => setTabs(1)}
                    className={`${tabs === 1 ? "active" : ""}`}
                  >
                    EMI Details
                  </li>
                  <li
                    onClick={() => setTabs(2)}
                    className={`${tabs === 2 ? "active" : ""}`}
                  >
                    Documents
                  </li>
                  <li
                    onClick={() => setTabs(3)}
                    className={`${tabs === 3 ? "active" : ""}`}
                  >
                    Personal Details
                  </li>
                  <li
                    onClick={() => setTabs(4)}
                    className={`${tabs === 4 ? "active" : ""}`}
                  >
                    References
                  </li>
                  <li
                    onClick={() => setTabs(5)}
                    className={`${tabs === 5 ? "active" : ""}`}
                  >
                    Credit Report
                  </li>
                </ul>
              )}

              {/* EMI Table */}
              {tabs === 1 && <EmiDetails loading={loading} />}

              {/* Documents */}
              {tabs === 2 && <Documents loading={loading} />}

              {/* personal Details */}
              {tabs === 3 && <PersonalDetails />}

              {/* Reference */}
              {tabs === 4 && <References />}

              {/* credit reports */}
              {tabs === 5 && <CreditReport loading={loading} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
