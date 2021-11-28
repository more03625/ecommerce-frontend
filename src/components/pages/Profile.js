import React, { useState, useEffect } from 'react'
import Header from '../layouts/Header'
import PageTitle from '../sections/product-details/PageTitle'
import { useHistory } from 'react-router';
import { Host, Endpoints, getUserInfo, notify, catchError, convertToBase64 } from '../../helpers/comman_helpers';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import Spinner from '../layouts/Spinner';
import ProfileSidebar from '../sections/account/ProfileSidebar'
const Profile = () => {
  const [error, setError] = useState({});
  const [shippingInfo, setShippingInfo] = useState({});
  const [loading, setLoading] = useState({ loading: false, apiLoading: false });
  const history = useHistory();

  const handleChange = async (e) => {
    if (e.target.name === 'profileImage') {
      var base64Image = await convertToBase64(e.target.files[0]);
      setShippingInfo({ ...shippingInfo, profileImage: base64Image });
      return;
    }

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
    setLoading({ loading: true });
    try {
      if (isValid()) {
        let url = Host + Endpoints.users + "/" + getUserInfo().data._id;
        let headers = {
          token: `Bearer ${getUserInfo().token}`
        }
        const response = await axios.put(url, shippingInfo, { headers });
        if (response.data.error) {
          notify(response.data.title, 'error')
        } else {
          notify(response.data.title, 'success')
        }
      }
    }
    catch (err) {
      notify(catchError, 'error')
    }
    setLoading({ loading: false });

  }
  const getUserDetails = async () => {
    setLoading({ apiLoading: true });

    try {
      let url = Host + Endpoints.users + "/find/" + getUserInfo().data._id;
      let headers = {
        token: `Bearer ${getUserInfo().token}`
      }
      const response = await axios.get(url, { headers });
      if (response.data.error) {
        notify(response.data.title, 'error');
      } else {
        setShippingInfo(response.data.data);
      }
    } catch (err) {
      notify(catchError, 'error');
    }
    setLoading({ apiLoading: false });
  }

  useEffect(() => {
    getUserDetails();
  }, [])
  return (
    <>
      <Header />
      <PageTitle title={'Profile Info'} />

      <div className="container pb-5 mb-2 mb-md-4">
        <Toaster />
        <div className="row">
          <ProfileSidebar />
          <section className="col-lg-8">
            <div className="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
              <h6 className="fs-base text-light mb-0">Update you profile details below:</h6><a className="btn btn-primary btn-sm" href="account-signin.html"><i className="ci-sign-out me-2"></i>Sign out</a>
            </div>
            {loading.apiLoading ? (<Spinner />) : (
              <form onSubmit={handleSubmit}>
                <div className="bg-secondary rounded-3 p-4 mb-4">
                  <div className="d-flex align-items-center">
                    <img className="rounded" src={shippingInfo?.profileImage} width="90" alt={shippingInfo?.username} />
                    <div className="ps-3">
                      <button className="btn btn-light btn-shadow btn-sm mb-2" type="button" onClick={() => document.getElementById('profile-image').click()}>
                        <i className="ci-loading me-2"></i>Change avatar
                      </button>
                      <input className="d-none" type="file" name="profileImage" id="profile-image" onChange={(e) => handleChange(e)} />
                      <div className="p mb-0 fs-ms text-muted">Upload JPG, GIF or PNG image. 300 x 300 required.</div>
                    </div>
                  </div>
                </div>
                <div className="row gx-4 gy-3">
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

                  <div className="col-12">
                    <hr className="mt-2 mb-3" />
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <button className="btn btn-primary mt-3 mt-sm-0" type="submit" disabled={loading.loading}>
                        {loading.loading ? <Spinner size="spinner-border-sm" /> : 'Update profile'}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}

          </section>
        </div>
      </div>
    </>
  )
}

export default Profile
