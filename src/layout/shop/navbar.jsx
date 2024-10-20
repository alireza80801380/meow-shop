import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SwalAlert } from "../../util/swalAlert";

const Navbar = () => {
  const user = useSelector((state) => state.userReducer);
  const userData = user.data;

  const logout = () => {
    localStorage.clear();
    SwalAlert("با موفقیت خارج شدید", "", "success", "باشه").then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  return (
    <div className="container header mb-5">
      <div className="row justify-content-between">
        <div className="col-1 col-md-1 col-lg-1">
          <img src="../img/20230427_124324 1logo.png" alt="" />
        </div>
        <div className="col-3 col-md-6 col-lg-4">
          <ul className="d-flex item p-0 m-0 ">
            <li className="mx-2">
              <Link className="list__item" to={"/"}>
                خانه
              </Link>
            </li>
            <li className="mx-2">
              <a className="list__item" href="">
                اموزش ها
              </a>
            </li>
            <li className="mx-2">
              <Link className="list__item" to={"/products"}>
                فروشگاه
              </Link>
            </li>
            <li>
              <div className="dropdown-center">
                <span className="dropdown-toggle" data-bs-toggle="dropdown">
                  دسته بندی ها
                </span>
                <ul className="dropdown-menu text-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      غذا های خشک
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      غذا های تر
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-4 col-md-3 col-lg-2 d-flex ">
          <input
            type="text"
            placeholder="جستجو..."
            className="input__body ms-3"
          />
          <Link className="button ms-4 col-1" to={"/cart"}>
            <i className="bi bi-cart-fill text-white button__body"></i>
          </Link>
        </div>
        {userData ? (
          <div className="dropdown col-2 col-md-2 col-lg-2 d-md-none d-lg-block">
            <button
              className="button_2 dropdown-toggle mx-4"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {userData.frist__name}
            </button>
            <ul className="dropdown-menu text-end">
              <li>
                <Link className="dropdown-item" to={"/profile"}>
                  پروفایل
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to={"/orders"}>
                  سفارش ها
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" onClick={logout}>
                  خروج
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="col-2 col-md-2 col-lg-3 button_2 d-md-none d-lg-block">
            <Link className={"button__body_2"} to={"/signup"}>
              ثبت نام | ورود
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
