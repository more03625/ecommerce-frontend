import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { _id, title, image, price, description, categories, createdAt, updatedAt } = product;
    return (
        <>
            <div className="col-lg-5 pt-4 pt-lg-0">
                <div className="product-details ms-auto pb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <a href="#reviews" data-scroll>
                            <div className="star-rating">
                            </div>
                        </a>
                        <button className="btn-wishlist me-0 me-lg-n3" type="button" data-bs-toggle="tooltip" title="Add to wishlist">
                            <i className="ci-heart"></i>
                        </button>
                    </div>
                    <div className="mb-3"><span className="h3 fw-normal text-accent me-1">{price}</span>
                    </div>
                    <div className="fs-sm mb-4"><span className="text-heading fw-medium me-1">Color:</span><span className="text-muted" id="colorOption">Red/Dark blue/White</span></div>

                    <form className="mb-grid-gutter" method="post">
                        <div className="mb-3 d-flex align-items-center">
                            <select className="form-select me-3" style={{ width: "5rem" }}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button className="btn btn-primary btn-shadow d-block w-100" type="submit"><i className="ci-cart fs-lg me-2"></i>Add to Cart</button>
                        </div>
                    </form>
                    <div className="accordion mb-4" id="productPanels">
                        <div className="accordion-item">
                            <h3 className="accordion-header"><a className="accordion-button" href="#productInfo" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="productInfo"><i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Product info</a></h3>
                            <div className="accordion-collapse collapse show" id="productInfo" data-bs-parent="#productPanels">
                                <div className="accordion-body">
                                    <h6 className="fs-sm mb-2">Composition</h6>
                                   {description}
                                    
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header"><a className="accordion-button collapsed" href="#shippingOptions" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="shippingOptions"><i className="ci-delivery text-muted lead align-middle mt-n1 me-2"></i>Shipping options</a></h3>
                            <div className="accordion-collapse collapse" id="shippingOptions" data-bs-parent="#productPanels">
                                <div className="accordion-body fs-sm">
                                    <div className="d-flex justify-content-between border-bottom pb-2">
                                        <div>
                                            <div className="fw-semibold text-dark">Courier</div>
                                            <div className="fs-sm text-muted">2 - 4 days</div>
                                        </div>
                                        <div>$26.50</div>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div className="fw-semibold text-dark">Local shipping</div>
                                            <div className="fs-sm text-muted">up to one week</div>
                                        </div>
                                        <div>$10.00</div>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div className="fw-semibold text-dark">Flat rate</div>
                                            <div className="fs-sm text-muted">5 - 7 days</div>
                                        </div>
                                        <div>$33.85</div>
                                    </div>
                                    <div className="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div className="fw-semibold text-dark">UPS ground shipping</div>
                                            <div className="fs-sm text-muted">4 - 6 days</div>
                                        </div>
                                        <div>$18.00</div>
                                    </div>
                                    <div className="d-flex justify-content-between pt-2">
                                        <div>
                                            <div className="fw-semibold text-dark">Local pickup from store</div>
                                            <div className="fs-sm text-muted">&mdash;</div>
                                        </div>
                                        <div>$0.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <label className="form-label d-inline-block align-middle my-2 me-3">Share:</label><a className="btn-share btn-twitter me-2 my-2" href="#"><i className="ci-twitter"></i>Twitter</a><a className="btn-share btn-instagram me-2 my-2" href="#"><i className="ci-instagram"></i>Instagram</a><a className="btn-share btn-facebook my-2" href="#"><i className="ci-facebook"></i>Facebook</a>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
