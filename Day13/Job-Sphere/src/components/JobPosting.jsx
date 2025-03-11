import { useState } from "react";
import PostInput from "./PostInput";
import JobPostSelect from "./JobPostSelect";
import ListInput from "./ListInput";
import { Stepper } from "react-form-stepper";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import useJobPost from "./store/useJobPost";
import "../styles/loader.css";

export const JobPosting = () => {
  const { jobPost, postJob, loading, setJobPost } = useJobPost();
  const inputFields = [
    ["title", "type", "salary"],
    ["location", "experienceLevel", "description"],
    ["detailsDescription", "jobResponsibilities", "jobRequirements"],
    ["company", "logo", "currency"],
  ];

  const currencyOptions = ["", "USD", "EUR", "GBP", "NGN"];
  const typeOptions = ["", "Full-time", "Part-time", "Contract", "Internship"];
  const experienceLevelOptions = ["", "Entry Level", "Mid Level", "Senior Level"];

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    type: Yup.string().required("Job type is required"),
    salary: Yup.number().required("Salary is required").positive("Salary must be positive"),
    description: Yup.string().required("Description is required"),
    detailsDescription: Yup.string().required("Detailed Description is required"),
    location: Yup.string().required("Location is required"),
    experienceLevel: Yup.string().required("Experience Level is required"),
    jobResponsibilities: Yup.array().of(Yup.string().required("Required")).min(1, "At least one responsibility is required"),
    jobRequirements: Yup.array().of(Yup.string().required("Required")).min(1, "At least one requirement is required"),
    company: Yup.string().required("Company name is required"),
    logo: Yup.string().url("Logo must be a valid URL").required("Logo URL is required"),
    currency: Yup.string().required("Currency is required"),
  });

  const [currentStep, setCurrentStep] = useState(0);

  return (
    <section className="flex items-center justify-center w-full h-screen">
      <Formik
        initialValues={jobPost}
        validationSchema={validationSchema}
        validateOnBlur={true}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await setJobPost(values);
            const status = await postJob();
            if(status) {
              alert("Job posted successfully");
            }else {
              alert("Error posting job");
            }
          } catch (error) {
            console.error("Job submission error:", error);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched }) => (
          <>
            <Form className="flex flex-col bg-white rounded-2xl shadow-lg justify-center w-120 -mt-24 p-4 h-fit relative overflow-hidden">
              <h1 className="text-[#0034D1] text-2xl font-semibold">Post a Job</h1>

              <Stepper
                steps={["Basic Info", "Job Details", "More Detail Descriptions", "Company Info"]}
                activeStep={currentStep}
                onStepClick={setCurrentStep}
                styleConfig={{
                  activeBgColor: "#0034D1",
                  inactiveBgColor: "#e0e0e0",
                  completedBgColor: "#4caf50",
                  activeTextColor: "#fff",
                  inactiveTextColor: "#000",
                  completedTextColor: "#fff",
                }}
              />

              {inputFields[currentStep].map((field) => {
                let options;
                if (field === "type") options = typeOptions;
                if (field === "experienceLevel") options = experienceLevelOptions;
                if (field === "currency") options = currencyOptions;

                return (
                  <div key={field} className="mb-2">
                    {field === "detailsDescription" ? (
                      <div>
                        <label className="capitalize">{field.replace(/([A-Z])/g, " $1").trim()}:</label>
                        <Field
                          as="textarea"
                          name={field}
                          className="border border-gray-300 rounded-md w-full p-2 h-28"
                        />
                      </div>
                    ) : field === "jobResponsibilities" || field === "jobRequirements" ? (
                      <ListInput name={field} label={field.replace(/([A-Z])/g, " $1").trim()} />
                    ) : (
                      <Field name={field} component={options ? JobPostSelect : PostInput} options={options} />
                    )}
                    <ErrorMessage name={field} component="div" className="text-red-500 text-sm" />
                  </div>
                );
              })}

              {loading && (
                <div className="absolute top-0 left-0 loadingContainer w-full h-full flex justify-center items-center">
                  <div className="bg-[#00000047] bg-opacity-50 w-full h-full flex justify-center items-center">
                    <div className="loader"></div>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-4">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
                    className="bg-gray-300 text-black rounded-md w-32 h-10"
                  >
                    Previous
                  </button>
                )}

                {currentStep < inputFields.length - 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      if (!Object.keys(errors).some((key) => touched[key])) {
                        setCurrentStep((prev) => Math.min(prev + 1, inputFields.length - 1));
                      }
                    }}
                    className="bg-[#0034D1] text-white rounded-md w-32 h-10"
                  >
                    Next
                  </button>
                )}
              </div>

              {currentStep === inputFields.length - 1 && (
                <button type="submit" className="bg-[#0034D1] text-white rounded-md w-full h-10 mt-5" disabled={loading}>
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
