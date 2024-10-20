import { useEffect, useState } from "react";
import { Auth } from "../services/auth/auth";
import { useDispatch } from "react-redux";
import { send_request_success } from "../redux/actions";
const useIslogin = () => {
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(false);
    const [loading,setLoading] = useState(false)

    const getLogin = async () => {
        setLoading(true)
        const res = await Auth();   
        dispatch(send_request_success(res.data.data))
        if (res.status === 200) {
            setIsLogin(true);
            setLoading(false)
        }
    }
    useEffect(() => {
        if(localStorage.getItem('loginToken')){
            getLogin();
        }
    }, []);


    return [isLogin,loading];
}

export default useIslogin;
