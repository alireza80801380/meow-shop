import HttpServices from "../httpsevices"

export const getAllProduct = () => {
    return HttpServices("product", "get")
}
export const getSingelProduct = (id) => {
    return HttpServices(`product/${id}`, "get")
}