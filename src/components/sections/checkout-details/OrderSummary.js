import React from 'react'

const Ordersummary = () => {
    return (
        <>
            <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
                <div className="bg-white rounded-3 shadow-lg p-4 ms-lg-auto">
                    <div className="py-2 px-xl-2">
                        <div className="widget mb-3">
                            <h2 className="widget-title text-center">Order summary</h2>
                            <div className="d-flex align-items-center pb-2 border-bottom"><a className="d-block flex-shrink-0" href="#">
                                <img src="img/shop/cart/widget/01.jpg" width="64" alt="Product" /></a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title"><a href="#">Women Colorblock Sneakers</a></h6>
                                    <div className="widget-product-meta"><span className="text-accent me-2">$150.<small>00</small></span><span className="text-muted">x 1</span></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block flex-shrink-0" href="#">
                                <img src="img/shop/cart/widget/02.jpg" width="64" alt="Product" /></a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title"><a href="#">TH Jeans City Backpack</a></h6>
                                    <div className="widget-product-meta"><span className="text-accent me-2">$79.<small>50</small></span><span className="text-muted">x 1</span></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block flex-shrink-0" href="#">
                                <img src="img/shop/cart/widget/03.jpg" width="64" alt="Product" /></a>
                                <div className="ps-2">
                                    <h6 className="widget-product-title"><a href="#">3-Color Sun Stash Hat</a></h6>
                                    <div className="widget-product-meta"><span className="text-accent me-2">$22.<small>50</small></span><span className="text-muted">x 1</span></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-2 border-bottom"><a className="d-block flex-shrink-0" href="#">
                                <img src="img/shop/cart/widget/04.jpg" width="64" alt="Product" /></a>
                                <div className="ps-2">
                                <h6 className="widget-product-title"><a href="#">Cotton Polo Regular Fit</a></h6>
                            <div className="widget-product-meta"><span className="text-accent me-2">$9.<small>00</small></span><span className="text-muted">x 1</span></div>
                            </div>
                            
                    </div>
                        <ul className="list-unstyled fs-sm pb-2 border-bottom">
                        <li className="d-flex justify-content-between align-items-center"><span className="me-2">Subtotal:</span><span className="text-end">$265.<small>00</small></span></li>
                        <li className="d-flex justify-content-between align-items-center"><span className="me-2">Shipping:</span><span className="text-end">—</span></li>
                        <li className="d-flex justify-content-between align-items-center"><span className="me-2">Taxes:</span><span className="text-end">$9.<small>50</small></span></li>
                    <li className="d-flex justify-content-between align-items-center"><span className="me-2">Discount:</span><span className="text-end">—</span></li>
                    </ul>
                    <h3 className="fw-normal text-center my-4">$274.<small>50</small></h3>

                        <form className="needs-validation" method="post" noValidate>
                            <div className="mb-3">  
                                <input className="form-control" type="text" placeholder="Promo code" required />
                                <div class ="invalid-feedback">Please provide promo code.</div>
                            </div>
                        <button className="btn btn-outline-primary d-block w-100" type="submit">Apply promo code</button>
                    </form>
                </div>
            </div>
            </div>
    </aside>
        </>
    )
}
        
export default Ordersummary
