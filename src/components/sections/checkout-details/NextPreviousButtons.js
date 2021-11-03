import React from 'react'
import { Link } from 'react-router-dom'

const NextPreviousButtons = ({previous, next}) => {
    return (
        <>
            <div className="w-50 pe-3">
                <Link className="btn btn-secondary d-block w-100" to={previous}>
                    <i className="ci-arrow-left mt-sm-0 me-1"></i>
                    <span className="d-none d-sm-inline">Back to Cart</span>
                    <span className="d-inline d-sm-none">Back</span>
                </Link>
            </div>
            <div className="w-50 ps-2">
                <Link className="btn btn-primary d-block w-100" to={next}>
                    <span className="d-none d-sm-inline">Proceed to Shipping</span>
                    <span className="d-inline d-sm-none">Next</span>
                    <i className="ci-arrow-right mt-sm-0 ms-1"></i>
                </Link>
            </div>
        </>
    )
}

export default NextPreviousButtons
