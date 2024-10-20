
// eslint-disable-next-line react/prop-types
const Reducerpay = ({ data }) => {

  // eslint-disable-next-line react/prop-types
  const totalPrice = data.reduce((accumulator, item) => {
    return accumulator + item.product_price * item.quantity;
  }, 0);

  return(
    <div>
      <span className="h4 mb-3 text-center text-white">مجموع کل خرید: {totalPrice} تومان</span>
    </div>
  )
};

export default Reducerpay;
