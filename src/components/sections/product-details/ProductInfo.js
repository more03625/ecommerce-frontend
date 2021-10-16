import axios from 'axios';
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router';
import { catchError, Endpoints, Host, notify } from '../../../helpers/comman_helpers';
import ProductDetails from './ProductDetails';
import { selectedProducts, removeSelectedProduct } from '../../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from './PageTitle';

const ProductInfo = () => {
    const { productID } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    const { _id, title, image, price, description, categories, createdAt, updatedAt } = product;

    const getProductByID = async () => {
        try {
            var url = Host + Endpoints.product + "/find/" + productID
            const result = await axios.get(url);
            if (result.data.error) {
                notify(result.data.title, 'error');
            } else {
                dispatch(selectedProducts(result.data.data));
            }
        } catch (err) {
            notify(catchError, 'error');
        }
    }
    useEffect(() => {
        productID && productID !== '' && getProductByID();
        return () => {
            dispatch(removeSelectedProduct()); // Remove the selected product when component is destroyed!
        }
    }, [productID]);

    return (
        <>
        <PageTitle/>
            <div className="container">
                <Toaster />
                {Object.keys(product).length === 0 ? ('Loading...') : (
                    <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
                        <div className="px-lg-3">
                            <div className="row">
                                <div className="col-lg-7 pe-lg-0 pt-lg-4">
                                    <div className="product-gallery">
                                        <div className="product-gallery-preview order-sm-2">
                                            <div className="product-gallery-preview-item active" id="first">
                                                <img className="image-zoom" src="img/shop/single/gallery/01.jpg" data-zoom="img/shop/single/gallery/01.jpg" alt="Product image" />
                                                <div className="image-zoom-pane"></div>
                                            </div>
                                            <div className="product-gallery-preview-item" id="second">
                                                <img className="image-zoom" src="img/shop/single/gallery/02.jpg" data-zoom="img/shop/single/gallery/02.jpg" alt="Product image" />
                                                <div className="image-zoom-pane"></div>
                                            </div>
                                            <div className="product-gallery-preview-item" id="third">
                                                <img className="image-zoom" src="img/shop/single/gallery/03.jpg" data-zoom="img/shop/single/gallery/03.jpg" alt="Product image" />
                                                <div className="image-zoom-pane"></div>
                                            </div>
                                            <div className="product-gallery-preview-item" id="fourth">
                                                <img className="image-zoom" src="img/shop/single/gallery/04.jpg" data-zoom="img/shop/single/gallery/04.jpg" alt="Product image" />
                                                <div className="image-zoom-pane"></div>
                                            </div>
                                        </div>
                                        <div className="product-gallery-thumblist order-sm-1">
                                            <a className="product-gallery-thumblist-item active" href="#first">
                                                <img src="img/shop/single/gallery/th01.jpg" alt="Product thumb" />
                                            </a>
                                            <a className="product-gallery-thumblist-item" href="#second">
                                                <img src="img/shop/single/gallery/th02.jpg" alt="Product thumb" />
                                            </a>
                                            <a className="product-gallery-thumblist-item" href="#third">
                                                <img src="img/shop/single/gallery/th03.jpg" alt="Product thumb" />
                                            </a>
                                            <a className="product-gallery-thumblist-item" href="#fourth">
                                                <img src="img/shop/single/gallery/th04.jpg" alt="Product thumb" />
                                            </a>
                                            <a className="product-gallery-thumblist-item video-item" href="https://www.youtube.com/watch?v=1vrXpMLLK14">
                                                <div className="product-gallery-thumblist-item-text">
                                                    <i className="ci-video"></i>Video</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <ProductDetails />
                            </div>
                        </div>
                    </div>)}
            </div>
        </>
    )
}

export default ProductInfo
