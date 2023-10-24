import React, { useEffect, useState } from "react";
import { NavLink } from "reactstrap";
import { Icons } from "../../../assets/icons";
import "./style.css";
import { ActivityLogsSkeleton } from "../../../components/Loader/CardSkeleton";

function ActivityLogs(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="container-fluid mt-3 py-3">
      <div className="row">
        <div className="col-md-12">
          <div className="page-header me-2 mb-0 d-flex justify-content-end">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink href="#">Customer Profile</NavLink>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                {Icons.arrow}
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Activity Logs
              </li>
            </ol>
          </div>
        </div>

        <div className="col-md-12 main-content">
          <div className="card border-0">
            {loading ? (
              <ActivityLogsSkeleton />
            ) : (
              <>
                <div className="card-header border-bottom">
                  <h3 className="card-title">Activity Logs</h3>
                </div>

                <div className="card-body">
                  <div className="list-group py-1">
                    <div className="list-group-item border-0 px-0">
                      <div className="media mt-0 align-items-center">
                        <div className="transcations-icon">
                          <i>{Icons.BsCalendarCheck}</i>
                        </div>
                        <div className="media-body">
                          <div className="d-flex align-items-center">
                            <div className="mt-0">
                              <h6 className="mb-1 fs-6 fw-normal text-dark">
                                <span className="fs-11 fw-semibold">
                                  22 Mar 23
                                </span>
                              </h6>
                              <p className="mb-0 fs-10 text-muted">15:09</p>
                            </div>
                            <div className="ml-22">
                              <h5 className="mb-1 fs-13 fw-normal text-dark">
                                <span className="fs-13 fw-normal">
                                  <span className="text-blue fs-15">
                                    Loan Activity :
                                  </span>
                                  Foreclosed
                                </span>
                              </h5>
                              <p className="mb-0 fs-10 text-muted">
                                Status: <strong>Read</strong> &nbsp;&nbsp;
                                Action by: <strong>System</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-0 px-0">
                      <div className="media mt-0 align-items-center">
                        <div className="transcations-icon">
                          <i>{Icons.BsCalendarCheck}</i>
                        </div>
                        <div className="media-body">
                          <div className="d-flex align-items-center">
                            <div className="mt-0">
                              <h6 className="mb-1 fs-6 fw-normal text-dark">
                                <span className="fs-11 fw-semibold">
                                  14 Mar 23
                                </span>
                              </h6>
                              <p className="mb-0 fs-10 text-muted">15:09</p>
                            </div>
                            <div className="ml-22">
                              <h5 className="mb-1 fs-13 fw-normal text-dark">
                                <span className="fs-13 fw-normal">
                                  <span className="text-blue fs-15">
                                    Call Activity :
                                  </span>
                                  'DPD 07' :
                                  <audio controls muted>
                                    <source src="horse.mp3" type="audio/mpeg" />
                                  </audio>
                                </span>
                              </h5>
                              <p className="mb-0 fs-10 text-muted">
                                Disposition: <strong>Connected</strong>
                                &nbsp;&nbsp; Sub-Disposition:
                                <strong>PTP</strong>
                                <strong>Connected</strong> &nbsp;&nbsp; Action
                                by: <strong>Rajat Sabharwal</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-0 px-0">
                      <div className="media mt-0 align-items-center">
                        <div className="transcations-icon">
                          <i>{Icons.BsCalendarCheck}</i>
                        </div>
                        <div className="media-body">
                          <div className="d-flex align-items-center">
                            <div className="mt-0">
                              <h6 className="mb-1 fs-6 fw-normal text-dark">
                                <span className="fs-11 fw-semibold">
                                  21 Mar 23
                                </span>
                              </h6>
                              <p className="mb-0 fs-10 text-muted">15:09</p>
                            </div>
                            <div className="ml-22">
                              <h5 className="mb-1 fs-13 fw-normal text-dark">
                                <span className="fs-13 fw-normal">
                                  <span className="text-blue fs-15">
                                    Whatsapp :
                                  </span>
                                  'DPD 02' : Dear Prince, Your loan id
                                  1004564434 is overdue with ₹ 23,000. Please
                                  pay now to avoid penalty charges.
                                </span>
                              </h5>
                              <p className="mb-0 fs-10 text-muted">
                                Status: <strong>Read</strong> &nbsp;&nbsp;
                                Action by: <strong>System</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityLogs;
