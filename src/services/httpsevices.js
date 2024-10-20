import axios from "axios";
import Config from "../services/config.json";
import { SwalAlert } from "../util/swalAlert";








axios.interceptors.response.use((res) => {

    if (res.status !== 200 && res.status !== 201) {

        if (typeof(res.data) == 'object') {
            let message = ""
            for (const key in res.data) {
                message = message + `${res.data[key]}`
            }
            res.data.message = message
            SwalAlert("خطا!", res.data.message, "error", "باشه");
        }
    }
    return res
}, (error) => {
    SwalAlert("خطا!", error.response.status, "error", "باشه");
    return Promise.reject(error)
})




const HttpServices = (url, method, data=null) => {
    const tokeninfo = JSON.parse(localStorage.getItem('loginToken'))    
    return axios({
        url: Config.apiUrl+"/"+ url,
        method,
        headers: {
            'Authorization': tokeninfo ? `Bearer ${tokeninfo.token}` : null,
            "Content-Type": "application/json",
        },
        data
    })
}





export default HttpServices