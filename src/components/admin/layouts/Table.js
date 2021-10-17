import React from 'react'
import paypalLogo from '../../../assets/images/logo/paypal-logo.png';
const Table = () => {
    return (
        <>
            <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
                <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                    <h2 className="h3 py-2 text-center text-sm-start">Payouts</h2>
                    <div className="row mx-n2 py-2">
                        <div className="col-sm-6 px-2 mb-4">
                            <div className="bg-secondary h-100 rounded-3 p-4">
                                <h3 className="h5">Next payout</h3>
                                <p className="fs-sm">Your current earnings of <span className='fw-medium'>$1,375.00</span> will be sent to you 8/15/2019</p>
                            </div>
                        </div>
                        <div className="col-sm-6 px-2 mb-4">
                            <div className="bg-secondary h-100 rounded-3 p-4">
                                <h3 className="h5">Payout method</h3>
                                <div className="d-flex flex-wrap align-items-center py-1 mb-2">
                                    <img className="d-block mb-2 me-2" src={paypalLogo} width="100" alt="PayPal" /><span className="fs-xs mb-2">john.doe@example.com</span></div><a className="btn btn-primary btn-sm" href="#">Change payout method</a>
                            </div>
                        </div>
                    </div>
                    <h3 className="h5 pb-2">Payout history</h3>
                    <div className="table-responsive">
                        <table className="table table-layout-fixed fs-sm mb-0">
                            <thead>
                                <tr>
                                    <th>Amount</th>
                                    <th>Payout method</th>
                                    <th>Date processed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$1,233.84</td>
                                    <td>PayPal</td>
                                    <td>July 16, 2019</td>
                                </tr>
                                <tr>
                                    <td>$805.79</td>
                                    <td>PayPal</td>
                                    <td>July 1, 2019</td>
                                </tr>
                                <tr>
                                    <td>$1,564.98</td>
                                    <td>PayPal</td>
                                    <td>June 17, 2019</td>
                                </tr>
                                <tr>
                                    <td>$697.79</td>
                                    <td>PayPal</td>
                                    <td>June 2, 2019</td>
                                </tr>
                                <tr>
                                    <td>$2,060.80</td>
                                    <td>Payoneer</td>
                                    <td>May 15, 2019</td>
                                </tr>
                                <tr>
                                    <td>$754.30</td>
                                    <td>Payoneer</td>
                                    <td>May 1, 2019</td>
                                </tr>
                                <tr>
                                    <td>$1,372.26</td>
                                    <td>Payoneer</td>
                                    <td>April 16, 2019</td>
                                </tr>
                                <tr>
                                    <td>$1,296.41</td>
                                    <td>SWIFT</td>
                                    <td>April 3, 2019</td>
                                </tr>
                                <tr>
                                    <td>$339.57</td>
                                    <td>SWIFT</td>
                                    <td>March 17, 2019</td>
                                </tr>
                                <tr>
                                    <td>$493.24</td>
                                    <td>SWIFT</td>
                                    <td>February 28, 2019</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <hr className="mb-grid-gutter" />
                    <nav className="d-md-flex justify-content-between align-items-center text-center text-md-start" aria-label="Page navigation">
                        <div className="d-md-flex align-items-center w-100"><span className="fs-sm text-muted me-md-3">Showing 10 of 52 records</span>
                            <div className="progress w-100 my-3 mx-auto mx-md-0" style={{ maxWidth: "10rem", height: "4px" }}>
                                <div className="progress-bar" role="progressbar" style={{ width: "20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <button className="btn btn-outline-primary btn-sm" type="button">More records</button>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Table
