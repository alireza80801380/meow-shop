import { useNavigate } from "react-router-dom";
import Content from "../../pages/content";
import Navbar from "./navbar";
import useIslogin from "../../hook/Islogin";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [isLogin] = useIslogin();
  useEffect(() => {
    {isLogin ? (location.pathname === "/login" || location.pathname === "/signup" ? navigate("/") : <></>) : <></>}
    {!isLogin ? (location.pathname === "/profile" ? navigate("/") : <></>) : <></>}
  },[isLogin])
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
};
export default Index;
