import React from "react";
import { useFormik } from "formik";
import { CurrentAddressValidationSchema } from "../../../utils/validation";

const initialValues = {
	pinCode: "",
	address: "",
	residenceType: "",
};

function CurrentAddressModal(props) {
	const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues,
			validationSchema: CurrentAddressValidationSchema,
			onSubmit: (values) => {
				// console.log(values);
			},
		});

	if (values.pinCode) {
		values.pinCode = values.pinCode.replace(/\D/g, "");
	}

	return (
		<div className="modal fade" id="currentAddressModal" tabIndex={-1}>
			<div className="modal-dialog">
				<div className="modal-content">
					<form onSubmit={handleSubmit} className="needs-validation" noValidate>
						<div className="modal-header">
							<h5 className="modal-title text-opacity">Add Address</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
							/>
						</div>
						<div className="modal-body fs-14">
							<div className="mb-3">
								<label htmlFor="address " className="form-label">
									Address
								</label>
								<input
									type="text"
									id="address"
									name="address"
									placeholder="Address"
									className={`form-control form-control-sm ${
										errors.address && touched.address
											? "is-invalid"
											: touched.address
											? "is-valid"
											: ""
									}`}
									value={values.address}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.address && touched.address ? (
									<div className="text-danger">{errors.address}</div>
								) : null}
							</div>
							<div className="mb-3">
								<label htmlFor="pinCode" className="form-label">
									Pin Code
								</label>
								<input
									type="number"
									id="pinCode"
									name="pinCode"
									placeholder="Pin Code"
									className={`form-control form-control-sm ${
										errors.pinCode && touched.pinCode
											? "is-invalid"
											: touched.pinCode
											? "is-valid"
											: ""
									}`}
									maxLength="6"
									value={values.pinCode}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								{errors.pinCode && touched.pinCode ? (
									<div className="text-danger">{errors.pinCode}</div>
								) : null}
							</div>
							<div className="mb-3">
								<label htmlFor="residenceType" className="form-label">
									Residence Type
								</label>
								<select
									id="residenceType"
									name="residenceType"
									className={`form-select form-select-sm ${
										errors.residenceType && touched.residenceType
											? "is-invalid"
											: touched.residenceType
											? "is-valid"
											: ""
									}`}
									aria-label="Default select example"
									value={values.residenceType}
									onChange={handleChange}
									onBlur={handleBlur}>
									<option value={""}>-Residence Type-</option>
									<option value={"office"}>office</option>
									<option value={"home"}>Home</option>
								</select>
								{errors.residenceType && touched.residenceType ? (
									<div className="text-danger">{errors.residenceType}</div>
								) : null}
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="reset"
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

export default CurrentAddressModal;
