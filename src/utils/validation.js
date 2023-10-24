import * as Yup from "yup";

// ----------------------------------------------------------
// Payment model validation
// ----------------------------------------------------------

export const paymentModelValidationSchema = Yup.object({
  Mobile: Yup.string()
    .matches(/^[6-9]{1}[0-9]{9}$/, "Invalid Mobile Number")
    .max(10, "Too Long !")
    .min(10, "Too Short !")
    .required("Mobile can not be empty"),
});

// ---------------------------------------------------------
// current address model
// ---------------------------------------------------------

export const CurrentAddressValidationSchema = Yup.object({
  address: Yup.string()
    .min(3, "Too Short")
    .required("Address can not be empty!"),
  pinCode: Yup.string()
    .matches(/^[1-9]{1}[0-9]{5}$/, "Please enter a valid Pin Code.")
    .max(6)
    .required("Pin Code can not be empty!"),
  residenceType: Yup.string()
    .min(4)
    .required("Residence Type can not be empty!"),
});

// --------------------------------------------------------
// profesional info model
// --------------------------------------------------------

export const ProfessionalInfoValidationSchema = Yup.object({
  CompanyName: Yup.string()
    .matches(/^[A-Za-z0-9 ]{3,}$/, "Please enter a valid Company Name.")
    .min(3, "Loo Short")
    .required("Company Name can not be empty!"),
  CompanyAddress: Yup.string()
    .matches(/^[A-Za-z0-9 ]{3,}$/, "Please enter a valid Company Address")
    .min(3, "Too Short")
    .required("Company Address can not be empty!"),
});

// ----------------------------------
// reference model validation
// ----------------------------------

export const referencesValidationSchema = Yup.object({
  Name: Yup.string()
    .matches(/^[A-Za-z ]{3,}$/, "Please enter a valid Name.")
    .min(3, "Loo Short")
    .required("Name can not be empty!"),
  Relationship: Yup.string()
    .matches(/^[A-Za-z ]{3,}$/, "Please enter a valid Relationship Name")
    .min(3, "Too Short")
    .required("Relationship can not be empty!"),
  Mobile: Yup.string()
    .matches(/^[6-9]{1}[0-9]{9}$/, "Invalid Mobile Number")
    .max(10, "Too Long !")
    .min(10, "Too Short !")
    .required("Mobile can not be empty"),
});

// ****************************************************
// document model validation
// ****************************************************

export const documentValidationSchema = Yup.object({
  documentType: Yup.string().min(3).required("Please select document type"),
  documentName: Yup.string().min(3).required("Please Enter document name"),
  uploadfile: Yup.mixed()
    .nonNullable("Upload Document")
    .required("Please Upload Files")
    .test("fileType", "Unsupported File Format", (value) => {
      if (value) {
        return (
          value.type === "image/jpeg" ||
          value.type === "image/jpg" ||
          value.type === "image/png" ||
          value.type === "application/pdf"
        );
      } else {
        return true;
      }
    }),
});

// ------------------------------------
// Search Bar Validation Schema
// ------------------------------------

export const searchValidationSchema = Yup.object({
  loanID: Yup.string().length(10),

  phoneNumber: Yup.string()
    .matches(/([6-9]){1}([0-9]){9}$/, "Please enter a valid phone number.")
    .max(10),
});
