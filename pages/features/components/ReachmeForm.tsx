import { TextField } from "@mui/material";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, useFormik } from "formik";

interface initialFormValuesProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const formValuesSchema = Yup.object().shape({
  firstName: Yup.string().min(1).max(16).required("First name is required"),
  lastName: Yup.string().min(1).max(16).required("Last name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Please provide the email in correct format"),
  phone: Yup.number().required("Phone number is required"),
});

const ReachMeForm = () => {
  const initialFormValues: initialFormValuesProps = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const [values, setValues] =
    useState<initialFormValuesProps>(initialFormValues);

  const SignupForm = () => {
    return (
      <Formik
        initialValues={values}
        validationSchema={formValuesSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched, values, setValues }) => (
          <Form>
            <label className="text-xs font-bold underline">
              Reach out to me through below...
            </label>
            <div className="flex flex-col gap-4 p-4 rounded bg-#cbd5e1">
              <div>
                <TextField
                  sx={{
                    input: {
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "4px",
                    },
                  }}
                  onChange={(e) => {
                    const { name, id, value } = e.target;
                    setValues({ ...values, [name]: value });
                  }}
                  defaultValue={values.firstName}
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  variant="outlined"
                />
                <div>
                  <ErrorMessage name={"firstName"} />
                </div>
              </div>{" "}
              <div>
                <TextField
                  sx={{
                    input: {
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "4px",
                    },
                  }}
                  onChange={(e) => {
                    const { name, id, value } = e.target;
                    setValues({ ...values, [name]: value });
                  }}
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  variant="outlined"
                />
                <div>
                  <ErrorMessage name={"lastName"} />
                </div>
              </div>{" "}
              <div>
                <TextField
                  sx={{
                    input: {
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "4px",
                    },
                  }}
                  onChange={(e) => {
                    const { name, id, value } = e.target;
                    setValues({ ...values, [name]: value });
                  }}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  variant="outlined"
                />
                <div>
                  <ErrorMessage name={"email"} />
                </div>
              </div>{" "}
              <div>
                <TextField
                  sx={{
                    input: {
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "4px",
                    },
                  }}
                  onChange={(e) => {
                    const { name, id, value } = e.target;
                    setValues({ ...values, [name]: value });
                  }}
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  variant="outlined"
                />
                <div>
                  <ErrorMessage name={"phone"} />
                </div>
              </div>
              <div>
                <button className="bg-green-6 rounded w-[70px] h-[35px] text-lg font-bold">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    );
  };

  return <div>{<div>{SignupForm()}</div>}</div>;
};

export default ReachMeForm;
