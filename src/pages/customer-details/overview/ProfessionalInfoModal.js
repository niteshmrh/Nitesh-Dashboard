import React from "react";
import { useFormik } from "formik";
import { ProfessionalInfoValidationSchema } from "../../../utils/validation";

const initialValues = {
	CompanyName: "",
	CompanyAddress: "",
};

function ProfessionalInfoModal(props) {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema: ProfessionalInfoValidationSchema,
			onSubmit: (values) => {
				// console.log(values);
			},
		});

	return (
		<div className="modal fade" id="professionalInfoModal" tabIndex={-1}>
			<div className="modal-dialog">
				<div className="modal-content">
					<form onSubmit={handleSubmit} className="needs-validation" noValidate>
						<div className="modal-header">
							<h5 className="modal-title text-opacity">
								Add Professional Details
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>
						<div className="modal-body fs-14">
							<div className="mb-3">
								<label htmlFor="CompanyName" className="form-label">
									Company Name
								</label>
								<input
									type="text"
									name="CompanyName"
									className={`form-control form-control-sm ${
										errors.CompanyName && touched.CompanyName
											? "is-invalid"
											: touched.CompanyName
											? "is-valid"
											: ""
									}`}
									id="CompanyName"
									placeholder="CompanyName"
									value={values.CompanyName}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.CompanyName && touched.CompanyName ? (
									<div className="text-danger">{errors.CompanyName}</div>
								) : null}
							</div>
							<div className="mb-3">
								<label htmlFor="CompanyAddress" className="form-label">
									Company Address
								</label>
								<input
									type="text"
									className={`form-control form-control-sm ${
										errors.CompanyAddress && touched.CompanyAddress
											? "is-invalid"
											: touched.CompanyAddress
											? "is-valid"
											: ""
									}`}
									id="CompanyAddress"
									name="CompanyAddress"
									placeholder="Company Address"
									value={values.CompanyAddress}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.CompanyAddress && touched.CompanyAddress ? (
									<div className="text-danger">{errors.CompanyAddress}</div>
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

export default ProfessionalInfoModal;
