import * as Yup from "yup";
import { SwalAlert } from "../../util/swalAlert";
import { Signup } from "../../services/auth/auth";



export const initialValues = {
    frist__name: "",
    last__name: "",
    email: "",
    phone: "",
    password: "",
};
export const submit = async (value,navigate) => {
    const res = await Signup(value)    
    if (res.status == 201) {
        await SwalAlert("ثبت نام با موفقیت انجام شد", "", "success", "باشه");
        return navigate('/')
    }else{
        return SwalAlert("خطا", res.data.message, "error", "باشه");
    }
}
export const validationSchema = Yup.object({
    frist__name: Yup.string().required("نام الزامی است"),
    last__name: Yup.string().required("نام خانوادگی الزامی است"),
    email: Yup.string().required("ایمیل الزامی است").email("ایمیل نامعتبر است"),
    phone: Yup.number().required("شماره تلفن الزامی است"),
    password: Yup.string().required("رمز عبور الزامی است"),
    product_id: Yup.string(),
})