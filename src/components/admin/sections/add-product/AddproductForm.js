import React, { useState } from 'react'
import { selectStatus, selectFlash, selectSlotType, selectMemoryCardType } from '../../../../data/select.json';
import { uppercaseFirstLetter, Host, Endpoints, getUserInfo, convertToBase64, notify } from '../../../../helpers/comman_helpers';
import axios from 'axios';
import { useHistory } from 'react-router';

const AddproductForm = () => {
    const history = useHistory();
    const [productInfo, setProductInfo] = useState({});
    const [error, setError] = useState({});

    const handleChange = (e) => {
        setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
    }

    const isValid = () => {
        if (productInfo && productInfo.title === '' || productInfo.title === undefined) {
            setError({ title: 'Please add a product name' });
            return false;
        } else if (productInfo.status === '' || productInfo.status === undefined) {
            setError({ status: "Please select status" });
            return false
        } else if (productInfo.description === '' || productInfo.description === undefined) {
            setError({ description: "Please add description" });
            return false
        } else if (productInfo.original_price === '' || productInfo.original_price === undefined) {
            setError({ original_price: "Please add original price" });
            return false
        } else if (productInfo.discounted_price === '' || productInfo.discounted_price === undefined) {
            setError({ discounted_price: "Please add discounted price" });
            return false
        } else if (productInfo.internal_storage === '' || productInfo.internal_storage === undefined) {
            setError({ internal_storage: "Please add internal storage" });
            return false
        } else if (productInfo.ram === '' || productInfo.ram === undefined) {
            setError({ ram: "Please add ram" });
            return false
        } else if (productInfo.expandable_storage === '' || productInfo.expandable_storage === undefined) {
            setError({ expandable_storage: "Please add expandable storage" });
            return false
        } else if (productInfo.memory_card_type === '' || productInfo.memory_card_type === undefined) {
            setError({ memory_card_type: "Please add memory card_type" });
            return false
        } else if (productInfo.slot_type === '' || productInfo.slot_type === undefined) {
            setError({ slot_type: "Please add slot type" });
            return false
        } else if (productInfo.primary_camera === '' || productInfo.primary_camera === undefined) {
            setError({ primary_camera: "Please add primary camera" });
            return false
        } else if (productInfo.secondary_camera === '' || productInfo.secondary_camera === undefined) {
            setError({ secondary_camera: "Please add secondary camera" });
            return false
        } else if (productInfo.flash === '' || productInfo.flash === undefined) {
            setError({ flash: "Please add flash" });
            return false
        } else if (productInfo.modal_number === '' || productInfo.modal_number === undefined) {
            setError({ modal_number: "Please add modal number" });
            return false
        } else if (productInfo.modal_name === '' || productInfo.modal_name === undefined) {
            setError({ modal_name: "Please add modal name" });
            return false
        } else if (productInfo.color === '' || productInfo.color === undefined) {
            setError({ color: "Please add color" });
            return false
        } else {
            return true;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isValid()) {
            setError({})

            var url = Host +  Endpoints.product
            var headers = {
                headers:{
                    token: `Bearer ${getUserInfo().token}`
                }
            }
            const response = await axios.post(url, productInfo, headers);
            if(response.data.error){
                notify(response.data.title, 'error');
            }else{
                notify(response.data.title, 'success');
                setTimeout(function(){
                    history.push("/admin/dashboard");
                }, 2000);
            }
            console.log(response);

        } else {
            console.log("Please fill all details!");
        }
    }
    const uploadImages = async (e) => {
        var files = e.target.files;
        var base64Images = [];
        for (var i = 0; i < files.length; i++) {
          const singleBase64Image = await convertToBase64(files[i]);
          base64Images.push(singleBase64Image);
        }
        setProductInfo({ ...productInfo, image: base64Images });
      }
    return (
        <>
            <section className="col-lg-8 pt-lg-4 pb-4 mb-3">
                <div className="pt-2 px-4 ps-lg-0 pe-xl-5">
                    <form onSubmit={handleSubmit}>
                        <div className="d-sm-flex flex-wrap justify-content-between align-items-center pb-2">
                            <h2 className="h3 py-2 me-2 text-center text-sm-start">Add New Product</h2>
                            <div className="py-2">
                                <select className="form-select me-2" id="unp-category" name="status" onChange={(e) => handleChange(e)}>
                                    <option value="">Select category</option>
                                    {selectStatus.map(value => (
                                        <option key={value.id} value={value.value}>{uppercaseFirstLetter(value.name)}</option>
                                    ))}
                                </select>
                                {error.status && <p className="text-danger">{error.status}</p>}
                            </div>
                        </div>
                        <div className="mb-3 pb-2">
                            <label className="form-label required" htmlFor="unp-product-name">Product name</label>
                            <input className="form-control" type="text" id="unp-product-name" name="title" onChange={(e) => handleChange(e)} />
                            <div className="form-text">Maximum 100 characters. No HTML or emoji allowed.</div>
                            {error.title && <p className="text-danger">{error.title}</p>}
                        </div>
                        <div className="mb-3 py-2">
                            <label className="form-label required" htmlFor="unp-product-description">Product description</label>
                            <textarea className="form-control" rows="6" id="unp-product-description" name="description" onChange={(e) => handleChange(e)}></textarea>
                            {error.description && <p className="text-danger">{error.description}</p>}
                        </div>
                        <div className="mb-3 pb-2">
                            <label className="form-label required" htmlFor="unp-product-files">Images</label>
                            <input className="form-control" type="file" id="unp-product-files" name="image" multiple onChange={(e) => uploadImages(e)} />
                            <div className="form-text">Maximum file size is 1GB</div>
                            {error.image && <p className="text-danger">{error.image}</p>}
                        </div>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-standard-price">Original Price</label>
                                <div className="input-group"><span className="input-group-text"><i className="ci-rupee"></i></span>
                                    <input className="form-control" type="text" id="unp-standard-price" name="original_price" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-text">Average marketplace price for this category is $15.</div>
                                {error.original_price && <p className="text-danger">{error.original_price}</p>}
                            </div>
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-extended-price">Discounted Price</label>
                                <div className="input-group"><span className="input-group-text"><i className="ci-rupee"></i></span>
                                    <input className="form-control" type="text" id="unp-extended-price" name="discounted_price" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-text">Typically 10x of the Standard license price.</div>
                                {error.discounted_price && <p className="text-danger">{error.discounted_price}</p>}
                            </div>
                        </div>
                        <hr className="my-4" />
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-standard-price">Internal Storage</label>
                                <div className="input-group"><span className="input-group-text">GB</span>
                                    <input className="form-control" type="text" id="unp-standard-price" name="internal_storage" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-text">Average marketplace price for this category is $15.</div>
                                {error.internal_storage && <p className="text-danger">{error.internal_storage}</p>}
                            </div>
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-extended-price">Ram</label>
                                <div className="input-group"><span className="input-group-text">GB</span>
                                    <input className="form-control" type="text" id="unp-extended-price" name="ram" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-text">Typically 10x of the Standard license price.</div>
                                {error.ram && <p className="text-danger">{error.ram}</p>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-standard-price">Expandable Storage</label>
                                <div className="input-group"><span className="input-group-text">GB</span>
                                    <input className="form-control" type="text" id="unp-standard-price" name="expandable_storage" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-text">Average marketplace price for this category is $15.</div>
                                {error.expandable_storage && <p className="text-danger">{error.expandable_storage}</p>}
                            </div>
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-extended-price">Supported Memory Card</label>
                                <div className="input-group">
                                    <select className="form-select me-2" id="unp-category" name="memory_card_type" onChange={(e) => handleChange(e)}>
                                        <option value="">Choose Slot Type</option>
                                        {selectMemoryCardType.map(value => (
                                            <option key={value.id} value={value.id}>{uppercaseFirstLetter(value.name)}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-text">Typically 10x of the Standard license price.</div>
                                {error.memory_card_type && <p className="text-danger">{error.memory_card_type}</p>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-extended-price">Slot type</label>
                                <select className="form-select me-2" id="unp-category" name="slot_type" onChange={(e) => handleChange(e)}>
                                    <option value="">Choose Slot Type</option>
                                    {selectSlotType.map(value => (
                                        <option key={value.id} value={value.value}>{uppercaseFirstLetter(value.name)}</option>
                                    ))}
                                </select>
                                <div className="form-text">Typically 10x of the Standard license price.</div>
                                {error.slot_type && <p className="text-danger">{error.slot_type}</p>}
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-standard-price">Primary Camera</label>
                                <div className="input-group">
                                    <span className="input-group-text">MP</span>
                                    <input className="form-control" type="text" id="unp-standard-price" name="primary_camera" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-text">Average marketplace price for this category is $15.</div>
                                {error.primary_camera && <p className="text-danger">{error.primary_camera}</p>}
                            </div>
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-extended-price">Secondary Camera</label>
                                <div className="input-group">
                                    <span className="input-group-text">MP</span>
                                    <input className="form-control" type="text" id="unp-extended-price" name="secondary_camera" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-text">Typically 10x of the Standard license price.</div>
                                {error.secondary_camera && <p className="text-danger">{error.secondary_camera}</p>}
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-standard-price">Select flash</label>
                                <select className="form-select me-2" id="unp-category" name="flash" onChange={(e) => handleChange(e)}>
                                    <option value="">Choose Flash</option>
                                    {selectFlash.map(value => (
                                        <option key={value.id} value={value.value}>{uppercaseFirstLetter(value.name)}</option>
                                    ))}
                                </select>
                                {error.flash && <p className="text-danger">{error.flash}</p>}
                            </div>
                        </div>
                        <hr className="my-4" />

                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-standard-price">Modal Number</label>
                                <div className="input-group">
                                    <input className="form-control" type="text" id="unp-standard-price" name="modal_number" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-text">Average marketplace price for this category is $15.</div>
                                {error.modal_number && <p className="text-danger">{error.modal_number}</p>}
                            </div>
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-extended-price">Modal Name</label>
                                <div className="input-group">
                                    <input className="form-control" type="text" id="unp-extended-price" name="modal_name" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-text">Typically 10x of the Standard license price.</div>
                                {error.modal_name && <p className="text-danger">{error.modal_name}</p>}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <label className="form-label required" htmlFor="unp-standard-price">Color</label>
                                <div className="input-group">
                                    <input className="form-control" type="text" id="unp-standard-price" name="color" onChange={(e) => handleChange(e)} />
                                </div>
                                <div className="form-text">Average marketplace price for this category is $15.</div>
                                {error.color && <p className="text-danger">{error.color}</p>}
                            </div>
                        </div>
                        <button className="btn btn-primary d-block w-100" type="submit">
                            <i className="ci-cloud-upload fs-lg me-2"></i>Upload Product
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddproductForm
