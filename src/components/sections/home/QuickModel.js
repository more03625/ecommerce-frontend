import React from 'react'

const QuickModel = () => {
    return (
        <>
            <div className="modal-quick-view modal fade" id="quick-view" tabIndex="-1">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title product-title">
                                <a href="shop-single-v1.html" data-bs-toggle="tooltip" data-bs-placement="right" title="Go to product page">Sports Hooded Sweatshirt
                                <i className="ci-arrow-right fs-lg ms-2"></i></a></h4>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-7 pe-lg-0">
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
                                        <div className="product-gallery-thumblist order-sm-1"><a className="product-gallery-thumblist-item active" href="#first">
                                            <img src="img/shop/single/gallery/th01.jpg" alt="Product thumb" /></a><a className="product-gallery-thumblist-item" href="#second">
                                                <img src="img/shop/single/gallery/th02.jpg" alt="Product thumb" /></a><a className="product-gallery-thumblist-item" href="#third">
                                                <img src="img/shop/single/gallery/th03.jpg" alt="Product thumb" /></a><a className="product-gallery-thumblist-item" href="#fourth">
                                                <img src="img/shop/single/gallery/th04.jpg" alt="Product thumb" /></a></div>
                                    </div>
                                </div>
                                <div className="col-lg-5 pt-4 pt-lg-0 image-zoom-pane">
                                    <div className="product-details ms-auto pb-3">
                                        
                                        <div className="mb-3"><span className="h3 fw-normal text-accent me-1">$18.<small>99</small></span>
                                            <del className="text-muted fs-lg me-3">$25.<small>00</small></del><span className="badge bg-danger badge-shadow align-middle mt-n2">Sale</span>
                                        </div>
                                        <div className="fs-sm mb-4">
                                            <span className="text-heading fw-medium me-1">Category:</span>
                                            <span className="text-muted" id="colorOptionText">Red/Dark blue/White</span>
                                            </div>
                                        <form className="mb-grid-gutter">
                                           
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
                                        <h5 className="h6 mb-3 pb-2 border-bottom"><i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Product info</h5>
                                        <h6 className="fs-sm mb-2">Style</h6>
                                        <ul className="fs-sm ps-4">
                                            <li>Hooded top</li>
                                        </ul>
                                        <h6 className="fs-sm mb-2">Composition</h6>
                                        <ul className="fs-sm ps-4">
                                            Des here
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuickModel
