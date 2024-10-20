import { ErrorMessage, FastField } from "formik";
import ErrorMessageFormik from "./errorMessageFormik";

// eslint-disable-next-line react/prop-types
const Input = ({ className, name, type, placeholder }) => {
  return (
    <>
      <FastField
        name={name}
        className={className}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessageFormik name={name}/>
    </>
  );
};

export default Input;
