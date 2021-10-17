import React from 'react'
import footerLogo from '../../assets/images/logo/footer-logo-light.png';
import paymentPartners from '../../assets/images/logo/payment-partners.png';
import { Toaster } from 'react-hot-toast';
const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark pt-5">
                <Toaster/>
                <div className="container">
                    <div className="row pb-2">
                        <div className="col-md-4 col-sm-6">
                            <div className="widget widget-links widget-light pb-2 mb-4">
                                <h3 className="widget-title text-light">Shop departments</h3>
                                <ul className="widget-list">
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Sneakers &amp; Athletic</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Athletic Apparel</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Sandals</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Jeans</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Shirts &amp; Tops</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Shorts</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">T-Shirts</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Swimwear</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Clogs &amp; Mules</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Bags &amp; Wallets</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Accessories</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Sunglasses &amp; Eyewear</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Watches</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="widget widget-links widget-light pb-2 mb-4">
                                <h3 className="widget-title text-light">Account &amp; shipping info</h3>
                                <ul className="widget-list">
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Your account</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Shipping rates &amp; policies</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Refunds &amp; replacements</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Order tracking</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Delivery info</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Taxes &amp; fees</a></li>
                                </ul>
                            </div>
                            <div className="widget widget-links widget-light pb-2 mb-4">
                                <h3 className="widget-title text-light">About us</h3>
                                <ul className="widget-list">
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">About company</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Our team</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">Careers</a></li>
                                    <li className="widget-list-item"><a className="widget-list-link" href="#">News</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget pb-2 mb-4">
                                <h3 className="widget-title text-light pb-1">Stay informed</h3>
                                <form className="subscription-form validate" action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=29ca296126" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                                    <div className="input-group flex-nowrap"><i className="ci-mail position-absolute top-50 translate-middle-y text-muted fs-base ms-3"></i>
                                        <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" required />
                                        <button className="btn btn-primary" type="submit" name="subscribe">Subscribe*</button>
                                    </div>
                                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                                        <input className="subscription-form-antispam" type="text" name="b_c7103e2c981361a6639545bd5_29ca296126" tabIndex="-1" />
                                    </div>
                                    <div className="form-text text-light opacity-50">*Subscribe to our newsletter to receive early discount offers, updates and new products info.</div>
                                    <div className="subscription-status"></div>
                                </form>
                            </div>
                            <div className="widget pb-2 mb-4">
                                <h3 className="widget-title text-light pb-1">Download our app</h3>
                                <div className="d-flex flex-wrap">
                                    <div className="me-2 mb-2"><a className="btn-market btn-apple" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">App Store</span></a></div>
                                    <div className="mb-2"><a className="btn-market btn-google" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">Google Play</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-5 bg-darker">
                    <div className="container">
                        <div className="row pb-3">
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="d-flex"><i className="ci-rocket text-primary" style={{ fontSize: "2.25rem" }}></i>
                                    <div className="ps-3">
                                        <h6 className="fs-base text-light mb-1">Fast and free delivery</h6>
                                        <p className="mb-0 fs-ms text-light opacity-50">Free delivery for all orders over $200</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="d-flex"><i className="ci-currency-exchange text-primary" style={{ fontSize: "2.25rem" }}></i>
                                    <div className="ps-3">
                                        <h6 className="fs-base text-light mb-1">Money back guarantee</h6>
                                        <p className="mb-0 fs-ms text-light opacity-50">We return money within 30 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="d-flex"><i className="ci-support text-primary" style={{ fontSize: "2.25rem" }}></i>
                                    <div className="ps-3">
                                        <h6 className="fs-base text-light mb-1">24/7 customer support</h6>
                                        <p className="mb-0 fs-ms text-light opacity-50">Friendly 24/7 customer support</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mb-4">
                                <div className="d-flex"><i className="ci-card text-primary" style={{ fontSize: "2.25rem" }}></i>
                                    <div className="ps-3">
                                        <h6 className="fs-base text-light mb-1">Secure online payment</h6>
                                        <p className="mb-0 fs-ms text-light opacity-50">We possess SSL / Secure сertificate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="hr-light mb-5" />
                        <div className="row pb-2">
                            <div className="col-md-6 text-center text-md-start mb-4">
                                <div className="text-nowrap mb-4"><a className="d-inline-block align-middle mt-n1 me-3" href="#">
                                    <img className="d-block" src={footerLogo} width="117" alt="Cartzilla" /></a>

                                </div>
                                <div className="widget widget-links widget-light">
                                    <ul className="widget-list d-flex flex-wrap justify-content-center justify-content-md-start">
                                        <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Outlets</a></li>
                                        <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Affiliates</a></li>
                                        <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Support</a></li>
                                        <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Privacy</a></li>
                                        <li className="widget-list-item me-4"><a className="widget-list-link" href="#">Terms of use</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-end mb-4">
                                <div className="mb-3"><a className="btn-social bs-light bs-twitter ms-2 mb-2" href="#"><i className="ci-twitter"></i></a><a className="btn-social bs-light bs-facebook ms-2 mb-2" href="#"><i className="ci-facebook"></i></a><a className="btn-social bs-light bs-instagram ms-2 mb-2" href="#"><i className="ci-instagram"></i></a><a className="btn-social bs-light bs-pinterest ms-2 mb-2" href="#"><i className="ci-pinterest"></i></a><a className="btn-social bs-light bs-youtube ms-2 mb-2" href="#"><i className="ci-youtube"></i></a></div>
                                <img className="d-inline-block" src={paymentPartners} width="187" alt="Payment methods" />
                            </div>
                        </div>
                        <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved.Made by <a className="text-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></div>
                    </div>
                </div>
            </footer>
            {/*Toolbar for handheld devices (Default)*/}
            <div className="handheld-toolbar" >
                <div className="d-table table-layout-fixed w-100">
                    <a className="d-table-cell handheld-toolbar-item" href="account-wishlist.html">
                        <span className="handheld-toolbar-icon">
                            <i className="ci-heart"></i>
                        </span>
                        <span className="handheld-toolbar-label">Wishlist</span>
                    </a>
                    <a className="d-table-cell handheld-toolbar-item" href="#" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={window.scrollTo(0, 0)}>
                        <span className="handheld-toolbar-icon">
                            <i className="ci-menu"></i>
                        </span>
                        <span className="handheld-toolbar-label">Menu</span>
                    </a>
                    <a className="d-table-cell handheld-toolbar-item" href="shop-cart.html">
                        <span className="handheld-toolbar-icon"><i className="ci-cart"></i>
                            <span className="badge bg-primary rounded-pill ms-1">4</span>
                        </span><span className="handheld-toolbar-label">$265.00</span>
                    </a>
                </div>
            </div>
            {/*Back To Top Button*/}
            <a className="btn-scroll-top" href="#top" data-scroll >
                <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
                <i className="btn-scroll-top-icon ci-arrow-up">
                </i>
            </a>

        </>
    )
}

export default Footer
