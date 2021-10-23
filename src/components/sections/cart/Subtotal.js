import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { convertToINR } from '../../../helpers/comman_helpers';

const Subtotal = ({ cart }) => {

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const updateValues = () => {
    var items = 0;
    var price = 0;

    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.discounted_price
    });
    console.log(price)
    setTotalPrice(price);
    setTotalItems(items);
  }

  useEffect(() => {
    updateValues();
  }, [cart, totalItems, totalItems, setTotalPrice, setTotalItems]);

  return (
    <>
      <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
        <div className="bg-white rounded-3 shadow-lg p-4">
          <div className="py-2 px-xl-2">
            <div className="text-center mb-4 pb-3 border-bottom">
              <h2 className="h6 mb-3 pb-1">Subtotal ( {totalItems} Items )</h2>
              <h3 className="fw-normal">{convertToINR(totalPrice)}</h3>
            </div>
            <a className="btn btn-primary btn-shadow d-block w-100 mt-4" href="#">
              <i className="ci-card fs-lg me-2"></i>Proceed to Checkout
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  }
}

export default connect(mapStateToProps)(Subtotal)
