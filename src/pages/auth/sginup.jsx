import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import FormikControl from "../../components/formikcontrol";
import { initialValues, submit, validationSchema } from "./core";
import SubmitButton from "../../components/submitButton";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="form__body d-flex flex-column text-center position-relative">
      <div className="container">
        <div className="row align-items-center justify-content-center form__body--inputs--img">
          <div className="col-4 d-flex flex-column">
            <h1>ثبت نام</h1>
            <Formik
            initialValues={initialValues}
            onSubmit={(values) => submit(values,navigate)}
            validationSchema={validationSchema}>
              {( Formik ) => {
                return (
                  <Form>
                    <FormikControl
                      control="input"
                      name="frist__name"
                      className="my-3 inputs col-12"
                      placeholder={"نام"}
                    />
                    <FormikControl
                      control="input"
                      name="last__name"
                      className="my-3 inputs col-12"
                      placeholder={"نام خانوادگی"}
                    />
                    <FormikControl
                      control="input"
                      name="phone"
                      className="my-3 inputs col-12"
                      placeholder={"شماره موبایل"}
                    />
                    <FormikControl
                      control="input"
                      name="email"
                      className="my-3 inputs col-12"
                      placeholder={"ایمیل"}
                    />
                    <FormikControl
                      control="input"
                      name="password"
                      className="my-3 inputs col-12"
                      placeholder={"رمز عبور"}
                    />
                    <SubmitButton buttontext="ثبت نام" />
                  </Form>
                );
              }}
            </Formik>
            <Link className="text-decoration-none" to={"/login"}>
              ثبت نام کرده ام
            </Link>
          </div>
          <div className="col-6 div__img--user">
            <img src="../img/9187604.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
