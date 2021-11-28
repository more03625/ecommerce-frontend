import React, { useState, useEffect } from 'react'
import Product from './Product';
import { useDispatch, connect } from 'react-redux';
import { setProducts } from "../../../redux/Shopping/shopping-actions";
import { Host, Endpoints, notify, catchError } from '../../../helpers/comman_helpers';
import axios from 'axios';
import Spinner from '../../layouts/Spinner';
import Filters from './Filters';
import PageTitle from '../product-details/PageTitle';
const Content = (props) => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const params = new URLSearchParams(window.location.search);

    let query = params.get('search_query');

    const { products } = props;
    const getProducts = async () => {
        setLoading(true);
        try {
            var url = Host + Endpoints.product + `/search/?search=${query}`

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
    return (
        <>

            <PageTitle title={products.length > 0 ? (`Results for "${query}"`) : (`There are no results for "${query}"`)}/>
            <div className="container pb-5 mb-2 mb-md-4">
                <div className="row">
                    <Filters />
                    <section className="col-lg-8">
                        <div className="d-flex justify-content-center justify-content-sm-between align-items-center pt-2 pb-4 pb-sm-5">
                            <div className="d-flex flex-wrap">
                                <div className="d-flex align-items-center flex-nowrap me-3 me-sm-4 pb-3">
                                    <label className="text-light opacity-75 text-nowrap fs-sm me-2 d-none d-sm-block"
                                        htmlFor="sorting">Sort by:</label>
                                    <select className="form-select" id="sorting">
                                        <option>Popularity</option>
                                        <option>Low - Hight Price</option>
                                        <option>High - Low Price</option>
                                        <option>Average Rating</option>
                                        <option>A - Z Order</option>
                                        <option>Z - A Order</option>
                                    </select>
                                    <span className="fs-sm text-light opacity-75 text-nowrap ms-2 d-none d-md-block">of
                                        287 products</span>
                                </div>
                            </div>

                        </div>
                        <div className="row mx-n2">
                            {loading ? (<Spinner />) : (
                                products.length > 0 ? (
                                    products && products.map((product, index) => (
                                        <Product key={index} product={product} />
                                    ))
                                ) : (
                                    <h2 className="h3 text-center">There are no results for "{query}"</h2>
                                )
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Content)
