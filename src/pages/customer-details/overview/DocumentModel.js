import React from "react";
import { useFormik } from "formik";
import { documentValidationSchema } from "../../../utils/validation";

const initialValues = {
  documentType: "",
  documentName: "",
  uploadfile: [],
};
function DocumentModel(props) {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: documentValidationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <div className="modal fade" id="DocumentModal" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="modal-header">
              <h5 className="modal-title text-opacity">Add Document</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body fs-14">
              <div className="mb-3">
                <label htmlFor="documentType" className="form-label">
                  Document Type
                </label>
                <select
                  id="documentType"
                  name="documentType"
                  className={`form-select form-select-sm ${
                    errors.documentType && touched.documentType
                      ? "is-invalid"
                      : touched.documentType
                      ? "is-valid"
                      : ""
                  }`}
                  aria-label="Default select example"
                  value={values.documentType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value={""}>-Document Type-</option>
                  <option value={"Aadhaar"}>Aadhaar</option>
                  <option value={"PAN"}>PAN</option>
                </select>
                {errors.documentType && touched.documentType ? (
                  <div className="text-danger">{errors.documentType}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="documentName" className="form-label">
                  Document Name
                </label>
                <input
                  type="text"
                  className={`form-control form-control-sm ${
                    errors.documentName && touched.documentName
                      ? "is-invalid"
                      : touched.documentName
                      ? "is-valid"
                      : ""
                  }`}
                  id="documentName"
                  name="documentName"
                  placeholder="Document Name"
                  value={values.documentName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.documentName && touched.documentName ? (
                  <div className="text-danger">{errors.documentName}</div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="uploadfile" className="form-label">
                  Upload File
                </label>
                <input
                  type="file"
                  className={`form-control form-control-sm ${
                    errors.uploadfile && touched.uploadfile
                      ? "is-invalid"
                      : touched.uploadfile
                      ? "is-valid"
                      : ""
                  }`}
                  id="uploadfile"
                  name="uploadfile"
                  value={values.uploadfile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.uploadfile && touched.uploadfile ? (
                  <div className="text-danger">{errors.uploadfile}</div>
                ) : null}
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
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DocumentModel;
