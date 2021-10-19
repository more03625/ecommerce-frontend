import React from 'react'

const Subtotal = () => {
    return (
        <>
            <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
            <div className="bg-white rounded-3 shadow-lg p-4">
              <div className="py-2 px-xl-2">
                <div className="text-center mb-4 pb-3 border-bottom">
                  <h2 className="h6 mb-3 pb-1">Subtotal</h2>
                  <h3 className="fw-normal">$265.<small>00</small></h3>
                </div>
                <div className="mb-3 mb-4">
                  <label className="form-label mb-3" htmlFor="order-comments"><span className="badge bg-info fs-xs me-2">Note</span><span className="fw-medium">Additional comments</span></label>
                  <textarea className="form-control" rows="6" id="order-comments"></textarea>
                </div>
                <div className="accordion" id="order-options">
                  <div className="accordion-item">
                    <h3 className="accordion-header"><a className="accordion-button" href="#promo-code" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="promo-code">Apply promo code</a></h3>
                    <div className="accordion-collapse collapse show" id="promo-code" data-bs-parent="#order-options">
                      <form className="accordion-body needs-validation" method="post" noValidate>
                        <div className="mb-3">
                          <input className="form-control" type="text" placeholder="Promo code" required />
                          <div className="invalid-feedback">Please provide promo code.</div>
                        </div>
                        <button className="btn btn-outline-primary d-block w-100" type="submit">Apply promo code</button>
                      </form>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header"><a className="accordion-button collapsed" href="#shipping-estimates" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="shipping-estimates">Shipping estimates</a></h3>
                    <div className="accordion-collapse collapse" id="shipping-estimates" data-bs-parent="#order-options">
                      <div className="accordion-body">
                        <form className="needs-validation" noValidate>
                          <div className="mb-3">
                            <select className="form-select" required>
                              <option value="">Choose your country</option>
                              <option value="Australia">Australia</option>
                              <option value="Belgium">Belgium</option>
                              <option value="Canada">Canada</option>
                              <option value="Finland">Finland</option>
                              <option value="Mexico">Mexico</option>
                              <option value="New Zealand">New Zealand</option>
                              <option value="Switzerland">Switzerland</option>
                              <option value="United States">United States</option>
                            </select>
                            <div className="invalid-feedback">Please choose your country!</div>
                          </div>
                          <div className="mb-3">
                            <select className="form-select" required>
                              <option value="">Choose your city</option>
                              <option value="Bern">Bern</option>
                              <option value="Brussels">Brussels</option>
                              <option value="Canberra">Canberra</option>
                              <option value="Helsinki">Helsinki</option>
                              <option value="Mexico City">Mexico City</option>
                              <option value="Ottawa">Ottawa</option>
                              <option value="Washington D.C.">Washington D.C.</option>
                              <option value="Wellington">Wellington</option>
                            </select>
                            <div className="invalid-feedback">Please choose your city!</div>
                          </div>
                          <div className="mb-3">
                            <input className="form-control" type="text" placeholder="ZIP / Postal code" required />
                            <div className="invalid-feedback">Please provide a valid zip!</div>
                          </div>
                          <button className="btn btn-outline-primary d-block w-100" type="submit">Calculate shipping</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div><a className="btn btn-primary btn-shadow d-block w-100 mt-4" href="checkout-details.html"><i className="ci-card fs-lg me-2"></i>Proceed to Checkout</a>
              </div>
            </div>
          </aside>
        </>
    )
}

export default Subtotal
