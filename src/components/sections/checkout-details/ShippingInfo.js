import React, { useEffect, useState } from 'react'
import { Endpoints, getUserInfo, Host, notify } from '../../../helpers/comman_helpers';
import Steps from './Steps';
import NextPreviousButtons from './NextPreviousButtons';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Spinner from '../../layouts/Spinner';
const ShippingInfo = () => {
    const [error, setError] = useState({});
    const [shippingInfo, setShippingInfo] = useState({});
    const [loading, setLoading] = useState({ loading: false, apiLoading: false });

    const history = useHistory();

    const handleChange = (e) => {
        setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
    }

    const isValid = () => {
        if (shippingInfo.username === '' || shippingInfo.username === undefined || shippingInfo.username === null) {
            var err = 'Please enter name';
            setError({ username: err });
            notify(err, 'error')
            return false;
        }
        else if (shippingInfo.lastname === '' || shippingInfo.lastname === undefined || shippingInfo.lastname === null) {
            var err = 'Please enter lastname';
            setError({ lastname: err });
            notify(err, 'error')
            return false;
        }
        else if (shippingInfo.email === '' || shippingInfo.email === undefined || shippingInfo.email === null) {
            var err = 'Please enter email';
            setError({ email: err });
            notify(err, 'error')
            return false;
        }
        else if (shippingInfo.phone === '' || shippingInfo.phone === undefined || shippingInfo.phone === null) {
            var err = 'Please enter phone';
            setError({ phone: err });
            notify(err, 'error')
            return false;
        }
        else if (shippingInfo.addressOne === '' || shippingInfo.addressOne === undefined || shippingInfo.addressOne === null) {
            var err = 'Please enter address line 1';
            setError({ addressOne: err });
            notify(err, 'error')
            return false;
        }
        else if (shippingInfo.addressTwo === '' || shippingInfo.addressTwo === undefined || shippingInfo.addressTwo === null) {
            var err = 'Please enter address 2';
            setError({ addressTwo: err });
            notify(err, 'error')
            return false;
        }
        else if (shippingInfo.zipcode === '' || shippingInfo.zipcode === undefined || shippingInfo.zipcode === null) {
            var err = 'Please enter zipcode';
            setError({ zipcode: err });
            notify(err, 'error')
            return false;
        } else {
            return true
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValid()) {
            let url = Host + Endpoints.users + "/" + getUserInfo().data._id;
            let headers = {
                token: `Bearer ${getUserInfo().token}`
            }
            const response = await axios.put(url, shippingInfo, { headers });
            if (response.data.error) {
                notify(response.data.title, 'error')
            } else {
                console.log("Response ===>", response.data)
                history.push('/payment')
            }
        }
    }
    const getUserDetails = async () => {
        setLoading({ apiLoading: true })
        try {
            let url = Host + Endpoints.users + "/find/" + getUserInfo().data._id;
            let headers = {
                token: `Bearer ${getUserInfo().token}`
            }
            const response = await axios.get(url, { headers });
            console.log(response.data.error);
            if (response.data.error) {
                notify(response.data.title, 'error');
            } else {
                setShippingInfo(response.data.data);
            }
        } catch (err) {
            const { response } = err
            notify(response.data.title, 'error')
        }
        setLoading({ apiLoading: false })
    }
    useEffect(() => {
        getUserDetails();
    }, [])
    return (
        <>
            <section className="col-lg-8">
                <Steps />
                {loading.apiLoading ? (<Spinner />) : (
                    <>
                        <div className="d-sm-flex justify-content-between align-items-center bg-secondary p-4 rounded-3 mb-grid-gutter">
                            <div className="d-flex align-items-center">
                                <div className="img-thumbnail rounded-circle position-relative flex-shrink-0">
                                    <img className="rounded-circle" src={shippingInfo?.profileImage} width="90" alt={shippingInfo?.username} /></div>
                                <div className="ps-3">
                                    <h3 className="fs-base mb-0">{shippingInfo?.username}</h3><span className="text-accent fs-sm">{shippingInfo?.email}</span>
                                </div>
                            </div>
                            <Link className="btn btn-light btn-sm btn-shadow mt-3 mt-sm-0" to="/account/profile"><i className="ci-edit me-2"></i>Edit profile</Link>
                        </div>
                        <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">Shipping address</h2>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label required" htmlFor="checkout-fn">First Name</label>
                                    <input className="form-control" type="text" name="username" onChange={(e) => handleChange(e)} defaultValue={shippingInfo?.username} />
                                    {error.username && <span className="text-danger">{error.username}</span>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label required" htmlFor="checkout-ln">Last Name</label>
                                    <input className="form-control" type="text" name="lastname" onChange={(e) => handleChange(e)} defaultValue={shippingInfo?.lastname} />
                                    {error.lastname && <span className="text-danger">{error.lastname}</span>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label required" htmlFor="checkout-email">E-mail Address</label>
                                    <input className="form-control" type="email" name="email" onChange={(e) => handleChange(e)} defaultValue={shippingInfo?.email} />
                                    {error.email && <span className="text-danger">{error.email}</span>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label required" htmlFor="checkout-phone">Phone Number</label>
                                    <input className="form-control" type="text" name="phone" onChange={(e) => handleChange(e)} defaultValue={shippingInfo?.phone} />
                                    {error.phone && <span className="text-danger">{error.phone}</span>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label required" htmlFor="checkout-address-1">Address 1</label>
                                    <input className="form-control" type="text" name="addressOne" onChange={(e) => handleChange(e)} defaultValue={shippingInfo?.addressOne} />
                                    {error.addressOne && <span className="text-danger">{error.addressOne}</span>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label required" htmlFor="checkout-address-2">Address 2</label>
                                    <input className="form-control" type="text" name="addressTwo" onChange={(e) => handleChange(e)} defaultValue={shippingInfo?.addressTwo} />
                                    {error.addressTwo && <span className="text-danger">{error.addressTwo}</span>}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                    <label className="form-label required" htmlFor="checkout-zip">ZIP Code</label>
                                    <input className="form-control" type="text" name="zipcode" onChange={(e) => handleChange(e)} defaultValue={shippingInfo?.zipcode} />
                                    {error.zipcode && <span className="text-danger">{error.zipcode}</span>}
                                </div>
                            </div>
                        </div>

                        <div className="d-none d-lg-flex pt-4 mt-3">
                            <NextPreviousButtons
                                previous="/cart"
                                next="/payment"
                                handleSubmit={handleSubmit}
                            />
                        </div>
                    </>
                )

                }

            </section>
        </>
    )
}

export default ShippingInfo
