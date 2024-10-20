import { useState } from "react";
import { getAllProduct } from "../../services/product/product";
import { useEffect } from "react";
import { apiUrl } from "../../services/config.json";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const naivigate = useNavigate();
  const getData = async () => {
    const res = await getAllProduct();
    if (res.status == 200) {
      setData(res.data.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return data ? (
    <div className="container products">
      <div className="row justify-content-center align-items-center">
        {data.map((product) => (
          <div className="col-md-12 col-lg-3" key={product._id}>
            <div
              className="card mx-2 my-2 text-center"
              style={{ width: "18rem" }}
            >
              <img
                src={apiUrl + "/" + product.image}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title my-3">{product.product__name}</h5>
                <span className="list-spans-first">
                  {product.product__price}
                  <span className="list-spans-third mx-1">تومان</span>
                </span>
                <button
                  className="btn btn-success my-3"
                  onClick={() => naivigate(`/details`, { state: product._id })}
                >
                  جزییات
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h1>محصولی یافت نشد!!!</h1>
  );
};

export default Products;
