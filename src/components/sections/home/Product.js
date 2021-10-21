import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuickModel from './QuickModel';
import { catchError, convertToSlug, Endpoints, Host, notify, convertToINR } from '../../../helpers/comman_helpers';
import { setProducts, addToCart } from '../../../redux/actions/productActions';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../../layouts/Spinner';

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const handleCart = (product) => {
        dispatch(addToCart(product))
        notify('Product has been added to cart!', 'success');
    }
    const getProducts = async () => {
        setLoading(true);
        try {
            var url = Host + Endpoints.product;
            const result = await axios.get(url);
            if (result.data.error) {
                notify(result.data.title, 'error');
            } else {
                dispatch(setProducts(result.data.data));
            }
        } catch (err) {
            notify(catchError, 'error');
        }
        setLoading(false);
    }

    useEffect(() => {
        getProducts()
    }, []);
    const renderProducts = products && products.map((product, index) => {
        const { categories, color, createdAt, description, discounted_price, expandable_storage, flash, image, internal_storage, memory_card_type, modal_name, modal_number, original_price, primary_camera, ram, secondary_camera, slot_type, status, title, updatedAt, _id } = product;
        var productURL = `/product/${convertToSlug(title)}/${_id}`
        return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
                <div className="card product-card">
                    <Link className="card-img-top d-flex overflow-hidden justify-content-center" to={productURL}>
                        <img className="justify-content-center" src={image && image[0]} alt={title} style={{ maxHeight: "300px", maxWidth: "300px", objectFit: "contain" }} />
                    </Link>
                    <div className="card-body py-2">
                        <Link className="product-meta d-block fs-xs pb-1" to={productURL}>{categories}</Link>
                        <h3 className="product-title fs-sm">
                            <Link to={productURL}>{title}</Link>
                        </h3>
                        <div className="d-flex justify-content-between">
                            <div class="product-price">
                                <span class="text-accent">{convertToINR(discounted_price)}</span>{" "}
                                <del class="fs-sm text-muted">{convertToINR(original_price)}</del>
                            </div>
                        </div>
                    </div>
                    <div className="card-body card-body-hidden">
                        <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button" onClick={() => handleCart(product)}>
                            <i className="ci-cart fs-sm me-1"></i>Add to Cart
                        </button>
                        {/* <div className="text-center">
                            <a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal">
                                <i className="ci-eye align-middle me-1"></i>Quick view
                            </a>
                        </div> */}
                    </div>
                </div>
                <hr className="d-sm-none" />
            </div>
        )

    })
    return (
        <>
            <section className="container pt-md-3 pb-5 mb-md-3">
           
                <h2 className="h3 text-center">Trending products</h2>
                <div className="row pt-4 mx-n2">
                    {loading ? <Spinner /> : renderProducts}
                </div>
                {/* <div className="text-center pt-3">
                    <a className="btn btn-outline-accent" href="shop-grid-ls.html">More products<i className="ci-arrow-right ms-1"></i>
                    </a>
                </div> */}
                <QuickModel />
            </section>
        </>
    )
}

export default Product
