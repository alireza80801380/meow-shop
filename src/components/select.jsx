import {Field } from "formik";

// eslint-disable-next-line react/prop-types
const Select = ({ options, name }) => {
  return options.map((option) => (
    <>
      <label className="form-check-label" key={option.value} form={option.id}>
        {option.value}
      </label>
      <Field
        className="form-check-input mx-2"
        key={option.id + option.value}
        type="radio"
        name={name}
        value={option.value}
        id={option.id}
      />
    </>
  ));
};

export default Select;
