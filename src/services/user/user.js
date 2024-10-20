import HttpServices from "../httpsevices"



export const upadateProfile = (id,data) => {
    return HttpServices(`users/updateusers/${id}`, "post", data)
}
export const addCartService = (id) => {
    return HttpServices(`users/addcart/${id}`,"get")
}
export const getSingelUser = (id) => {
    return HttpServices(`users/getsingel/${id}`,"get")
}
export const deleteOneCart = (id) => {
    return HttpServices(`users/deleteonecart/${id}`,"get")
}   
export const getPaymentService = () => {
    return HttpServices(`users/getpayment`,"get")
}
export const checkPaymentServicese = ()=>{
    return HttpServices("users/checkoutpayment","get")
}
export const getOrderService = ()=>{
    return HttpServices("users/getallcart","get")
}