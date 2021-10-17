import axios from 'axios';
import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router';
import { catchError, Endpoints, Host, notify } from '../../../helpers/comman_helpers';
import ProductDetails from './ProductDetails';
import { selectedProducts, removeSelectedProduct } from '../../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from './PageTitle';
import Spinner from '../../layouts/Spinner';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [];
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
    
    image?.map((img, index) => (
        images.push({
            original : img,
            thumbnail : img
        })
    ));

    return (
        <>
        <PageTitle/>
            <div className="container">
                <Toaster />
                {Object.keys(product).length === 0 ? ( <Spinner /> ) : (
                    <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
                        <div className="px-lg-3">
                            <div className="row">
                                <div className="col-lg-7 pe-lg-0 pt-lg-4">
                                    <div className="product-gallery justify-content-center">
                                        <ImageGallery
                                            items={images}
                                            height={50}
                                            originalHeight={50}
                                            originalWidth={50}
                                            originalAlt={"RAHUL MORE"}
                                            thumbnailAlt={"RAHUL MORE"}
                                        />;
                                        {/* https://github.com/ryanmcdermott/clean-code-javascript */}
                                        <div className="image-zoom-pane"></div>
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
