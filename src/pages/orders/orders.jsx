import { getOrderService } from "../../services/user/user";
import {apiUrl} from "../../services/config.json"
import { useEffect, useState } from "react";

const Orders = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await getOrderService();
    if (res.status === 200) {
      setData(res.data.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
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
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center text-white">سفارشات  خالی است</h1>
        )}
      </div>
    </div>
  );
};

export default Orders;
