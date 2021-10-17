import React from 'react'

const Sidebar = () => {
    return (
        <>
        <aside className="col-lg-4 pe-xl-5">
            <div className="d-block d-lg-none p-4"><a className="btn btn-outline-accent d-block" href="#account-menu" data-bs-toggle="collapse"><i className="ci-menu me-2"></i>Account menu</a></div>
            <div className="h-100 border-end mb-2">
                <div className="d-lg-block collapse" id="account-menu">
                    <div className="bg-secondary p-4">
                        <h3 className="fs-sm mb-0 text-muted">Account</h3>
                    </div>
                    <ul className="list-unstyled mb-0">
                        <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-settings.html"><i className="ci-settings opacity-60 me-2"></i>Settings</a></li>
                        <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-purchases.html"><i className="ci-basket opacity-60 me-2"></i>Purchases</a></li>
                        <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="#"><i className="ci-heart opacity-60 me-2"></i>Favorites<span className="fs-sm text-muted ms-auto">4</span></a></li>
                    </ul>
                    <div className="bg-secondary p-4">
                        <h3 className="fs-sm mb-0 text-muted">Seller Dashboard</h3>
                    </div>
                    <ul className="list-unstyled mb-0">
                        <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-sales.html"><i className="ci-dollar opacity-60 me-2"></i>Sales<span className="fs-sm text-muted ms-auto">$1,375.00</span></a></li>
                        <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-products.html"><i className="ci-package opacity-60 me-2"></i>Products<span className="fs-sm text-muted ms-auto">5</span></a></li>
                        <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3 active" href="dashboard-add-new-product.html"><i className="ci-cloud-upload opacity-60 me-2"></i>Add New Product</a></li>
                        <li className="border-bottom mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="dashboard-payouts.html"><i className="ci-currency-exchange opacity-60 me-2"></i>Payouts</a></li>
                        <li className="mb-0"><a className="nav-link-style d-flex align-items-center px-4 py-3" href="account-signin.html"><i className="ci-sign-out opacity-60 me-2"></i>Sign out</a></li>
                    </ul>
                    <hr />
                </div>
            </div>
        </aside>
        </>
    )
}

export default Sidebar
