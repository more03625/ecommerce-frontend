import React, { useState } from 'react'
import { selectBrands, selectColours } from '../../../data/select.json';
const Filters = () => {
    const [phoneFilters, setPhoneFilters] = useState({});

    let filterBrands = []
    let filterColours = []

    const handleCheckbox = (e) => {
        if (e.target.name === 'brand') {
            let index = filterBrands.indexOf(e.target.value);
            if (index > -1) {
                filterBrands.splice(index, 1)
            } else {
                filterBrands.push(e.target.value);
            }
        } else if (e.target.name === 'colour') {
            let index = filterColours.indexOf(e.target.value);
            if (index > -1) {
                filterColours.splice(index, 1)
            } else {
                filterColours.push(e.target.value);
            }
        }
    }

    const handleChange = (e) => {

        setPhoneFilters({ ...phoneFilters, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {

        let data = {
            brands: filterBrands.toString(),
            colours: filterColours.toString()
        }
        console.log(Object.assign(phoneFilters, data))

    }


    return (
        <>
            <aside className="col-lg-4">
                {/*Sidebar*/}
                <div className="offcanvas offcanvas-collapse bg-white w-100 rounded-3 shadow-lg py-1" id="shop-sidebar" style={{ maxWidth: "22rem" }}>
                    <div className="offcanvas-header align-items-center shadow-sm">
                        <h2 className="h5 mb-0">Filters</h2>
                        <button className="btn-close ms-auto" type="button" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body py-grid-gutter px-lg-grid-gutter">
                        {/*Categories*/}

                        {/*Price range*/}
                        <div className="widget mb-4 pb-4 border-bottom">
                            <h3 className="widget-title">Price</h3>

                            <div className="d-flex pb-1">
                                <div className="w-50 pe-2 me-2">
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text"><i className="ci-rupee"></i></span>
                                        <input className="form-control range-slider-value-min" placeholder="Min 1 rs." type="text" name="minPrice" onChange={(e) => handleChange(e)} />
                                    </div>
                                </div>
                                <div className="w-50 ps-2">
                                    <div className="input-group input-group-sm">
                                        <span className="input-group-text"><i className="ci-rupee"></i></span>
                                        <input className="form-control range-slider-value-max" placeholder="Max 1,00,00,00,00" type="text" name="maxPrice" onChange={(e) => handleChange(e)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Filter by Brand*/}
                        <div className="widget widget-filter mb-4 pb-4 border-bottom">
                            <h3 className="widget-title">Brand</h3>
                            <div className="input-group input-group-sm mb-2">
                                <input className="widget-filter-search form-control rounded-end pe-5" type="text" placeholder="Search" /><i
                                    className="ci-search position-absolute top-50 end-0 translate-middle-y fs-sm me-3"></i>
                            </div>
                            <ul className="widget-list widget-filter-list list-unstyled pt-1" style={{ maxHeight: "11rem" }}
                                data-simplebar data-simplebar-auto-hide="false">
                                {selectBrands.map((value, index) => (
                                    <li key={index} className="widget-filter-item d-flex justify-content-between align-items-center mb-1">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" name="brand" id={value.name} defaultValue={value.name} onChange={(e) => handleCheckbox(e)} />
                                            <label className="form-check-label widget-filter-item-text" htmlFor={value.name}>{value.name}</label>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        {/*Filter by Size*/}
                        {/*Filter by Color*/}
                        <div className="widget">
                            <h3 className="widget-title">Color</h3>
                            <div className="d-flex flex-wrap">
                                {selectColours.map((value, index) => (
                                    <div key={index} className="form-check form-option text-center mb-2 mx-1" style={{ width: "4rem" }}>
                                        <input className="form-check-input" type="checkbox" id={value.name} name="colour" defaultValue={value.name} onChange={(e) => handleCheckbox(e)} />
                                        <label className="form-option-label rounded-circle" htmlFor={value.name}>
                                            <span className="form-option-color rounded-circle" style={{ backgroundColor: value.colourCode }}></span>
                                        </label>
                                        <label className="d-block fs-xs text-muted mt-n1" htmlFor={value.name}>{value.name}</label>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-primary d-block w-100" onClick={handleSubmit}>Apply Filters</button>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Filters
