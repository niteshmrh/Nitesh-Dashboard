import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { HeaderCardSkeleton } from "../../../components/Loader/CardSkeleton";

function Details(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="card mt-4 border-0">
      {loading ? (
        <HeaderCardSkeleton />
      ) : (
        <>
          <div className="card-header">
            <h4 className="card-title">Details</h4>
          </div>

          <div className="card-body">
            <Table responsive bordered className="text-nowrap text-size">
              <thead>
                <tr>
                  <th>
                    <strong>EMI Due Date</strong>
                  </th>
                  <th>
                    <strong>EMI Amount</strong>
                  </th>
                  <th>
                    <strong>Payment Status</strong>
                  </th>
                  <th>
                    <strong>Paid Amount</strong>
                  </th>
                  <th>
                    <strong>Transaction ID</strong>
                  </th>
                  <th>
                    <strong>Payment Date</strong>
                  </th>
                  <th>
                    <strong>Payment Source</strong>
                  </th>
                  <th>
                    <strong>Campaign Name</strong>
                  </th>
                  <th>
                    <strong>Remaining Amount</strong>
                  </th>
                  <th>
                    <strong>Penalty Charges</strong>
                  </th>
                  <th>
                    <strong>EMI Overdue Charges</strong>
                  </th>
                  <th>
                    <strong>Wallet Balance</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12-20-22</td>
                  <td>5000</td>
                  <td>Paid</td>
                  <td>5000</td>
                  <td>43564534</td>
                  <td>20-10-22</td>
                  <td>Naudabao</td>
                  <td>VMN agency</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>12-20-22</td>
                  <td>5000</td>
                  <td>Paid</td>
                  <td>5000</td>
                  <td>43564534</td>
                  <td>20-10-22</td>
                  <td>Naudabao</td>
                  <td>VMN agency</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>12-20-22</td>
                  <td>5000</td>
                  <td>Paid</td>
                  <td>5000</td>
                  <td>43564534</td>
                  <td>20-10-22</td>
                  <td>Naudabao</td>
                  <td>VMN agency</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>100</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
