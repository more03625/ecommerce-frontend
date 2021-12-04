import React, { useState, useEffect } from 'react'
import ProductDetails from './ProductDetails';
import PageTitle from './PageTitle';
import Spinner from '../../layouts/Spinner';
import "react-image-gallery/styles/css/image-gallery.css";
import { connect } from 'react-redux';
import { loadCurrentItem } from '../../../redux/Shopping/shopping-actions';
import { Endpoints, Host, notify, catchError } from '../../../helpers/comman_helpers';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
const ProductInfo = ({ currentItem }) => {
    console.log();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const { slug, productID } = useParams()
    // console.log(props?.currentItem);
    // const { categories, color, createdAt, description, discounted_price, expandable_storage, flash, image, internal_storage, memory_card_type, modal_name, modal_number, original_price, primary_camera, ram, secondary_camera, slot_type, status, title, updatedAt, _id } = props?.currentItem;

    const getProductByID = async () => {
        setLoading(true);
        try {
            var url = Host + Endpoints.product + "/find/" + productID;
            const result = await axios.get(url);
            if (result.data.error) {
                notify(result.data.title, 'error');
            } else {
                dispatch(loadCurrentItem(result.data.data));
            }
        } catch (err) {
            notify(catchError, 'error');
        }
        setLoading(false);
    }

    useEffect(() => {
        getProductByID()
    }, []);
    const renderProduct = currentItem && Object.keys(currentItem).length === 0 ? (<Spinner />) : (
        <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
            <div className="px-lg-3">
                <div className="row">
                    <div className="col-lg-7 pe-lg-0 pt-lg-4">
                        <div className="product-gallery justify-content-center">
                            <img src={currentItem?.image[0]} alt={currentItem?.title} />
                            <div className="image-zoom-pane"></div>
                        </div>
                    </div>
                    <ProductDetails />
                </div>
            </div>
        </div>
    )
    return (
        <>
            {/* <PageTitle title={title} /> */}
            <div className="container">
                {renderProduct}
            </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo)
