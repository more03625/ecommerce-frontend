import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/logo-dark.png';
import AuthModel from './AuthModel';
import logoIcon from '../../assets/images/logo/logo-icon.png';
import { connect } from 'react-redux';
import { convertToINR, convertToSlug, errors, getUserInfo } from '../../helpers/comman_helpers';
import { loadCurrentItem, removeFromCart } from '../../redux/Shopping/shopping-actions';
const Header = ({ cart, removeFromCart }) => {
    const params = new URLSearchParams(window.location.search);
    let query = params.get('search_query')?.trim();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const updateValues = () => {
        var items = 0;
        var price = 0;

        cart && cart.forEach(item => {
            items += item.qty;
            price += item.qty * item.discounted_price
        });
        setTotalPrice(price);
        setTotalItems(items);
    }

    useEffect(() => {
        updateValues();
    }, [cart, totalItems, totalItems, setTotalPrice, setTotalItems]);
    const cartProducts = cart.length > 0 ? (
        cart && cart.map((product, index) => {
            const { categories, color, createdAt, description, discounted_price, expandable_storage, flash, image, internal_storage, memory_card_type, modal_name, modal_number, original_price, primary_camera, ram, secondary_camera, slot_type, status, title, updatedAt, _id, qty } = product;
            var productURL = `/product/${convertToSlug(title)}/${_id}`

            return (
                <div key={index} className="widget-cart-item border-bottom" onClick={() => loadCurrentItem(product)}>
                    <button className="btn-close text-danger" type="button" aria-label="Remove" onClick={() => removeFromCart(_id)}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="d-flex align-items-center">
                        <Link className="flex-shrink-0" to={productURL} style={{ maxWidth: "35px" }}>
                            <img src={image[0]} width="64" alt={title} />
                        </Link>
                        <div className="ps-2">
                            <h6 className="widget-product-title">
                                <Link to={productURL}>{title}</Link>
                            </h6>
                            <div className="widget-product-meta">
                                <span className="text-accent me-2">{convertToINR(discounted_price)}</span>
                                <span className="text-muted">x {qty}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (errors.noProducts)
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
                                    <img src={logoIcon} width="74" alt="Cartzilla" /></Link>
                                <form method="get" action="/results">
                                    <div className="input-group d-none d-lg-flex mx-4">
                                        <input className="form-control rounded-end pe-5" type="text" placeholder="Apple iphone..." name="search_query" defaultValue={query} />
                                        <i className="ci-search position-absolute top-50 end-0 translate-middle-y text-muted fs-base me-3"></i>
                                    </div>
                                </form>
                                <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool navbar-stuck-toggler" href="#"><span className="navbar-tool-tooltip">Expand menu</span>
                                        <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-menu"></i></div></a>
                                    {
                                        getUserInfo() === null ? (
                                            <a className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" href="#signin-modal" data-bs-toggle="modal">
                                                <div className="navbar-tool-icon-box">
                                                    <i className="navbar-tool-icon ci-user"></i>
                                                </div>
                                                <div className="navbar-tool-text ms-n3"><small>Hello, Sign in</small>My Account</div>
                                            </a>
                                        ) : ("")

                                    }


                                    <div className="navbar-tool dropdown ms-3">
                                        <Link className="navbar-tool-icon-box bg-secondary dropdown-toggle" to="/cart">
                                            <span className="navbar-tool-label">{totalItems}</span><i className="navbar-tool-icon ci-cart"></i>
                                        </Link>
                                        <Link className="navbar-tool-text" to="/cart">
                                            <small>My Cart</small>
                                            Show me
                                            {/* $265.00 */}
                                        </Link>

                                        <div className="dropdown-menu dropdown-menu-end">
                                            <div className="widget widget-cart px-3 pt-2 pb-3" style={{ width: "20rem" }}>
                                                <div style={{ height: "15rem" }} data-simplebar data-simplebar-auto-hide="false">
                                                    {cartProducts}
                                                </div>
                                                <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                                                    <div className="fs-sm me-2 py-2">
                                                        <span className="text-muted">Subtotal:</span>
                                                        <span className="text-accent fs-base ms-1">{convertToINR(totalPrice)}</span>
                                                    </div>
                                                    <Link className="btn btn-outline-secondary btn-sm" to="/cart">Expand cart
                                                        <i className="ci-arrow-right ms-1 me-n1"></i>
                                                    </Link>
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
                                    <form method="get" action="/results">
                                        <div className="input-group d-lg-none my-3">
                                            <i className="ci-search position-absolute top-50 start-0 translate-middle-y text-muted fs-base ms-3"></i>
                                            <input className="form-control rounded-start" type="text" placeholder="Apple iphone..." name="search_query" defaultValue={query} />
                                        </div>
                                    </form>
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

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
