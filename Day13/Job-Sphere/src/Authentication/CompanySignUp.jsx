import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CompanySignup = () => {
  const [step, setStep] = useState(1);

  const initialValues = {
    companyName: "",
    industry: "",
    location: "",
    contactPersonName: "",
    contactEmail: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchemas = [
    Yup.object({
      companyName: Yup.string().required("Company name is required"),
      industry: Yup.string().required("Industry is required"),
      location: Yup.string().required("Location is required"),
    }),
    Yup.object({
      contactPersonName: Yup.string().required("Contact person name is required"),
      contactEmail: Yup.string().email("Invalid email format").required("Email is required"),
    }),
    Yup.object({
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm your password"),
    }),
  ];

  const handleSubmit = (values) => {
    console.log("Company Signup Data:", values);
    // Submit logic here
  };

  const nextStep = async (validateForm) => {
    const errors = await validateForm();
    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6">
        <h1 className="text-2xl font-semibold text-center">Company Signup</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemas[step - 1]}
          onSubmit={handleSubmit}
        >
          {({ validateForm }) => (
            <Form className="space-y-4">
              {step === 1 && (
                <>
                  <Field
                    name="companyName"
                    placeholder="Company Name"
                    className="w-full p-3 border-1 border-[#0034D1] rounded focus:outline-none focus:ring-2 focus:ring-[#0034D1]"
                  />
                  <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />

                  <Field
                    name="industry"
                    placeholder="Industry"
                    className="w-full p-3 border-1 border-[#0034D1] rounded focus:outline-none focus:ring-2 focus:ring-[#0034D1]"
                  />
                  <ErrorMessage name="industry" component="div" className="text-red-500 text-sm" />

                  <Field
                    name="location"
                    placeholder="Location"
                    className="w-full p-3 border-1 border-[#0034D1] rounded focus:outline-none focus:ring-2 focus:ring-[#0034D1]"
                  />
                  <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                </>
              )}

              {step === 2 && (
                <>
                  <Field
                    name="contactPersonName"
                    placeholder="Contact Person Name"
                    className="w-full p-3 border-1 border-[#0034D1] rounded focus:outline-none focus:ring-2 focus:ring-[#0034D1]"
                  />
                  <ErrorMessage name="contactPersonName" component="div" className="text-red-500 text-sm" />

                  <Field
                    name="contactEmail"
                    placeholder="Contact Email"
                    type="email"
                    className="w-full p-3 border-1 border-[#0034D1] rounded focus:outline-none focus:ring-2 focus:ring-[#0034D1]"
                  />
                  <ErrorMessage name="contactEmail" component="div" className="text-red-500 text-sm" />
                </>
              )}

              {step === 3 && (
                <>
                  <Field
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="w-full p-3 border-1 border-[#0034D1] rounded focus:outline-none focus:ring-2 focus:ring-[#0034D1]"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

                  <Field
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    className="w-full p-3 border-1 border-[#0034D1] rounded focus:outline-none focus:ring-2 focus:ring-[#0034D1]"
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
                </>
              )}

              <div className="flex justify-between">
                {step > 1 && (
                  <button type="button" onClick={prevStep} className="py-2 px-4 bg-gray-300 rounded">
                    Back
                  </button>
                )}
                {step < 3 && (
                  <button
                    type="button"
                    onClick={() => nextStep(validateForm)}
                    className="py-2 px-8 bg-[#0034D1] text-white rounded"
                  >
                    Next
                  </button>
                )}
                {step === 3 && (
                  <button
                    type="submit"
                    className="py-2 px-8 bg-[#0034D1] text-white rounded"
                  >
                    Submit
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}


export default CompanySignup;