import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuickModel from '../sections/home/QuickModel';
import axios from 'axios';
import { Endpoints, Host, notify } from '../../helpers/comman_helpers';
import { Toaster } from 'react-hot-toast';
import {setProducts} from '../../redux/actions/productActions'
const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const getProducts = async () => {
        var url = Host + Endpoints.product;
        const result = await axios.get(url);
        if(result.data.error){
            notify(result.data.title, 'error')
        }else{
            dispatch(setProducts(result.data.data));
            notify(result.data.title, 'success')
        }
    }
    useEffect(() => {
        getProducts()
    }, []);
    
    return (
        <>
            <section className="container pt-md-3 pb-5 mb-md-3">
                <Toaster/>
                <h2 className="h3 text-center">Trending products</h2>
                <div className="row pt-4 mx-n2">
                    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                        <div className="card product-card">
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                                <img src="img/shop/catalog/01.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Sneakers &amp; Keds</a>
                                <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Rahul Colorblock Sneakers</a></h3>
                                <div className="d-flex justify-content-between">
                                    <div className="product-price"><span className="text-accent">$154.<small>00</small></span></div>
                                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body card-body-hidden">
                                <div className="text-center pb-2">
                                    <div className="form-check form-option form-check-inline mb-2">
                                        <input className="form-check-input" type="radio" name="size1" id="s-75" onChange={(e) => alert(e.target.value)} />
                                        <label className="form-option-label" htmlFor="s-75">7.5</label>
                                    </div>
                                    <div className="form-check form-option form-check-inline mb-2">
                                        <input className="form-check-input" type="radio" name="size1" id="s-80" checked onChange={(e) => alert(e.target.value)} />
                                        <label className="form-option-label" htmlFor="s-80">8</label>
                                    </div>
                                    <div className="form-check form-option form-check-inline mb-2">
                                        <input className="form-check-input" type="radio" name="size1" id="s-85" onChange={(e) => alert(e.target.value)} />
                                        <label className="form-option-label" htmlFor="s-85">8.5</label>
                                    </div>
                                    <div className="form-check form-option form-check-inline mb-2">
                                        <input className="form-check-input" type="radio" name="size1" id="s-90" onChange={(e) => alert(e.target.value)} />
                                        <label className="form-option-label" htmlFor="s-90">9</label>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                                <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                            </div>
                        </div>
                        <hr className="d-sm-none" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                        <div className="card product-card"><span className="badge badge-danger badge-shadow">Sale</span>
                            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                                <img src="img/shop/catalog/02.jpg" alt="Product" /></a>
                            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Women’s T-shirt</a>
                                <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Cotton Lace Blouse</a></h3>
                                <div className="d-flex justify-content-between">
                                    <div className="product-price"><span className="text-accent">$28.<small>50</small></span>
                                        <del className="fs-sm text-muted">$38.<small>50</small></del>
                                    </div>
                                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body card-body-hidden">
                                <div className="text-center pb-2">
                                    <div className="form-check form-option form-check-inline mb-2">
                                        <input className="form-check-input" type="radio" name="color1" id="white" checked onChange={(e) => alert(e.target.value)} />
                                        <label className="form-option-label rounded-circle" htmlFor="white"><span className="form-option-color rounded-circle" style={{ backgroundColor: "#eaeaeb" }}></span></label>
                                    </div>
                                    <div className="form-check form-option form-check-inline mb-2">
                                        <input className="form-check-input" type="radio" name="color1" id="blue" onChange={(e) => alert(e.target.value)} />
                                        <label className="form-option-label rounded-circle" htmlFor="blue"><span className="form-option-color rounded-circle" style={{ backgroundColor: "#d1dceb" }}></span></label>
                                    </div>
                                    <div className="form-check form-option form-check-inline mb-2">
                                        <input className="form-check-input" type="radio" name="color1" id="yellow" onChange={(e) => alert(e.target.value)} />
                                        <label className="form-option-label rounded-circle" htmlFor="yellow"><span className="form-option-color rounded-circle" style={{ backgroundColor: "#f4e6a2" }}></span></label>
                                    </div>
                                    <div className="form-check form-option form-check-inline mb-2">
                                        <input className="form-check-input" type="radio" name="color1" id="pink" onChange={(e) => alert(e.target.value)} />
                                        <label className="form-option-label rounded-circle" htmlFor="pink"><span className="form-option-color rounded-circle" style={{ backgroundColor: "#f3dcff" }}></span></label>
                                    </div>
                                </div>
                                <div className="d-flex mb-2">
                                    <select className="form-select form-select-sm me-2">
                                        <option>XS</option>
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <button className="btn btn-primary btn-sm" type="button"><i className="ci-cart fs-sm me-1"></i>Add to Cart</button>
                                </div>
                                <div className="text-center"><a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal"><i className="ci-eye align-middle me-1"></i>Quick view</a></div>
                            </div>
                        </div>
                        <hr className="d-sm-none" />
                    </div>

                </div>
                <div className="text-center pt-3">
                    <a className="btn btn-outline-accent" href="shop-grid-ls.html">More products<i className="ci-arrow-right ms-1"></i>
                    </a>
                </div>
                <QuickModel />
            </section>
        </>
    )
}

export default Product
