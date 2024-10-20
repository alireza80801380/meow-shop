import Input from "./input";
import Select from "./select";




const FormikControl = ({ ...props }) => {
    // eslint-disable-next-line react/prop-types
    switch (props.control) {
        case "input":
            return <Input {...props} />;
        case "select":
            return <Select {...props} />;
        default:
            return null;
    }
};

export default FormikControl