import React from 'react'
import Sidebar from '../../layouts/Sidebar';
import AddproductsForm from '../add-product/AddproductForm';

const Content = () => {
    return (
        <>
            <div className="container mb-5 pb-3">
                <div className="bg-light shadow-lg rounded-3 overflow-hidden">
                    <div className="row">
                        <Sidebar />
                        <AddproductsForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
