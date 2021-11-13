import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router';
import { convertToINR, shippingValues } from '../../../helpers/comman_helpers'
const Ordersummary = ({ cart }) => {
    const history = useHistory();

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    
    const updateValues = () => {
      var items = 0;
      var price = 0;
  
      cart.forEach(item => {
        items += item.qty;
        price += item.qty * item.discounted_price
      });
      
      setTotalPrice(price);
      setTotalItems(items);
    }
    useEffect(() => {
        cart.length === 0 && history.push("/");
        updateValues()
    }, []);

  
    return (
        <>
            <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
                <div className="bg-white rounded-3 shadow-lg p-4 ms-lg-auto">
                    <div className="py-2 px-xl-2">
                        <div className="widget mb-3">
                            <h2 className="widget-title text-center">Order summary</h2>
                            {
                                cart.length > 0 ? cart.map((product, index) => (
                                    <div className="d-flex align-items-center pb-2 border-bottom"><a className="d-block flex-shrink-0" href="#">
                                        <img src={product.image[0]} width="64" alt={product.title} style={{maxWidth:"35px", objectFit:"cover"}}/></a>
                                        <div className="ps-2">
                                            <h6 className="widget-product-title">
                                                <a href="#">{product.title}</a>
                                            </h6>
                                            <div className="widget-product-meta">
                                                <span className="text-accent me-2">{convertToINR(product.discounted_price)}</span>
                                                <span className="text-muted">x {product.qty}</span></div>
                                        </div>
                                    </div>
                                )): ("")
                            }

                            <ul className="list-unstyled fs-sm pb-2 border-bottom">
                                <li className="d-flex justify-content-between align-items-center">
                                    <span className="me-2">Subtotal:</span>
                                    <span className="text-end">{convertToINR(totalPrice)}</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <span className="me-2">Shipping:</span>
                                    <span className="text-end">+ {convertToINR(shippingValues.shipping)}
                                    </span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <span className="me-2">Taxes:</span>
                                    <span className="text-end">
                                        + {convertToINR((+shippingValues.taxPercentage / 100) * totalPrice)}
                                    </span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <span className="me-2">Discount:</span>
                                    <span className="text-end">- {convertToINR((+shippingValues.discountPercentage / 100) * totalPrice)}</span>
                                </li>
                            </ul>
                            <h3 className="fw-normal text-center my-4">
                                {
                                    convertToINR((totalPrice + shippingValues.shipping + ((+shippingValues.taxPercentage / 100) * totalPrice)) - ((+shippingValues.discountPercentage / 100) * totalPrice))
                                }
                            </h3>


                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Ordersummary)