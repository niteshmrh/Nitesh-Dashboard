import React from "react";
import { useFormik } from "formik";
import { referencesValidationSchema } from "../../../utils/validation";

const initialValues = {
	Name: "",
	Relationship: "",
	Mobile: "",
};

function ReferencesModal(props) {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema: referencesValidationSchema,
			onSubmit: (values) => {
				// console.log(values);
			},
		});

	if (values.Mobile) {
		values.Mobile = values.Mobile.replace(/\D/g, "");
	}

	return (
		<div className="modal fade" id="referencesModal" tabIndex={-1}>
			<div className="modal-dialog">
				<div className="modal-content">
					<form onSubmit={handleSubmit} className="needs-validation" noValidate>
						<div className="modal-header">
							<h5 className="modal-title text-opacity">Add References</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>
						<div className="modal-body fs-14">
							<div className="mb-3">
								<label htmlFor="name" className="form-label">
									Name
								</label>
								<input
									type="text"
									id="Name"
									name="Name"
									placeholder="Name"
									className={`form-control form-control-sm ${
										errors.Name && touched.Name
											? "is-invalid"
											: touched.Name
											? "is-valid"
											: ""
									}`}
									value={values.Name}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.Name && touched.Name ? (
									<div className="text-danger">{errors.Name}</div>
								) : null}
							</div>
							<div className="mb-3">
								<label htmlFor="Relationship" className="form-label">
									Relationship
								</label>
								<input
									type="text"
									id="Relationship"
									name="Relationship"
									placeholder="Relationship"
									className={`form-control form-control-sm ${
										errors.Relationship && touched.Relationship
											? "is-invalid"
											: touched.Relationship
											? "is-valid"
											: ""
									}`}
									value={values.Relationship}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.Relationship && touched.Relationship ? (
									<div className="text-danger">{errors.Relationship}</div>
								) : null}
							</div>
							<div className="mb-3">
								<label htmlFor="mobile" className="form-label">
									Mobile Number
								</label>
								<input
									type="text"
									id="Mobile"
									name="Mobile"
									placeholder="Mobile Number"
									className={`form-control form-control-sm ${
										errors.Mobile && touched.Mobile
											? "is-invalid"
											: touched.Mobile
											? "is-valid"
											: ""
									}`}
									maxLength="10"
									value={values.Mobile}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.Mobile && touched.Mobile ? (
									<div className="text-danger">{errors.Mobile}</div>
								) : null}
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary btn-sm"
								data-bs-dismiss="modal">
								Close
							</button>
							<button
								type="submit"
								value="Submit"
								className="btn btn-primary btn-sm">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default ReferencesModal;
