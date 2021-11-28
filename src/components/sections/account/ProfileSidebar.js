import React from 'react'

const ProfileSidebar = () => {
    return (
        <>
            <aside className="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
                <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
                    <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                        <div className="d-md-flex align-items-center">
                            <div className="img-thumbnail rounded-circle position-relative flex-shrink-0 mx-auto mb-2 mx-md-0 mb-md-0" style={{ width: "6.375rem" }}>
                                <span className="badge bg-warning position-absolute end-0 mt-n2" data-bs-toggle="tooltip" title="Reward points">384</span>
                                <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/25549118?v=4" alt="Rahul More" /></div>
                            <div className="ps-md-3">
                                <h3 className="fs-base mb-0">Rahul More</h3><span className="text-accent fs-sm">s.gardner@example.com</span>
                            </div>
                        </div><a className="btn btn-primary d-lg-none mb-2 mt-3 mt-md-0" href="#account-menu" data-bs-toggle="collapse" aria-expanded="false"><i className="ci-menu me-2"></i>Account menu</a>
                    </div>
                    <div className="d-lg-block collapse" id="account-menu">
                        <div className="bg-secondary px-4 py-3">
                            <h3 className="fs-sm mb-0 text-muted">Dashboard</h3>
                        </div>
                        <ul className="list-unstyled mb-0">
                            <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-orders.html"><i className="ci-bag opacity-60 me-2"></i>Orders<span className="fs-sm text-muted ms-auto">1</span></a></li>
                            <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-wishlist.html"><i className="ci-heart opacity-60 me-2"></i>Wishlist<span className="fs-sm text-muted ms-auto">3</span></a></li>
                            <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-tickets.html"><i className="ci-help opacity-60 me-2"></i>Support tickets<span className="fs-sm text-muted ms-auto">1</span></a></li>
                        </ul>
                        <div className="bg-secondary px-4 py-3">
                            <h3 className="fs-sm mb-0 text-muted">Account settings</h3>
                        </div>
                        <ul className="list-unstyled mb-0">
                            <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3 active" href="account-profile.html"><i className="ci-user opacity-60 me-2"></i>Profile info</a></li>
                            <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-address.html"><i className="ci-location opacity-60 me-2"></i>Addresses</a></li>
                            <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-payment.html"><i className="ci-card opacity-60 me-2"></i>Payment methods</a></li>
                            <li className="d-lg-none border-top mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-signin.html"><i className="ci-sign-out opacity-60 me-2"></i>Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default ProfileSidebar
