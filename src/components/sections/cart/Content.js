import React from 'react'
import CartProducts from './CartProducts';
import SubTotal from './Subtotal';
import { connect } from 'react-redux';
import PageTitle from '../product-details/PageTitle';
const Content = ({cart}) => {
    return (
        <>
        <PageTitle />
            <div className="container pb-5 mb-2 mb-md-4">
                <div className="row">
                    {
                        cart.map((item) => (
                            <CartProducts key={item._id} product={item}/>
                        ))
                    }
                    
                    <SubTotal />
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        cart:state.shop.cart
    }
}
export default connect(mapStateToProps)(Content)
