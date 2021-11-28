import React from 'react'
import CartProducts from './CartProducts';
import SubTotal from './Subtotal';
import { connect } from 'react-redux';
import PageTitle from '../product-details/PageTitle';
import { Link } from 'react-router-dom';

const Content = ({ cart }) => {
    return (
        <>
            <PageTitle />
            <div className="container pb-5 mb-2 mb-md-4">
                <div className="row">
                    <section className="col-lg-8">
                        <div className="d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
                            <h2 className="h6 text-light mb-0">Products</h2>
                        </div>
                        {cart.length > 0 ? (
                            cart.map((item) => (
                                <CartProducts key={item._id} product={item} />
                            ))
                        ) : (
                            <section className="col-lg-8">
                                <div className="d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
                                    <h2 className="h6 text-light mb-0">Products</h2>
                                </div>
                                <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom">
                                    <p className="text-center justify-content-center">There are no products in your cart! Go to <Link to="/">Homepage</Link> </p>
                                </div>
                            </section>
                        )}
                    </section>
                    <SubTotal />
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Content)
