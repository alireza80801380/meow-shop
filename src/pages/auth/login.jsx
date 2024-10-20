import { Form, Formik } from "formik";
import FormikControl from "../../components/formikcontrol";
import SubmitButton from "../../components/submitButton";
import { initialValues, submit, validationSchema } from "./coreLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const authType = [
    { id: 1, value: "موبایل" },
    { id: 2, value: "ایمیل" },
  ];
  return (
    <div className="login__body--all">
      <div className="login__form__body d-flex flex-column text-center position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-center login__form__body--inputs--img">
            <div className="col-4 d-flex flex-column">
              <h1>ورود</h1>
              <Formik
                initialValues={initialValues}
                onSubmit={(values) => submit(values,navigate)}
                validationSchema={validationSchema}
              >
                {(Formik) => {                  
                  return (
                    <Form>
                      {!Formik.values.auth && <h4>نوع احراز هویت</h4>}
                      <FormikControl
                        control="select"
                        options={authType}
                        name="auth"
                        className="my-3 col-12"
                      />
                      {Formik.values.auth === "ایمیل" && (
                        <FormikControl
                          control="input"
                          name="email"
                          className="my-3 login__inputs col-12"
                          placeholder="ایمیل"
                        />
                      )}
                      {Formik.values.auth === "موبایل" && (
                        <FormikControl
                          control="input"
                          name="phone"
                          className="my-3 login__inputs col-12"
                          placeholder="شماره موبایل"
                        />
                      )}

                      <FormikControl
                        control="input"
                        name="password"
                        className="my-3 login__inputs col-12"
                        placeholder="رمز عبور"
                      />
                      <SubmitButton buttontext="ورود" />
                    </Form>
                  );
                }}
              </Formik>
            </div>
            <div className="col-6 login__div__img--user img">
              <img src="../img/9187604.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
