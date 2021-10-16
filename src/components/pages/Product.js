import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuickModel from '../sections/home/QuickModel';
import { catchError, convertToSlug, Endpoints, Host, notify } from '../../helpers/comman_helpers';
import { Toaster } from 'react-hot-toast';
import {setProducts} from '../../redux/actions/productActions';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();

    const getProducts = async () => {
        try{
            var url = Host + Endpoints.product;
            const result = await axios.get(url);
            if(result.data.error){
                notify(result.data.title, 'error');
            }else{
                dispatch(setProducts(result.data.data));
            }
        }catch(err){
            notify(catchError, 'error');
        }
    }
    useEffect(() => {
        getProducts()
    }, []);
    const renderProducts = products && products.map((product) => {
        const { _id, categories, image, price, title, createdAt, description, updatedAt } = product;
        var productURL = `/product/${convertToSlug(title)}/${_id}`
        return (
        <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
            <div className="card product-card">
                {/* <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist">
                    <i className="ci-heart"></i>
                </button> */}
                    <Link className="card-img-top d-block overflow-hidden" to={productURL}>
                        <img src={image} alt={title} />
                    </Link>
                    <div className="card-body py-2">
                        <Link className="product-meta d-block fs-xs pb-1" to={productURL}>{categories}</Link>
                        <h3 className="product-title fs-sm">
                            <Link to={productURL}>{title}</Link>
                            </h3>
                        <div className="d-flex justify-content-between">
                            <div className="product-price">
                                <span className="text-accent">{price}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body card-body-hidden">
                    <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button">
                        <i className="ci-cart fs-sm me-1"></i>Add to Cart
                    </button>
                    <div className="text-center">
                        <a className="nav-link-style fs-ms" href="#quick-view" data-bs-toggle="modal">
                            <i className="ci-eye align-middle me-1"></i>Quick view
                        </a>
                    </div>
                </div>
            </div>
            <hr className="d-sm-none" />
        </div>
        )
        
    })
    return (
        <>
            <section className="container pt-md-3 pb-5 mb-md-3">
                <Toaster/>
                <h2 className="h3 text-center">Trending products</h2>
                <div className="row pt-4 mx-n2">
                    {renderProducts}
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
