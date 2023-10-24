import React from "react";
import PaymentLinkModal from "./PaymentLinkModal";
import { DetailsCerdSkeleton } from "../../../components/Loader/CardSkeleton";
import Skeleton from "react-loading-skeleton";

function BorrowerDetail({ loading }) {
  return (
    <>
      <div id="overview" className="row">
        <div className="col-md-12">
          <div>
            <div className="card border-0">
              <div className="card-header border-bottom d-flex bg-white">
                {loading ? (
                  <>
                    <div className="header-left">
                      <Skeleton className="mt-2 py-1 mb-1" width={140} />
                      <div className="d-flex">
                        <Skeleton width={140} />
                        <Skeleton width={140} />
                        <Skeleton width={140} />
                      </div>
                    </div>
                    <div className="header-right ms-auto d-flex align-items-center">
                      <Skeleton width={120} className="py-2" />
                      <Skeleton width={120} className="py-2" />
                      <Skeleton width={120} className="py-2" />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="header-left">
                      <h3 className="card-title std-color text-start">
                        Overview
                      </h3>
                      <div style={{ color: "" }}>
                        <span className="invest-id">Loan ID : 1000092384</span>
                        <span className="live-status lived">
                          Loan Status :{" "}
                          <span style={{ color: "#198754" }}>Active</span>
                        </span>
                        <span className="live-stage overdue">
                          Loan Stage :{" "}
                          <span style={{ color: "#bc0e14" }}>Overdue</span>
                        </span>
                      </div>
                    </div>
                    <div className="header-right ms-auto d-flex align-items-center">
                      <div className="btn btn-primary btn-sm bg-white text-primary me-2">
                        Generate FCL
                      </div>
                      <div className="btn btn-primary btn-sm bg-white text-primary me-2">
                        Generate SOA
                      </div>
                      <button
                        className="btn btn-success btn-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#paymentModal"
                      >
                        Payment Link
                      </button>
                    </div>
                  </>
                )}
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-4">
                    {loading ? (
                      <DetailsCerdSkeleton />
                    ) : (
                      <div className="card  border-0 details-box mt-3 pt-4">
                        <div className="card-header border-bottom card-view">
                          <h3 className="card-title std-color">
                            Borrower Details
                          </h3>
                        </div>
                        <div className="card-body">
                          <table className="table table-borderless table1">
                            <tbody>
                              <tr>
                                <td>Borrower Name :</td>
                                <td>
                                  <span className="fw-semibold">
                                    Vaibhav Jain
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Mobile No :</td>
                                <td>
                                  <span className="fw-semibold">
                                    +91 876876991
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>Email :</td>
                                <td>
                                  <span className="fw-semibold">
                                    support@gmail.com
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>City :</td>
                                <td>
                                  <span className="fw-semibold">Gurugram</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Age :</td>
                                <td>
                                  <span className="fw-semibold"> 50 </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-4">
                    {loading ? (
                      <DetailsCerdSkeleton />
                    ) : (
                      <div className="card border-0 details-box mt-3 pt-4">
                        <div className="card-header border-bottom card-view">
                          <h3 className="card-title std-color">Loan Details</h3>
                        </div>
                        <div className="card-body">
                          <table className="table table-borderless table2">
                            <tbody>
                              <tr>
                                <td>Loan Amount :</td>
                                <td>
                                  <span>₹2,00,000</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Total Outstanding Amount :</td>
                                <td>
                                  <span>₹1,12,000</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Principal Outstanding :</td>
                                <td>
                                  <span>₹1,00,000</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Loan Start Date :</td>
                                <td>
                                  <span>18-11-22</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Tenure :</td>
                                <td>
                                  <span> 12 Month </span>
                                </td>
                              </tr>
                              <tr>
                                <td>EMI Date :</td>
                                <td>
                                  <span> 10 </span>
                                </td>
                              </tr>
                              <tr>
                                <td>ROI :</td>
                                <td>
                                  <span> 12% </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-lg-4">
                    {loading ? (
                      <DetailsCerdSkeleton />
                    ) : (
                      <div className="card border-0 details-box mt-3 pt-4">
                        <div className="card-header border-bottom card-view">
                          <h3 className="card-title std-color">
                            Payment Details
                          </h3>
                        </div>
                        <div className="card-body">
                          <table className="table table-borderless table3">
                            <tbody>
                              <tr>
                                <td>Last EMI Paid Date :</td>
                                <td>
                                  <span>10-11-22</span>
                                </td>
                              </tr>
                              <tr>
                                <td>E-Mandate :</td>
                                <td>
                                  <span
                                    className="border rounded d-flex justify-content-center text-light"
                                    style={{
                                      width: "50px",
                                      fontSize: "10px",
                                      backgroundColor: "#8fbd56",
                                    }}
                                  >
                                    success
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>EMI Amount :</td>
                                <td>
                                  <span>₹5,500</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Total Due :</td>
                                <td>
                                  <span>₹12,500</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Total Amount Paid :</td>
                                <td>
                                  <span>₹78,000</span>
                                </td>
                              </tr>
                              <tr>
                                <td>Wallet Amount :</td>
                                <td>
                                  <span>500</span>
                                </td>
                              </tr>
                              <tr>
                                <td>DPD :</td>
                                <td>
                                  <span
                                    className="border border-primary rounded d-flex justify-content-center bg-primary text-light"
                                    style={{ width: "23px" }}
                                  >
                                    35
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentLinkModal />
    </>
  );
}

export default BorrowerDetail;
