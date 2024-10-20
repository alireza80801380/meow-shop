import { useEffect, useState } from "react";
import { checkPaymentServicese } from "../../services/user/user";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();
  const navigate = useNavigate();

  const cheakPayment = async () => {
    setLoading(true);
    const res = await checkPaymentServicese();
    if (res.status === 200) {
      setResult(res.data.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    cheakPayment();
  }, []);

  return (
    <div className="payment_body">
      <div className="container text-center">
        <div className="d-flex flex-column align-items-center justify-content-center payment_text">
          <div className="col-6">
            <i
              className={
                result?.result === 201
                  ? `bi bi-bag-check-fill text-success`
                  : "bi bi-bag-dash-fill text-danger"
              }
              aria-hidden="true"
              style={{ color: "green" }}
            ></i>
          </div>
          {loading ? (
              <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <div
              className={`col-6 ${
                result?.result === 201 ? "text-success" : "text-danger"
              }`}
            >
              <span className="h4">
                {result?.result === 201
                  ? "پرداخت موفقیت آمیز بود"
                  : "پرداخت ناموفق"}
              </span>
            </div>
          )}
          <button
            className="btn btn-secondary mt-3"
            onClick={() => {
              navigate("/");
            }}
          >
            بازگشت به صفحه اصلی
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
