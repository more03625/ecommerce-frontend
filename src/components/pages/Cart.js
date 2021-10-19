import React from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'
import Content from '../sections/cart/Content'
import PageTitle from '../sections/product-details/PageTitle'

const Cart = () => {
    return (
        <>
            <Header />
            <PageTitle />
            <Content/>
            <Footer />
        </>
    )
}

export default Cart
