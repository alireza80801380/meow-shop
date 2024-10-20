import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiUrl } from "../../services/config.json";
import {
  deleteOneCart,
  getPaymentService,
  getSingelUser,
} from "../../services/user/user";
import { SwalAlert } from "../../util/swalAlert";
import Reducerpay from "../../util/reducerpay";

const Cart = () => {
  const user = useSelector((state) => state.userReducer);
  const id = user.data?.id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async (id) => {
    if (id) {
      const res = await getSingelUser(id);
      if (res.status === 200) {
        setData(res.data.data.cart);
      }
    }
  };
  const deleteCart = async (id) => {
    const res = await deleteOneCart(id);
    if (res.status === 200) {
      setData((oldData) => oldData.filter((item) => item._id !== id));
      return SwalAlert("محصول با موفقیت از سبد حذف شد", "", "success", "باشه");
    }
  };
  const payment = async () => {
    setLoading(true);
    const res = await getPaymentService();
    if (res.status === 200) {
      setLoading(false);
      location.replace(
        `https://gateway.zibal.ir/start/${res.data.data.trackId}`
      );
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div className="cart__body">
      <div className="container">
        {data.length > 0 ? (
          data.map((product) => (
            <div key={product._id}>
              <div className="row align-items-center cart__items--first  mb-5">
                <div className="col-6 img__cart">
                  <img src={apiUrl + "/" + product.image} alt="" />
                </div>
                <div className="col-6">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-3">
                      <h5 className="card-title my-3">پوچ گربه سویا</h5>
                      <span className="list-spans-first">
                        {product.product_price}
                        <span className="list-spans-third mx-1">تومان</span>
                      </span>
                      <br />
                      <span>تعداد: {product.quantity}</span>
                    </div>
                    <div className="pe-auto col-3">
                      <i
                        className="bi bi-trash text-danger"
                        onClick={() => deleteCart(product._id)}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center text-white">سبد خرید خالی است</h1>
        )}
      </div>
      {data.length > 0 ? (
        <div className="text-center">
          <Reducerpay data={data} />
          <button className="btn btn-primary mt-4 mb-4" onClick={payment}>
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "پرداخت"
            )}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
