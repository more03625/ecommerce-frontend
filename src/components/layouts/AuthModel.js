import React, { useState } from 'react'
import { notify, EMAIL_REGEX, Host, Endpoints, catchError, userTokenName, googleClientID, refreshTokenSetup, defaultCreds } from '../../helpers/comman_helpers';
import axios from 'axios';
import { useHistory } from 'react-router';
import Spinner from './Spinner';
import GoogleLogin from 'react-google-login';
import loginWithGoogleButton from '../../assets/images/logo/login-with-google.png'
import loginWithFacebookButton from '../../assets/images/logo/login-with-facebook.png'
const AuthModel = () => {

    const [signInData, setSignInData] = useState({ email: defaultCreds.email, password: defaultCreds.password });
    const [error, setError] = useState({});
    const [loading, setLoading] = useState({ signIn: false, signUp: false });
    const [signUpData, setSignUpData] = useState(null);
    const [signUpDataError, setSignUpDataError] = useState({});
    const history = useHistory();

    // const responseGoogle = (response) => {
    //     let data = {
    //         username: response.profileObj.name,
    //         email: response.profileObj.email,
    //         profileImage: response.profileObj.imageUrl,
    //         authProvider: 'Google'
    //     }
    //     setSignInData(data);
    //     handleSignInSubmit()
    // }

    const handleChange = (e, type) => {
        if (type === 'signin') {
            setSignInData({ ...signInData, [e.target.name]: e.target.value });
        } else if (type === 'signup') {

        }
    }
    const isValid = () => {
        if (!signInData.email || !EMAIL_REGEX(signInData.email)) {
            setError({ email: "Please enter valid email!" });
            return false;
        } else if (!signInData.password) {
            setError({ password: "Please enter password!" });
            return false;
        } else {
            return true;
        }
    }
    const handleSignInSubmit = async (e = null) => {
        setLoading({ signIn: true });
        e && e.preventDefault();
        setError({});
        try {
            if (isValid()) {
                let url = Host + Endpoints.signIn;
                const result = await axios.post(url, signInData);
                if (result.data.error === true) {
                    notify(result.data.title, 'error');
                } else {
                    localStorage.setItem(userTokenName, JSON.stringify(result.data));
                    notify(result.data.title, 'success');
                    document.getElementsByClassName('btn-close')[0].click()
                }
            }
        } catch (error) {
            notify(catchError, 'error');
        }
        setLoading({ signIn: false });
    }

    const handleSignupChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    }
    const isValidSignup = () => {
        var emailValidator = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(signUpData && signUpData.email);

        if (signUpData === null || signUpData.username === '' || signUpData === undefined) {
            setSignUpDataError({ username: 'Please enter your name!' })
            return false;
        } else if (signUpData.email === '' || signUpData.email === undefined || !emailValidator) {
            setSignUpDataError({ email: 'Please enter a valid email!' })
            return false;
        }
        else if (signUpData.user_password === '' || signUpData.user_password === undefined) {
            setSignUpDataError({ password: 'Password must be greater than 8 characters!' })
            return false;
        }
        else if (signUpData.confirm_password === '' || signUpData.confirm_password === undefined) {
            setSignUpDataError({ confirm_password: 'Please confirm your password!' })
            return false;
        }
        else if (signUpData.user_password !== signUpData.confirm_password) {
            setSignUpDataError({ confirm_password: 'Passwords are not matching!' })
            return false;
        }
        else {
            return true;
        }
    }
    const handleSignUp = async (e) => {
        setLoading({ signUp: true });
        e.preventDefault();
        if (isValidSignup()) {
            setSignUpDataError('');
            const url = Host + Endpoints.signUp;
            try {
                const result = await axios.post(url, signUpData);
                if (result.data.error === true) {
                    notify(result.data.title, 'error')
                } else {
                    setTimeout(function () {
                        document.getElementsByClassName('btn-close')[0].click()
                    }, 2000)
                    notify(result.data.title, 'success')
                }
            } catch (e) {
                const { response } = e;
                notify('Something went wrong!', 'error');
            }
        }
        setLoading({ signUp: false });
    }
    // const onGoogleSuccess = (res) => {
    //     console.log('[Login Success] Current User : ', res.profileObj);
    //     let data = {
    //         username: res.profileObj.name,
    //         email: res.profileObj.email,
    //         profileImage: res.profileObj.imageUrl,
    //         authProvider: 'Google'
    //     }
    //     setSignInData(data);
    //     sendDataToDataBase();
    //     refreshTokenSetup(res)
    // }
    // const onGoogleFailure = (res) => {
    //     console.log('[Login Failed] res : ', res);

    // }
    return (
        <>
            <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary">
                            <ul className="nav nav-tabs card-header-tabs" role="tablist">
                                <li className="nav-item"><a className="nav-link fw-medium active" href="#signin-tab" data-bs-toggle="tab" role="tab" aria-selected="true"><i className="ci-unlocked me-2 mt-n1"></i>Sign in</a></li>
                                <li className="nav-item"><a className="nav-link fw-medium" href="#signup-tab" data-bs-toggle="tab" role="tab" aria-selected="false"><i className="ci-user me-2 mt-n1"></i>Sign up</a></li>
                            </ul>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body tab-content py-4">
                            <form className="tab-pane fade show active" autoComplete="off" noValidate id="signin-tab" onSubmit={handleSignInSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="si-email">Email address</label>
                                    <input className="form-control" type="email" id="si-email" name="email" placeholder="rahulmore@gmail.com" onChange={(e) => handleChange(e, 'signin')} defaultValue={signInData.email} />
                                    <div className="text-danger">{error.email}</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="si-password">Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" name="password" id="si-password" onChange={(e) => handleChange(e, 'signin')} defaultValue={signInData.password} />
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                        </label>
                                        <div className="text-danger">{error.password}</div>
                                    </div>
                                </div>
                                <div className="mb-3 d-flex flex-wrap justify-content-between">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" id="si-remember" />
                                        <label className="form-check-label" htmlFor="si-remember">Remember me</label>
                                    </div>
                                    {/* <a className="fs-sm" href="#">Forgot password?</a> */}
                                </div>
                                {/* <GoogleLogin
                                    clientId={googleClientID}
                                    render={renderProps => (
                                        <div class="d-grid gap-2 d-md-block">
                                            <img className="w-50" src={loginWithGoogleButton} onClick={renderProps.onClick} disabled={renderProps.disabled} style={{ height: '50px', cursor: 'pointer' }} />
                                        </div>
                                    )}
                                    buttonText="Login"
                                    onSuccess={onGoogleSuccess}
                                    onFailure={onGoogleFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                /> */}
                                <button className="btn btn-primary btn-shadow d-block w-100" type="submit" disabled={loading.signIn}>
                                    {loading.signIn === true ? (<Spinner size="spinner-border-sm" />) : ('Sign in')}
                                </button>
                            </form>
                            <form className="tab-pane fade" autoComplete="off" id="signup-tab" onSubmit={handleSignUp}>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-name">Full name</label>
                                    <input className="form-control" type="text" id="su-name" name="username" placeholder="Enter your name" onChange={(e) => handleSignupChange(e)} />
                                    <div className="text-danger">{signUpDataError.username}</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="su-email">Email address</label>
                                    <input className="form-control" type="text" id="su-email" name="email" placeholder="Enter your email" onChange={(e) => handleSignupChange(e)} />
                                    <div className="text-danger">{signUpDataError.email}</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-password">Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="su-password" name="user_password" placeholder="Enter your password" onChange={(e) => handleSignupChange(e)} />
                                        <div className="text-danger fs-sm">{signUpDataError.password}</div>

                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" />
                                            <span className="password-toggle-indicator"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-password-confirm">Confirm password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="su-password-confirm" name="confirm_password" placeholder="Confirm your password" onChange={(e) => handleSignupChange(e)} />
                                        <div className="text-danger">{signUpDataError.confirm_password}</div>

                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-shadow d-block w-100" type="submit" disabled={loading.signUp}>
                                    {loading.signUp === true ? (<Spinner size="spinner-border-sm" />) : ('Sign Up')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthModel
