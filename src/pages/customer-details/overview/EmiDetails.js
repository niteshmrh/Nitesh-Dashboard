import React from "react";
import { CardSkeleton } from "../../../components/Loader/CardSkeleton";

function EmiDetails({ loading }) {
  return (
    <div id="emi" className="">
      <div className="card border-0">
        {loading ? (
          <CardSkeleton />
        ) : (
          <>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">EMI Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Paid Amount</th>
                      <th scope="col">Payment Date</th>
                      <th scope="col">Remaining Amount</th>
                      <th scope="col">Pending Charges</th>
                      <th scope="col">EMI overdue charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10-Oct-23</td>
                      <td>₹14,534.00</td>
                      <td>Paid</td>
                      <td>₹14,534.00</td>
                      <td>14-Oct-23</td>
                      <td>-</td>
                      <td>₹0.00</td>
                      <td>₹0.00</td>
                    </tr>
                    <tr>
                      <td>10-Oct-23</td>
                      <td>₹14,534.00</td>
                      <td>Paid</td>
                      <td>₹14,534.00</td>
                      <td>14-Oct-23</td>
                      <td>-</td>
                      <td>₹0.00</td>
                      <td>₹0.00</td>
                    </tr>
                    <tr>
                      <td>10-Oct-23</td>
                      <td>₹14,534.00</td>
                      <td>overdue</td>
                      <td>-</td>
                      <td>-</td>
                      <td>₹15,904.00</td>
                      <td>₹1,796.00</td>
                      <td>₹500.00</td>
                    </tr>
                    <tr>
                      <td>10-Oct-23</td>
                      <td>₹14,534.00</td>
                      <td>overdue</td>
                      <td>-</td>
                      <td>-</td>
                      <td>₹15,904.00</td>
                      <td>₹1,796.00</td>
                      <td>₹500.00</td>
                    </tr>
                    <tr>
                      <th scope="row">Total</th>
                      <th scope="row">₹571,174.00</th>
                      <th scope="row">&nbsp;</th>
                      <th scope="row">₹94,054.00</th>
                      <th scope="row">&nbsp;</th>
                      <th scope="row">₹477,120.00</th>
                      <th scope="row" className="text-warning">
                        ₹7,670.00
                      </th>
                      <th scope="row" className="text-danger">
                        ₹3,500.00
                      </th>
                    </tr>
                    <tr>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <th scope="row">₹488,290.52</th>
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

export default EmiDetails;
