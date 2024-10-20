// import { Auth } from "../services/auth/auth"
import { SEND_REQUEST_ERROR } from "./type"
import { SEND_REQUEST_SUCCESS } from "./type"
import { SEND_REQUEST } from "./type"

export const send_request = () => {
    return {type:SEND_REQUEST}
}
export const send_request_success = (date) => {
    return {type:SEND_REQUEST_SUCCESS , payload : date}
}
export const send_request_error = (error) => {
    return {type:SEND_REQUEST_ERROR, payload : error}
}




// export const getUserData = ()=>{
//     return async (dispatch)=>{
//         dispatch(send_request())
//         try {
//             const res = await Auth()            
//             if (res.status == 200) {
//                 dispatch(send_request_success(res.data.data))
//             }
//         } catch (error) {
//             dispatch(send_request_error(error))
//         }
//     }
// }