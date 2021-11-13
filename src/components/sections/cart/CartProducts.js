import React, { useState } from 'react'
import { convertToINR, convertToSlug } from '../../../helpers/comman_helpers';
import { connect } from 'react-redux';
import { removeFromCart, adjustQty, loadCurrentItem } from '../../../redux/Shopping/shopping-actions';
import { Link } from 'react-router-dom';
const CartProducts = (props) => {
  const { categories, color, createdAt, description, discounted_price, expandable_storage, flash, image, internal_storage, memory_card_type, modal_name, modal_number, original_price, primary_camera, ram, secondary_camera, slot_type, status, title, updatedAt, _id, qty } = props.product;
  var productURL = `/product/${convertToSlug(title)}/${_id}`

  const [input, setInput] = useState(qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    props.adjustQty(_id, e.target.value)
  }
  return (
    <>
        <section className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
            <h2 className="h6 text-light mb-0">Products</h2>

          </div>
          <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom" onClick={() => props.loadCurrentItem(props.product)}>
            <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
              <Link to={productURL} className="d-inline-block flex-shrink-0 mx-auto me-sm-4">
                <img src={image[0]} width="160" alt="Product" />
              </Link>
              <div className="pt-2">
                <h3 className="product-title fs-base mb-2">
                  <Link to={productURL}>{title}</Link></h3>
                <div className="fs-sm"><span className="text-muted me-2">Ram:</span>{ram} GB</div>
                <div className="fs-sm"><span className="text-muted me-2">Color:</span>{color}</div>
                <div className="fs-lg text-accent pt-2">{convertToINR(discounted_price)}
                  <del className="fs-sm text-muted">{convertToINR(original_price)}</del>
                </div>
              </div>
            </div>
            <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style={{ maxWidth: "9rem" }}>
              <label className="form-label" htmlFor="quantity1">Quantity</label>
              <input className="form-control" type="number" id="quantity1" name="qty" min="1" max="5" value={input} onChange={(e) => onChangeHandler(e)} />
              <button className="btn btn-link px-0 text-danger" type="button" onClick={() => props.removeFromCart(_id)}>
                <i className="ci-close-circle me-2"></i>
                <span className="fs-sm">Remove</span>
              </button>
            </div>
          </div>
        </section>
    </>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
  }
}

export default connect(null, mapDispatchToProps)(CartProducts)
