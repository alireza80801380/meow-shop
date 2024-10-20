import { FastField } from "formik";

const SubmitButton = ({buttontext}) => {
  return (
    <div className="mb-3">
      <FastField>
        {({ form }) => (
          (
            <button
              type="submit"
              className="btn btn-primary"
              disabled={form.isSubmitting}
            >
              {buttontext}
            </button>
          )
        )}
      </FastField>
    </div>
  );
};

export default SubmitButton;
