import { SEND_REQUEST, SEND_REQUEST_ERROR, SEND_REQUEST_SUCCESS } from "./type"

const initial = {
    loading : false,
    date : [],
    error : ''
}


const userReducer = (state=initial, action)=>{
    switch (action.type){
        case SEND_REQUEST:
            return {...state, loading: true}
        case SEND_REQUEST_SUCCESS:
            return {loading: false, data: action.payload, error: ""}
        case SEND_REQUEST_ERROR:
            return {loading: false, data: [], error: action.payload}
        default:
            return state
    }
}

export default userReducer