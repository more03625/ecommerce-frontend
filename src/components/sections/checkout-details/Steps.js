import React from 'react'

const Steps = () => {
    return (
        <>
            <div className="steps steps-light pt-2 pb-3 mb-5">
                    <a className="step-item active" href="#">
                        <div className="step-progress">
                            <span className="step-count">1</span>
                        </div>
                        <div className="step-label">
                            <i className="ci-cart"></i>Cart
                        </div>
                    </a>
                    <a className="step-item active current" href="#">
                        <div className="step-progress">
                            <span className="step-count">2</span>
                        </div>
                        <div className="step-label">
                            <i className="ci-user-circle"></i>Details
                        </div>
                    </a>
                    <a className="step-item" href="#">
                        <div className="step-progress"><span className="step-count">3</span></div>
                        <div className="step-label"><i className="ci-card"></i>Payment</div>
                    </a>
                </div>
        </>
    )
}

export default Steps
