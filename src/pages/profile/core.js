import * as Yup from "yup";
import { upadateProfile } from "../../services/user/user";
import { SwalAlert } from "../../util/swalAlert";


export const initialValues = {
    frist__name: "",
    last__name: "",
    email: "",
    phone: "",
    password: "",
}
export const submit = async (valuse,id)=>{    
    valuse = {
        frist__name: valuse.frist__name,
        last__name: valuse.last__name,
        email: valuse.email,
        phone: valuse.phone,
    }
    const res = await upadateProfile(id,valuse) 
    if (res.status == 200) {
        return SwalAlert("ویرایش اطلاعات با موفقیت انجام شد", "", "success", "باشه")
    }
}
export const validationSchema = Yup.object().shape({
    frist__name: Yup.string().required("نام الزامی است"),
    last__name: Yup.string().required("نام خانوادگی الزامی است"),
    email: Yup.string().required("ایمیل الزامی است").email("ایمیل نامعتبر است"),
    phone: Yup.number().required("شماره تلفن الزامی است"),
})