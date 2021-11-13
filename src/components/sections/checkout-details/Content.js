import React from 'react'
import ShippingInfo from './ShippingInfo';
import OrderSummary from './OrderSummary';
import PageTitle from '../product-details/PageTitle';

const Content = () => {
    
    return (
        <>
            <PageTitle title="Checkout" />
            <div className="container pb-5 mb-2 mb-md-4">
                <div className="row">
                    <ShippingInfo />
                    <OrderSummary />
                </div>

                <div className="row d-lg-none">
                    <div className="col-lg-8">
                        <div className="d-flex pt-4 mt-3">
                            <div className="w-50 pe-3">
                                <a className="btn btn-secondary d-block w-100" href="#">
                                    <i className="ci-arrow-left mt-sm-0 me-1"></i>
                                    <span className="d-none d-sm-inline">Back to Cart</span>
                                    <span className="d-inline d-sm-none">Back</span></a></div>
                            <div className="w-50 ps-2">
                                <a className="btn btn-primary d-block w-100" href="#">
                                    <span className="d-none d-sm-inline">Proceed to Shipping</span>
                                    <span className="d-inline d-sm-none">Next</span>
                                    <i className="ci-arrow-right mt-sm-0 ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
