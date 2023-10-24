import React from "react";
import { Icons } from "../../../assets/icons";
import { NavLink } from "reactstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { CardSkeleton } from "../../../components/Loader/CardSkeleton";
import Skeleton from "react-loading-skeleton";
import DocumentModel from "./DocumentModel";

function Documents({ loading }) {
  const renderTooltip1 = (props) => (
    <Tooltip id="view-tooltip" {...props}>
      View
    </Tooltip>
  );
  const renderTooltip = (props) => (
    <Tooltip id="download-tooltip" {...props}>
      Download
    </Tooltip>
  );

  return (
    <div className="document">
      <div className="card border-0">
        <div className="card-header">
          <div className="d-flex justify-content-end me-3">
            {loading ? (
              <Skeleton width={110} className="py-1" />
            ) : (
              <button
                className="btn btn-outline"
                data-bs-toggle="modal"
                data-bs-target="#DocumentModal"
              >
                {Icons.outlinePlus} Add More
              </button>
            )}
          </div>
        </div>
        {loading ? (
          <CardSkeleton />
        ) : (
          <>
            <div className="card-body mt-1">
              <div className="table-responsive">
                <table className="table table-bordered text-nowrap document-table">
                  <thead>
                    <tr>
                      <th>Documents</th>
                      <th>Document Type</th>
                      <th>Uploaded Date</th>
                      <th>Uploaded By</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Proof Of identity</td>
                      <td>PAN</td>
                      <td>12-12-22</td>
                      <td>Prince</td>
                      <td>
                        <OverlayTrigger
                          placement="left"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip1}
                        >
                          <NavLink to="#" variant="success">
                            {Icons.AiFillEye}
                          </NavLink>
                        </OverlayTrigger>
                        &nbsp;&nbsp;
                        <OverlayTrigger
                          placement="right"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <NavLink to="#" variant="success">
                            {Icons.AiOutlineDownload}
                          </NavLink>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td>Proof Of Address</td>
                      <td>Aadhaar</td>
                      <td>20-12-22</td>
                      <td>Rajat</td>
                      <td>
                        <OverlayTrigger
                          placement="left"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip1}
                        >
                          <NavLink to="#" variant="success">
                            {Icons.AiFillEye}
                          </NavLink>
                        </OverlayTrigger>
                        &nbsp;&nbsp;
                        <OverlayTrigger
                          placement="right"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <NavLink to="#" variant="success">
                            {Icons.AiOutlineDownload}
                          </NavLink>
                        </OverlayTrigger>
                      </td>
                    </tr>
                    <tr>
                      <td>KYC</td>
                      <td>Aadhaar</td>
                      <td>30-01-22</td>
                      <td>Raj</td>
                      <td>
                        <OverlayTrigger
                          placement="left"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip1}
                        >
                          <NavLink to="#" variant="success">
                            {Icons.AiFillEye}
                          </NavLink>
                        </OverlayTrigger>
                        &nbsp;&nbsp;
                        <OverlayTrigger
                          placement="right"
                          delay={{ show: 250, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          <NavLink to="#" variant="success">
                            {Icons.AiOutlineDownload}
                          </NavLink>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
      <DocumentModel />
    </div>
  );
}

export default Documents;
