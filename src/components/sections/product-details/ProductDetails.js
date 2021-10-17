import React from 'react'
import { useSelector } from 'react-redux'
import {selectStatus, selectFlash, selectSlotType, selectMemoryCardType} from '../../../data/select.json';
import { uppercaseFirstLetter } from '../../../helpers/comman_helpers';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { categories, color, createdAt, description, discounted_price, expandable_storage, flash, image, internal_storage, memory_card_type, modal_name, modal_number, original_price, primary_camera, ram, secondary_camera, slot_type, status, title, updatedAt, _id } = product;
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

                    <div className="mb-3">
                        <span className="h3 fw-normal text-accent me-1">&#8377;{discounted_price}</span>
                        <del class="text-muted fs-lg me-3">&#8377;{original_price}</del>
                    </div>
                    <div class="fs-sm mb-4">
                        <span class="text-heading fw-medium me-1">Color:</span>
                        <span class="text-muted" id="colorOption">{color}</span>
                    </div>


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
                            <h3 className="accordion-header"><a className="accordion-button" href="#productInfo" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="productInfo"><i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Description</a></h3>
                            <div className="accordion-collapse collapse show" id="productInfo" data-bs-parent="#productPanels">
                                <div className="accordion-body">
                                    <ul class="fs-sm ps-4">
                                        {description?.split("\n").filter(item => item).map((specification) => (
                                            <li>{specification}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h3 class="accordion-header"><a class="accordion-button collapsed" href="#Specifications" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="Specifications"><i class="ci-delivery text-muted lead align-middle mt-n1 me-2"></i>Specifications</a></h3>
                            <div class="accordion-collapse collapse" id="Specifications" data-bs-parent="#productPanels">
                                <div class="accordion-body fs-sm">

                                    <div class="d-flex justify-content-between border-bottom pb-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Internal Storage</div>
                                        </div>
                                        <div>{internal_storage} GB</div>
                                    </div>

                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Ram</div>
                                        </div>
                                        <div>{ram}</div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Expandable Storage</div>
                                        </div>
                                        <div>{expandable_storage}</div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Primary Camera</div>
                                        </div>
                                        <div>{primary_camera}</div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Secondary Camera</div>
                                        </div>
                                        <div>{secondary_camera}</div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Secondary Camera</div>
                                        </div>
                                        <div>{secondary_camera}</div>
                                    </div>


                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Modal Name</div>
                                        </div>
                                        <div>{modal_name}</div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Modal Number</div>
                                        </div>
                                        <div>{modal_number}</div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Flash</div>
                                        </div>
                                        <div>
                                            {selectFlash.filter((x) => x.value == flash).map((value, index) => (
                                                        uppercaseFirstLetter(value.name)
                                                ))}
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Memory Card Type</div>
                                        </div>
                                        <div>
                                            {selectMemoryCardType.filter((x) => x.id == memory_card_type).map((value, index) => (
                                                        uppercaseFirstLetter(value.name)
                                                ))}
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Slot Type</div>
                                        </div>
                                        <div>{slot_type}</div>
                                    </div>
                                    <div class="d-flex justify-content-between border-bottom py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Status</div>
                                        </div>
                                        <div>
                                            {selectStatus.filter((x) => x.value == status).map((value, index) => (
                                                    uppercaseFirstLetter(value.name)
                                            ))}
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-between py-2">
                                        <div>
                                            <div class="fw-semibold text-dark">Posted at</div>
                                        </div>
                                        <div>{new Date(createdAt).toDateString()}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <label className="form-label d-inline-block align-middle my-2 me-3">Share:</label>
                    <a target="_blank" className="btn-share btn-twitter me-2 my-2" href={`https://twitter.com/share?url=${window.location.href}`}>
                        <i className="ci-twitter"></i>
                        Twitter
                    </a>
                    <a target="_blank" className="btn-share btn-facebook my-2" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                        <i className="ci-facebook"></i>Facebook
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
