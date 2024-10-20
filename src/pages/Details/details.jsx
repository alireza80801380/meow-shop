import { useLocation } from "react-router-dom";
import { addCartService } from "../../services/user/user";
import { SwalAlert } from "../../util/swalAlert";
import { useEffect, useState } from "react";
import { getSingelProduct } from "../../services/product/product";
import { apiUrl } from "../../services/config.json";

const Details = () => {
  const location = useLocation();
  const [product, setProduct] = useState({});
  const addCarts = async (id) => {
    const res = await addCartService(id);
    if (res.status == 200) {
      SwalAlert("محصول با موفقیت به سبد خرید اضافه شد", "", "success", "باشه");
    }
  };
  const getData = async () => {
    const res = await getSingelProduct(location.state);
    if (res.status == 200) {
      setProduct(res.data.data);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="body_productdetiles">
      {product ? (
        <div className="container mt-5" key={product._id}>
          <div className="row">
            <div className="col-lg-6">
              <img
                src={apiUrl + "/" + product.image}
                alt="Product Image"
                className="product-image mt-3"
              />
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 className="product-title mb-3">{product.product__name}</h1>
              <span className="product-price" style={{ color: "rgba(124, 124, 124, 1)" }}>
                <span className="h4" style={{ color: "rgba(1, 149, 135, 1)" }}>{product.product__price}</span>تومان
              </span>
              <div className="product-description">
                <h3>توضیحات</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی
                </p>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => addCarts(location.state)}
              >
                افزودن به سبد
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>محصولی یافت نشد</h1>
      )}
    </div>
  );
};

export default Details;
