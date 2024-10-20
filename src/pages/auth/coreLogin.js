import * as Yup from "yup";
import { SwalAlert } from "../../util/swalAlert";
import { login } from "../../services/auth/auth";



export const initialValues = {
    email: "",
    phone: "",
    password: "",
    auth: ''
};
export const submit = async (value,navigate) => {
    const res = await login(value)
    if (res.status == 200) {
        await SwalAlert("ورود با موفقیت انجام شد", "", "success", "باشه");
        localStorage.setItem("loginToken", JSON.stringify({token:res.data.token}));
        await navigate('/');
        return window.location.reload();
    } else {
        return SwalAlert("خطا", res.data.message, "error", "باشه");
    }

}
export const validationSchema = Yup.object().shape({

    email: Yup.string().when("auth", {
        is: (auth) => auth === "ایمیل",
        then: () => Yup.string().required("ایمیل الزامی است").email("ایمیل نامعتبر است"),
    }),
    phone: Yup.number().when("auth", {
        is: (auth) => auth === "موبایل",
        then: () => Yup.number().required("شماره موبایل الزامی است"),
    }),
    password: Yup.string().required("رمز عبور الزامی است"),
})