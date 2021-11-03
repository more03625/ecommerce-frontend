import React from 'react'
import footerLogo from '../../assets/images/logo/footer-logo-light.png';
import paymentPartners from '../../assets/images/logo/payment-partners.png';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark pt-5">
                <Toaster />
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
                                <div className="text-nowrap mb-4">
                                    <Link className="d-inline-block align-middle mt-n1 me-3" to="/">
                                        <img className="d-block" src={footerLogo} width="117" alt="Cartzilla" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-md-end mb-4">
                                <div className="mb-3">
                                    <a className="btn-social bs-light bs-twitter ms-2 mb-2" href="#">
                                        <i className="ci-twitter"></i>
                                    </a>
                                    <a className="btn-social bs-light bs-facebook ms-2 mb-2" href="#">
                                        <i className="ci-facebook"></i>
                                    </a>
                                    <a className="btn-social bs-light bs-instagram ms-2 mb-2" href="#">
                                        <i className="ci-instagram"></i>
                                    </a>
                                    <a className="btn-social bs-light bs-youtube ms-2 mb-2" href="#">
                                        <i className="ci-youtube"></i>
                                    </a>
                                </div>
                                <img className="d-inline-block" src={paymentPartners} width="187" alt="Payment methods" />
                            </div>
                        </div>
                        <div className="pb-4 fs-xs text-light opacity-50 text-center text-md-start">© All rights reserved.Made by <a className="text-light" href="/" target="_blank" rel="noopener">Rahul More</a></div>
                    </div>
                </div>
            </footer>
            {/*Toolbar for handheld devices (Default)*/}
            <div className="handheld-toolbar" >
                <div className="d-table table-layout-fixed w-100">

                    <a className="d-table-cell handheld-toolbar-item" href="#" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" onClick={window.scrollTo(0, 0)}>
                        <span className="handheld-toolbar-icon">
                            <i className="ci-menu"></i>
                        </span>
                        <span className="handheld-toolbar-label">Menu</span>
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
