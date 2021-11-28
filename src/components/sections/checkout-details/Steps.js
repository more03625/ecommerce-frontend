import React from 'react'
import { Link } from 'react-router-dom'

const Steps = () => {
    return (
        <>
            <div className="steps steps-light pt-2 pb-3 mb-5">
                    <Link className="step-item active" to="/cart">
                        <div className="step-progress">
                            <span className="step-count">1</span>
                        </div>
                        <div className="step-label">
                            <i className="ci-cart"></i>Cart
                        </div>
                    </Link>
                    <Link className="step-item active current" to="/checkout-details">
                        <div className="step-progress">
                            <span className="step-count">2</span>
                        </div>
                        <div className="step-label">
                            <i className="ci-user-circle"></i>Details
                        </div>
                    </Link>
                    <Link className="step-item" to="/payment">
                        <div className="step-progress"><span className="step-count">3</span></div>
                        <div className="step-label"><i className="ci-card"></i>Payment</div>
                    </Link>
                </div>
        </>
    )
}

export default Steps
