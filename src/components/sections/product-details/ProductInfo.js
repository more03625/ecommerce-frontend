import React from 'react'
import ProductDetails from './ProductDetails';
import PageTitle from './PageTitle';
import Spinner from '../../layouts/Spinner';
import "react-image-gallery/styles/css/image-gallery.css";
import { connect } from 'react-redux';

const ProductInfo = (props) => {

    const { categories, color, createdAt, description, discounted_price, expandable_storage, flash, image, internal_storage, memory_card_type, modal_name, modal_number, original_price, primary_camera, ram, secondary_camera, slot_type, status, title, updatedAt, _id } = props.currentItem;

    return (
        <>
        <PageTitle title={title}/>
            <div className="container">
                {Object.keys(props.currentItem).length === 0 ? ( <Spinner /> ) : (
                    <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
                        <div className="px-lg-3">
                            <div className="row">
                                <div className="col-lg-7 pe-lg-0 pt-lg-4">
                                    <div className="product-gallery justify-content-center">
                                        <img src={image[0]} alt={title}/>
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
const mapStateToProps = state => {
    return {
        currentItem : state.shop.currentItem
    }
}
export default connect(mapStateToProps) (ProductInfo)
