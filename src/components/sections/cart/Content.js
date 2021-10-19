import React from 'react'
import CartProducts from './CartProducts';
import SubTotal from './Subtotal';

const Content = () => {
    return (
        <>
            <div className="container pb-5 mb-2 mb-md-4">
                <div className="row">
                    <CartProducts />
                    <SubTotal />
                </div>
            </div>
        </>
    )
}

export default Content
