import { useState } from "react";
import PostInput from "./PostInput";
import { Stepper } from "react-form-stepper";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import useJobPost from "./store/useJobPost";
import "../styles/loader.css";

export const JobPosting = () => {
  const { jobPost, postJob, loading } = useJobPost();
  const inputFields = [
    ["title", "type", "salary"],
    ["description", "location", "experienceLevel"],
    ["company", "logo", "currency"],
  ];

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    type: Yup.string().required("Job type is required"),
    salary: Yup.number()
      .required("Salary is required")
      .positive("Salary must be positive"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
    experienceLevel: Yup.string().required("Experience Level is required"),
    company: Yup.string().required("Company name is required"),
    logo: Yup.string()
      .url("Logo must be a valid URL")
      .required("Logo URL is required"),
    currency: Yup.string().required("Currency is required"),
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  return (
    <section className="flex items-center justify-center w-full h-screen">
      <Formik
        initialValues={jobPost}
        validationSchema={validationSchema}
        validateOnBlur={true}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await postJob(values); // Call postJob with values
          } catch (error) {
            console.error("Job submission error:", error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ values, handleChange, errors, touched }) => (
          <>
            <Form className="flex flex-col bg-white rounded-2xl shadow-lg justify-center w-120 -mt-24 p-4 h-fit relative overflow-hidden">
              <h1 className="text-[#0034D1] text-2xl font-semibold">
                Post a Job
              </h1>

              <Stepper
                steps={["Basic Info", "Job Details", "Company Info"]}
                activeStep={currentStep}
                onStepClick={handleStepChange}
                styleConfig={{
                  activeBgColor: "#0034D1",
                  inactiveBgColor: "#e0e0e0",
                  completedBgColor: "#4caf50",
                  activeTextColor: "#fff",
                  inactiveTextColor: "#000",
                  completedTextColor: "#fff",
                }}
              />

              {inputFields[currentStep].map((field) => (
                <div key={field} className="mb-2">
                  <Field
                    name={field}
                    component={PostInput}
                    value={values[field]}
                    onChange={handleChange}
                  />
                  <ErrorMessage
                    name={field}
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              ))}

              {loading && (
                <div className=" absolute top-0 left-0  loadingContainer w-full h-full flex justify-center items-center ">
                  <div className=" bg-[#00000047] bg-opacity-50 w-full h-full flex justify-center items-center">
                    <div className="loader"></div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-4">
                {currentStep === 0 ? null : (
                  <button
                    type="button"
                    onClick={() =>
                      setCurrentStep((prev) => Math.max(prev - 1, 0))
                    }
                    className="bg-gray-300 text-black rounded-md w-32 h-10"
                    disabled={currentStep === 0}
                  >
                    Previous
                  </button>
                )}

                {currentStep === inputFields.length - 1 ? null : (
                  <button
                    type="button"
                    onClick={() => {
                      if (!Object.keys(errors).some((key) => touched[key])) {
                        setCurrentStep((prev) =>
                          Math.min(prev + 1, inputFields.length - 1),
                        );
                      }
                    }}
                    className="bg-[#0034D1] text-white rounded-md w-32 h-10"
                    disabled={currentStep === inputFields.length - 1}
                  >
                    Next
                  </button>
                )}
              </div>

              {currentStep === inputFields.length - 1 && (
                <button
                  type="submit"
                  className="bg-[#0034D1] text-white rounded-md w-full h-10 mt-5"
                  disabled={loading}
                >
                  {loading ? "Posting..." : "Post Job"}
                </button>
              )}
            </Form>
          </>
        )}
      </Formik>
    </section>
  );
};
