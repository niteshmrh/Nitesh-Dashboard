import React, { useState } from "react";
import { Icons } from "../../../assets/icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { paymentModelValidationSchema } from "../../../utils/validation";

const initialValues = {
  Mobile: "",
};

function PaymentLinkModal(props) {
  const [mobileOption, setMobileOption] = useState(false);
  const [copied, setCopied] = useState(false);
  const paymentLink = "https://cashfree.com/12343";

  const renderTooltip1 = (props) => (
    <Tooltip id="view-tooltip" {...props}>
      Click to copy
    </Tooltip>
  );
  const renderTooltip2 = (props) => (
    <Tooltip id="view-tooltip" {...props}>
      Copied
    </Tooltip>
  );

  const handleCopied = () => {
    setCopied(true);
    setTimeout(() => {
      console.log(copied);
      setCopied(false);
    }, 10000);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: paymentModelValidationSchema,
      onSubmit: (values) => {
        // console.log(values);
      },
    });

  // this piece of code only allowed number in the text feilds.
  if (values.Mobile) {
    values.Mobile = values.Mobile.replace(/\D/g, "");
  }

  return (
    <div className="modal fade" id="paymentModal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="modal-header">
              <h5 className="modal-title text-opacity">Payment Link</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body fs-14" style={{ marginBottom: "-26px" }}>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="table">
                    <table
                      id="example3"
                      className="table text-nowrap  table-bordered"
                    >
                      <tbody>
                        <tr>
                          <td className="mx-2">
                            <label>
                              <span>Total Amount Due:</span>
                            </label>
                          </td>
                          <td>
                            <strong>₹38,350</strong>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <label>
                              <span>Minimum Amount Due:</span>
                            </label>
                          </td>
                          <td>
                            <strong>₹25,000</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="row">
                      <p>
                        <strong>Copy Link &nbsp; :</strong>
                        &nbsp;&nbsp; &nbsp;{" "}
                        <Link
                          to={paymentLink}
                          style={{ textDecoration: "none" }}
                        >
                          {paymentLink}
                        </Link>{" "}
                        {copied ? (
                          <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip2}
                          >
                            <strong className="btn btn-link">
                              {Icons.BsFiles}
                            </strong>
                          </OverlayTrigger>
                        ) : (
                          <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip1}
                          >
                            <strong
                              className="btn btn-link"
                              onClick={() => {
                                navigator.clipboard.writeText(paymentLink);
                                handleCopied();
                              }}
                            >
                              {Icons.BsFiles}
                            </strong>
                          </OverlayTrigger>
                        )}
                      </p>
                    </div>
                    <div className="table-responsive">
                      <table
                        id="example3"
                        className="table text-nowrap table-bordered mb-3"
                      >
                        <tbody>
                          <tr>
                            <td className="mx-2">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="mobileRadio"
                                  id="flexRadioDefault1"
                                  onChange={() => {
                                    setMobileOption(false);
                                  }}
                                  defaultChecked
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault1"
                                >
                                  Registered Mobile Number :
                                </label>
                              </div>
                            </td>
                            <td>
                              <strong>+91 7870720178</strong>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="mobileRadio"
                                  id="flexRadioDefault2"
                                  onChange={() => setMobileOption(true)}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="flexRadioDefault2"
                                >
                                  Other Mobile Number :
                                </label>
                              </div>
                            </td>
                            <td>
                              {mobileOption && (
                                <strong>
                                  <input
                                    className={`form-control input-sm ${
                                      errors.Mobile && touched.Mobile
                                        ? "is-invalid"
                                        : touched.Mobile
                                        ? "is-valid"
                                        : ""
                                    }`}
                                    placeholder="Mobile Number"
                                    type="text"
                                    name="Mobile"
                                    id="Mobile"
                                    maxLength="10"
                                    value={values.Mobile}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                  />
                                  {errors.Mobile && touched.Mobile ? (
                                    <p className="text-danger text-wrap">
                                      {errors.Mobile}
                                    </p>
                                  ) : (
                                    <></>
                                  )}
                                </strong>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p>
                      Select medium by which you want to send the payment link
                      to the customer and click on submit button.
                    </p>
                    <div className="todo-blog secondary">
                      <div className="row">
                        <div className="col-md-6">
                          <label className="todo-img">
                            <input
                              type="checkbox"
                              className="todo-checkbox"
                              name="todo-checkbox"
                              id="todo-checkbox"
                              defaultChecked
                            />
                            <span className="checkmark"></span>
                          </label>
                          &nbsp; SMS
                        </div>
                        <div className="col-md-6">
                          <label className="todo-img">
                            <input
                              type="checkbox"
                              className="todo-checkbox"
                              name="todo-checkbox"
                              id="todo-checkbox"
                            />
                            <span className="checkmark"></span>
                          </label>
                          &nbsp; Whatsapp
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary btn-sm">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentLinkModal;
