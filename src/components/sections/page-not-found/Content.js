import React from 'react'
import { Link } from 'react-router-dom';
import NotFoundImage from '../../../assets/images/logo/404.png'

const Content = () => {
    return (
        <>
            <div className="container py-5 mb-lg-3">
                <div className="row justify-content-center pt-lg-4 text-center">
                    <div className="col-lg-5 col-md-7 col-sm-9">
                        <img className="d-block mx-auto mb-5" src={NotFoundImage} width="340" alt="404 Error" />
                        <h1 className="h3">404 error</h1>
                        <h3 className="h5 fw-normal mb-4">We can't seem to find the page you are looking for.</h3>
                        <p className="fs-md mb-4">
                            <u>Here are some helpful links instead:</u>
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="row">
                            <div className="col-sm-4 mb-3">
                                <Link className="card h-100 border-0 shadow-sm" to={'/'}>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center"><i className="ci-home text-primary h4 mb-0"></i>
                                            <div className="ps-3">
                                                <h5 className="fs-sm mb-0">Homepage</h5>
                                                <span className="text-muted fs-ms">Return to homepage</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4 mb-3">
                                <Link className="card h-100 border-0 shadow-sm" to={'/'}>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <i className="ci-search text-success h4 mb-0"></i>
                                            <div className="ps-3">
                                                <h5 className="fs-sm mb-0">By Category</h5>
                                                <span className="text-muted fs-ms">Top Categories</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-4 mb-3">
                                <Link className="card h-100 border-0 shadow-sm" to={'/'}>
                                    <div className="card-body">
                                        <div className="d-flex align-items-center"><i className="ci-help text-info h4 mb-0"></i>
                                            <div className="ps-3">
                                                <h5 className="fs-sm mb-0">Latest Products</h5>
                                                <span className="text-muted fs-ms">Checkout latest products!</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
