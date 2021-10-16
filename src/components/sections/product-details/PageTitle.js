import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { convertToSlug } from '../../../helpers/comman_helpers';
const PageTitle = () => {
    const product = useSelector((state) => state.product);
    const { _id, title, image, price, description, categories, createdAt, updatedAt } = product;

    return (
        <>
            <div className="page-title-overlap bg-dark pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li className="breadcrumb-item">
                                    <Link className="text-nowrap" to="/">
                                        <i className="ci-home"></i>Home
                                    </Link>
                                </li>
                                <li className="breadcrumb-item text-nowrap"><a href="#">Product</a>
                                </li>
                                <li className="breadcrumb-item text-nowrap active" aria-current="page">{convertToSlug(title)?.slice(0.25) + "..."}</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                        <h1 className="h3 text-light mb-0">{title}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageTitle
