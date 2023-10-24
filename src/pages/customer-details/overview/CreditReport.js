import React from "react";
import { Link } from "react-router-dom";
import { CardSkeleton } from "../../../components/Loader/CardSkeleton";

function CreditReport({ loading }) {
  return (
    <div id="credit-report">
      <div className="card border-0 pt-0">
        {loading ? (
          <CardSkeleton />
        ) : (
          <>
            {" "}
            <div className="card-body border-0 mb-0 pb-0">
              <div className="table-responsive">
                <table className="table table-bordered text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">Borrower Name</th>
                      <th scope="col">Cibil Vendor</th>
                      <th scope="col">Cibil Score</th>
                      <th scope="col">Date of Fetch</th>
                      <th scope="col">Loan State</th>
                      <th scope="col">Report</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vaibhav Jain</td>
                      <td>Crif</td>
                      <td>789</td>
                      <td>27/01/2022</td>
                      <td>Underwriting</td>
                      <td>
                        <Link className="text-decoration-none">
                          View Report
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CreditReport;
