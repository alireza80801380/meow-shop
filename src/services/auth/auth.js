import HttpServices from "../httpsevices"


export const Signup = (data) => {
    return HttpServices("users/signup", "POST", data)
}
export const login = (data) => {
    return HttpServices("users/login", "post", data)
}
export const Auth = () => {
    return HttpServices("users/Islogin", "get")
}
