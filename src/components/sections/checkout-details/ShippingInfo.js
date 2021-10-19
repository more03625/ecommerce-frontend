import React from 'react'

const ShippingInfo = () => {
    return (
        <>
                    <section className="col-lg-8">
                        <div className="steps steps-light pt-2 pb-3 mb-5"><a className="step-item active" href="shop-cart.html">
                            <div className="step-progress"><span className="step-count">1</span></div>
                            <div className="step-label"><i className="ci-cart"></i>Cart</div></a><a className="step-item active current" href="checkout-details.html">
                                <div className="step-progress"><span className="step-count">2</span></div>
                                <div className="step-label"><i className="ci-user-circle"></i>Details</div></a><a className="step-item" href="checkout-shipping.html">
                                <div className="step-progress"><span className="step-count">3</span></div>
                                <div className="step-label"><i className="ci-package"></i>Shipping</div></a><a className="step-item" href="checkout-payment.html">
                                <div className="step-progress"><span className="step-count">4</span></div>
                                <div className="step-label"><i className="ci-card"></i>Payment</div></a><a className="step-item" href="checkout-review.html">
                                <div className="step-progress"><span className="step-count">5</span></div>
                                <div className="step-label"><i className="ci-check-circle"></i>Review</div></a></div>
                        <div className="d-sm-flex justify-content-between align-items-center bg-secondary p-4 rounded-3 mb-grid-gutter">
                            <div className="d-flex align-items-center">
                                <div className="img-thumbnail rounded-circle position-relative flex-shrink-0"><span className="badge bg-warning position-absolute end-0 mt-n2" data-bs-toggle="tooltip" title="Reward points">384</span>
                                <img className="rounded-circle" src="img/shop/account/avatar.jpg" width="90" alt="Susan Gardner" /></div>
                                <div className="ps-3">
                                    <h3 className="fs-base mb-0">Susan Gardner</h3><span className="text-accent fs-sm">s.gardner@example.com</span>
                                </div>
                            </div><a className="btn btn-light btn-sm btn-shadow mt-3 mt-sm-0" href="account-profile.html"><i className="ci-edit me-2"></i>Edit profile</a>
                        </div>
                        <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">Shipping address</h2>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkout-fn">First Name</label>
                                    <input className="form-control" type="text" id="checkout-fn" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkout-ln">Last Name</label>
                                    <input className="form-control" type="text" id="checkout-ln" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkout-email">E-mail Address</label>
                                    <input className="form-control" type="email" id="checkout-email" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkout-phone">Phone Number</label>
                                    <input className="form-control" type="text" id="checkout-phone" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkout-company">Company</label>
                                    <input className="form-control" type="text" id="checkout-company" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkout-country">Country</label>
                                    <select className="form-select" id="checkout-country">
                                        <option>Choose country</option>
                                        <option>Australia</option>
                                        <option>Canada</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                        <option>Switzerland</option>
                                        <option>USA</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkout-city">Country</label>
                                    <select className="form-select" id="checkout-city">
                                        <option>Choose city</option>
                                        <option>Amsterdam</option>
                                        <option>Berlin</option>
                                        <option>Geneve</option>
                                        <option>New York</option>
                                        <option>Paris</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkout-zip">ZIP Code</label>
                                    <input className="form-control" type="text" id="checkout-zip" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkout-address-1">Address 1</label>
                                    <input className="form-control" type="text" id="checkout-address-1" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="checkout-address-2">Address 2</label>
                                    <input className="form-control" type="text" id="checkout-address-2" />
                                </div>
                            </div>
                        </div>
                        <h6 className="mb-3 py-3 border-bottom">Billing address</h6>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked id="same-address" />
                            <label className="form-check-label" htmlFor="same-address">Same as shipping address</label>
                        </div>
                        <div className="d-none d-lg-flex pt-4 mt-3">
                            <div className="w-50 pe-3"><a className="btn btn-secondary d-block w-100" href="shop-cart.html"><i className="ci-arrow-left mt-sm-0 me-1"></i><span className="d-none d-sm-inline">Back to Cart</span><span className="d-inline d-sm-none">Back</span></a></div>
                            <div className="w-50 ps-2"><a className="btn btn-primary d-block w-100" href="checkout-shipping.html"><span className="d-none d-sm-inline">Proceed to Shipping</span><span className="d-inline d-sm-none">Next</span><i className="ci-arrow-right mt-sm-0 ms-1"></i></a></div>
                        </div>
                    </section>
        </>
    )
}

export default ShippingInfo
