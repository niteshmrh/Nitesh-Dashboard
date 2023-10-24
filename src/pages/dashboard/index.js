import React from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../assets/icons";
import "./style.css";

function Dashboard(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="ms-2 d-flex justify-content-between">
            <div className="mt-3 fs-6" style={{ color: "#666" }}>
              <p style={{ fontWeight: "normal" }}>Dashboard</p>
            </div>
            <div className="page-header me-3 d-flex justify-content-end">
              <ol className="breadcrumb mt-3">
                <li className="breadcrumb-item">
                  <NavLink href="#">Customer Dashboard</NavLink>
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  {Icons.arrow}
                </li>
                <li className="breadcrumb-item" aria-current="page">
                  Home
                </li>
              </ol>
            </div>
          </div>
          <div className="ms-2 card border-0">
            <div className="card-body">
              <div className="my-3 ms-2 d-flex justify-content-between">
                <div className="card card-top border-0 box-shadow">
                  <div className="card-body">
                    <div className="card-text">
                      <div className="d-flex top-content-position">
                        <div
                          className="top-svg"
                          style={{ backgroundColor: "#f2071f" }}
                        >
                          {Icons.FaUsers}
                        </div>
                        <div>
                          <h5 className="card-heading fw-bold">432</h5>
                          <h6>&nbsp;Total Borrowers Due</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card card-top border-0 box-shadow">
                  <div className="card-body">
                    <div className="card-text">
                      <div className="d-flex top-content-position">
                        <div
                          className="top-svg"
                          style={{ backgroundColor: "#ffd707" }}
                        >
                          {Icons.BsCurrencyRupee}
                        </div>
                        <div>
                          <h5 className="card-heading fw-bold">₹ 232343</h5>
                          <h6>&nbsp;Outstanding Collection Amount</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card card-top border-0 box-shadow">
                  <div className="card-body">
                    <div className="card-text">
                      <div className="d-flex top-content-position">
                        <div
                          className="top-svg"
                          style={{ backgroundColor: "#06c643" }}
                        >
                          {Icons.GiReceiveMoney}
                        </div>
                        <div>
                          <h5 className="card-heading fw-bold">₹ 433134</h5>
                          <h6>&nbsp;Total Collected Amount</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="bottom" className="mt-4 ms-2">
            <div className="card border-0">
              <div className="card-body">
                <h6 className="card-title card-heading">Cases by DPD</h6>
                <div className="my-3 mt-3 d-flex justify-content-between">
                  <div className="card card-bottom border-0 box-shadow">
                    <div className="card-body">
                      <div className="card-text">
                        <h5 className="card-heading">800</h5>
                        <h6 className="margin-dpd">No of Borrowers</h6>
                        <span className="dpd-value">0-30 DPD</span>
                      </div>
                    </div>
                  </div>
                  <div className="card card-bottom border-0 box-shadow">
                    <div className="card-body">
                      <div className="card-text">
                        <h5 className="card-heading">120</h5>
                        <h6 className="margin-dpd">No of Borrowers</h6>
                        <span className="dpd-value">31-60 DPD</span>
                      </div>
                    </div>
                  </div>
                  <div className="card card-bottom border-0 box-shadow">
                    <div className="card-body">
                      <div className="card-text">
                        <h5 className="card-heading">50</h5>
                        <h6 className="margin-dpd">No of Borrowers</h6>
                        <span className="dpd-value">61-90 DPD</span>
                      </div>
                    </div>
                  </div>
                  <div className="card card-bottom border-0 box-shadow">
                    <div className="card-body">
                      <div className="card-text">
                        <h5 className="card-heading">100</h5>
                        <h6 className="margin-dpd">No of Borrowers</h6>
                        <span className="dpd-value">90+ DPD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
