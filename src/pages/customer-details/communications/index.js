import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../../assets/icons";
import "./style.css";
import { HeaderCardSkeleton } from "../../../components/Loader/CardSkeleton";

function Communications(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="communication">
      <div className="container-fluid py-3">
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
                  Communication
                </li>
              </ol>
            </div>

            <div className="card border-0">
              {loading ? (
                <HeaderCardSkeleton />
              ) : (
                <>
                  <div className="card-header bg-white text-secondary px-4 py-2">
                    Communication
                  </div>

                  <div className="card-body border-0 mb-0 pb-0">
                    <div className="table-responsive">
                      <table className="table table-bordered text-nowrap">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Mode</th>
                            <th scope="col">Campaign</th>
                            <th scope="col">Contacted</th>
                            <th scope="col">Call Disposition</th>
                            <th scope="col">Amount Received</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>12-12-22</td>
                            <td>SMS</td>
                            <td>1 to 4 DPD</td>
                            <td>Delivered</td>
                            <td>Hi, Please pay your EMI</td>
                            <td>---</td>
                          </tr>
                          <tr>
                            <td>"Sent Date"</td>
                            <td>Whatsapp</td>
                            <td>"Template Name"</td>
                            <td>Delivered</td>
                            <td>Hi, Please pay your EMI</td>
                            <td>4500</td>
                          </tr>
                          <tr>
                            <td>"Sent Date"</td>
                            <td>Email</td>
                            <td>"Template Name"</td>
                            <td>Delivered</td>
                            <td>Hi, Please pay your EMI</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>"Visit Date"</td>
                            <td>FOS</td>
                            <td>"Agency Name"</td>
                            <td>"Address Status" or "Met with"</td>
                            <td>"Disposition"</td>
                            <td>"Remarks"</td>
                          </tr>
                          <tr>
                            <td>"Calling Date"</td>
                            <td>Calling</td>
                            <td>"Campaign Name"</td>
                            <td> "Main Disposition"</td>
                            <td>"Sub Disposition"</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communications;
