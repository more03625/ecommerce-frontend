import React, { useState, useEffect } from 'react'
import Product from './Product';
import { useDispatch, connect } from 'react-redux';
import { setProducts} from "../../../redux/Shopping/shopping-actions";
import { Host, Endpoints, notify, catchError } from '../../../helpers/comman_helpers';
import axios from 'axios';

const Content = (props) => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { products } = props;
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
    return (
        <>
            <section className="container pt-md-3 pb-5 mb-md-3">
                <h2 className="h3 text-center">Trending products</h2>
                <div className="row pt-4 mx-n2">
                    {products && products.map((product, index) => (
                        <Product key={index} product={product} />
                    ))}
                </div>
            </section>

        </>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Content)
