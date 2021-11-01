import React from 'react'
import { Link } from 'react-router-dom';
import { convertToSlug, convertToINR, notify } from '../../../helpers/comman_helpers';
import { addToCart, loadCurrentItem } from '../../../redux/Shopping/shopping-actions';
import { connect } from 'react-redux';

const Product = ({ product, addToCart, loadCurrentItem }) => {
    const { categories, color, createdAt, description, discounted_price, expandable_storage, flash, image, internal_storage, memory_card_type, modal_name, modal_number, original_price, primary_camera, ram, secondary_camera, slot_type, status, title, updatedAt, _id } = product;
    var productURL = `/product/${convertToSlug(title)}/${_id}`
    const handleCart = (id) => {
        addToCart(id)
        notify('Product has been added to cart!', 'success');
    }
    return (
        <>

            <div key={_id} className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4" onClick={() => loadCurrentItem(product)}>
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
                            <div className="product-price">
                                <span className="text-accent">{convertToINR(discounted_price)}</span>{" "}
                                <del className="fs-sm text-muted">{convertToINR(original_price)}</del>
                            </div>
                        </div>
                    </div>
                    <div className="card-body card-body-hidden">
                        <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button" onClick={() => handleCart(_id)}>
                            <i className="ci-cart fs-sm me-1"></i>Add to Cart
                        </button>
                    </div>
                </div>
                <hr className="d-sm-none" />
            </div>

        </>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}
export default connect(null, mapDispatchToProps)(Product)
