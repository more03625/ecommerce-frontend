import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo-dark.png';
import AuthModel from './AuthModel';
import {useSelector} from 'react-redux';

const Header = () => {
    const products = useSelector((state) => state.cartProducts);
    return (
        <>
            <main className="page-wrapper mb-5">
                <header className="shadow-sm">
                    <div className="topbar topbar-dark bg-dark">
                        <div className="container">
                            <div className="topbar-text dropdown d-md-none"><a className="topbar-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Useful links</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="tel:00331697720"><i className="ci-support text-muted me-2"></i>(+91) 7039192417</a></li>
                                    <li><a className="dropdown-item" href="order-tracking.html"><i className="ci-location text-muted me-2"></i>Order tracking</a></li>
                                </ul>
                            </div>
                            <div className="topbar-text text-nowrap d-none d-md-inline-block"><i className="ci-support"></i><span className="text-muted me-1">Support</span><a className="topbar-link" href="tel:00331697720">(+91) 7039192417</a></div>
                            <div className="tns-carousel tns-controls-static d-none d-md-block">
                                <div className="tns-carousel-inner" data-carousel-options="{&quot;mode&quot;: &quot;gallery&quot;, &quot;nav&quot;: false}">
                                    <div className="topbar-text">Free shipping for order over $200</div>
                                    <div className="topbar-text">We return money within 30 days</div>
                                    <div className="topbar-text">Friendly 24/7 customer support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-sticky bg-light navbar-stuck" id="navbar-header">
                        <div className="navbar navbar-expand-lg navbar-light">
                            <div className="container">
                                <Link className="navbar-brand d-none d-sm-block flex-shrink-0" to="/">
                                    <img src={logo} width="142" alt="Cartzilla" />
                                </Link>
                                <Link className="navbar-brand d-sm-none flex-shrink-0 me-2" to="/">
                                    <img src="img/logo-icon.png" width="74" alt="Cartzilla" /></Link>
                                <div className="input-group d-none d-lg-flex mx-4">
                                    <input className="form-control rounded-end pe-5" type="text" placeholder="Search for products" /><i className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
                                </div>
                                <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool navbar-stuck-toggler" href="#"><span className="navbar-tool-tooltip">Expand menu</span>
                                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-menu"></i></div></a>

                                    <a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
                                        <div className="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div></a>
                                    <div className="navbar-tool dropdown ms-3">
                                        <Link className="navbar-tool-icon-box bg-secondary dropdown-toggle" to="/cart">
                                            <span className="navbar-tool-label">{products.length}</span><i className="navbar-tool-icon ci-cart"></i>
                                        </Link>
                                        <Link className="navbar-tool-text" to="/cart">
                                            <small>My Cart</small>
                                            Show me
                                            {/* $265.00 */}
                                        </Link>

                                        <div className="dropdown-menu dropdown-menu-end">
                                            <div className="widget widget-cart px-3 pt-2 pb-3" style={{ width: "20rem" }}>
                                                <div style={{ height: "15rem" }} data-simplebar data-simplebar-auto-hide="false">
                                                    <div className="widget-cart-item pb-2 border-bottom">
                                                        <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                                                        <div className="d-flex align-items-center"><a className="flex-shrink-0" href="#">
                                                            <img src="img/shop/cart/widget/01.jpg" width="64" alt="Product" /></a>
                                                            <div className="ps-2">
                                                                <h6 className="widget-product-title"><a href="#">Women Colorblock Sneakers</a></h6>
                                                                <div className="widget-product-meta"><span className="text-accent me-2">$150.<small>00</small></span><span className="text-muted">x 1</span></div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="widget-cart-item py-2 border-bottom">
                                                        <button className="btn-close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">&times;</span></button>
                                                        <div className="d-flex align-items-center"><a className="flex-shrink-0" href="#">
                                                            <img src="img/shop/cart/widget/04.jpg" width="64" alt="Product" /></a>
                                                            <div className="ps-2">
                                                                <h6 className="widget-product-title"><a href="#">Cotton Polo Regular Fit</a></h6>
                                                                <div className="widget-product-meta"><span className="text-accent me-2">$9.<small>00</small></span><span className="text-muted">x 1</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                                                    <div className="fs-sm me-2 py-2"><span className="text-muted">Subtotal:</span><span className="text-accent fs-base ms-1">$265.<small>00</small></span></div><a className="btn btn-outline-secondary btn-sm" href="shop-cart.html">Expand cart<i className="ci-arrow-right ms-1 me-n1"></i></a>
                                                </div>
                                                <Link className="btn btn-primary btn-sm d-block w-100" to="/checkout-details">
                                                    <i className="ci-card me-2 fs-base align-middle"></i>Checkout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
                            <div className="container">
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                    <div className="input-group d-lg-none my-3"><i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                                        <input className="form-control rounded-start" type="text" placeholder="Search for products" />
                                    </div>
                                    {/* <ul className="navbar-nav navbar-mega-nav pe-lg-2 me-lg-2">
                                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle ps-lg-0" href="#" data-bs-toggle="dropdown"><i className="ci-view-grid me-2"></i>Departments</a>
                                            <div className="dropdown-menu px-2 pb-4">
                                                <div className="d-flex flex-wrap flex-sm-nowrap">
                                                    <div className="mega-dropdown-column pt-3 pt-sm-4 px-2 px-lg-3">
                                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/01.jpg" alt="Clothing" /></a>
                                                            <h6 className="fs-base mb-2">Clothing</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Women's clothing</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="mega-dropdown-column pt-4 px-2 px-lg-3">
                                                        <div className="widget widget-links"><a className="d-block overflow-hidden rounded-3 mb-3" href="#"><img src="img/shop/departments/02.jpg" alt="Shoes" /></a>
                                                            <h6 className="fs-base mb-2">Shoes</h6>
                                                            <ul className="widget-list">
                                                                <li className="widget-list-item mb-1"><a className="widget-list-link" href="#">Men's shoes</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <AuthModel />
            </main>
        </>
    )
}

export default Header
