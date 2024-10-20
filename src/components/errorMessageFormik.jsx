import { ErrorMessage, Field } from "formik";

const ErrorMessageFormik = ({name}) => {
  return (
    <div>
      <Field>
        {({ form }) => (

          <>
            <div className="text-danger">{form.errors[name]}</div>
          </>
        )}
      </Field>
    </div>
  );
};

export default ErrorMessageFormik;
