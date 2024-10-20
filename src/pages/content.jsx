import { Route, Routes } from "react-router-dom";
import Sginup from "./auth/sginup";
import SectionSite from "./section/sectionSite";
import Products from "./product/products";
import Login from "./auth/login";
import Profile from "./profile/profile";
import Cart from "./cart/cart";
import Payment from "./payment/payment";
import Orders from "./orders/orders";
import Details from "./Details/details";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<SectionSite />} />
      <Route path="/signup" element={<Sginup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/orders" element={<Orders />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<SectionSite />} />
    </Routes>
  );
};

export default Content;
