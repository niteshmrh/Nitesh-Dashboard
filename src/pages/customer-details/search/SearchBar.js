import React from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../../../assets/icons";
import { useFormik } from "formik";
import { searchValidationSchema } from "../../../utils/validation";

const initialValues = {
  loanID: "",
  phoneNumber: "",
};

const onSubmit = (values) => {
  // console.log("SUbmitted Values: ", values);
};

function SearchBar() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: searchValidationSchema,
      onSubmit,
    });

  if (values.loanID) {
    values.loanID = values.loanID.replace(/\D/g, "");
  }

  if (values.phoneNumber) {
    values.phoneNumber = values.phoneNumber.replace(/\D/g, "");
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 py-3">
          <div className="page-header me-2 mb-0 d-flex justify-content-between">
            <h4 className="fs-5 mb-2"> Search Via Loan ID </h4>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <NavLink href="#">Customer Profile</NavLink>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                {Icons.arrow}
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Customer Search
              </li>
            </ol>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className="col-md-5">
                <input
                  className={`form-control col-md-3 ${
                    errors.loanID && touched.loanID ? "is-invalid" : ""
                  }`}
                  placeholder="Enter Loan ID"
                  id="loanID"
                  name="loanID"
                  maxLength="10"
                  value={values.loanID}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.loanID && touched.loanID ? (
                  <p className="form-error form-validation-warning text-danger">
                    {errors.loanID}
                  </p>
                ) : (
                  <></>
                )}
              </div>
              <div className="col-md-5">
                <input
                  type="text"
                  className={`form-control ${
                    errors.phoneNumber && touched.phoneNumber
                      ? "is-invalid"
                      : ""
                  }`}
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  maxLength="10"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div className="form-error form-validation-warning text-danger">
                    {errors.phoneNumber}
                  </div>
                ) : null}
              </div>
              <div className="col-md-2">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
