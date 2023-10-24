import React, { useEffect, useState } from "react";
import { PaymentSkeleton } from "../../../components/Loader/CardSkeleton";

function Payments(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="card border-0">
      {loading ? (
        <PaymentSkeleton />
      ) : (
        <>
          <div className="card-header">
            <h4 className="card-title">Payments</h4>
          </div>

          <div className="card-body row px-4 pt-4 pb-2">
            <div className="col-md-4">
              <p className="value">&#8377; 1,89,000</p>
              <p className="title">Total EMI Amount</p>
            </div>
            <div className="col-md-4">
              <p className="value">&#8377; 78,000</p>
              <p className="title">Total Amount Paid</p>
            </div>
            <div className="col-md-4">
              <p className="value">&#8377; 500</p>
              <p className="title">Wallet Balance</p>
            </div>

            <div className="col-md-4">
              <p className="value">&#8377; 1,21,000</p>
              <p className="title">Total Amount Pending</p>
            </div>
            <div className="col-md-4">
              <p className="value">12-10-22</p>
              <p className="title">Last EMI paid Date</p>
            </div>
            <div className="col-md-4">
              <p className="value">&#8377; 5,000</p>
              <p className="title">Current EMI Due</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Payments;
