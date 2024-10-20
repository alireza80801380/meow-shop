import { Form, Formik } from "formik";
import { useSelector } from "react-redux";
import FormikControl from "../../components/formikcontrol";
import { initialValues, submit, validationSchema } from "./core";
import { useEffect, useState } from "react";

const Profile = () => {
  const [reinitate, setReinitate] = useState({});
  const user = useSelector((state) => state.userReducer);
  const userData = user.data;

  useEffect(()=>{
    if(userData){
      setReinitate(userData)
    }
  },[])

  return (
    <div className="form__body text-center position-relative">
      <div className="container">
        <Formik
        initialValues={reinitate||initialValues}
        onSubmit={(values) => submit(values,userData.id)}
        validationSchema={validationSchema}
        enableReinitialize
        >
          <Form>
            <div className="row align-items-center form__body--inputs--img">
              <h1>اطلاعات کاربر</h1>
              <div className="col-6 text-start">
                <FormikControl
                  control="input"
                  name="frist__name"
                  className="my-3 inputs"
                  placeholder="نام"
                />
              </div>
              <div className="col-6 text-end">
                <FormikControl
                  control="input"
                  name="last__name"
                  className="my-3 inputs"
                  placeholder="نام خانوادگی"
                />
              </div>
              <div className="col-6 text-start">
                <FormikControl
                  control="input"
                  name="phone"
                  className="my-3 inputs"
                  placeholder="شماره تلفن"
                />
              </div>
              <div className="col-6 text-end">
                <FormikControl
                  control="input"
                  name="email"
                  className="my-3 inputs"
                  placeholder="ایمیل"
                />
              </div>
              <div className="col-6 text-start">
                <FormikControl
                  control="input"
                  name="password"
                  className="my-3 inputs"
                  placeholder="رمز عبور"
                />
              </div>
              <div className="col-6 text-end">
                <FormikControl
                  control="input"
                  name="confirm__password"
                  className="my-3 inputs"
                  placeholder="تکرار رمز عبور"
                />
              </div>
            </div>
            <div className="mt-5">
              <button className="btn btn-primary my-3">ویرایش</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
