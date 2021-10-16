import React, {useState} from 'react'
import { notify, EMAIL_REGEX, Host, Endpoints, catchError, userTokenName } from '../../helpers/comman_helpers';
import axios from 'axios';
import { useHistory } from 'react-router';
import Spinner from './Spinner';

const AuthModel = () => {

    const [signInData, setSignInData] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const history = useHistory();
        const handleChange = (e, type) => {
            if(type === 'signin'){
                setSignInData({...signInData, [e.target.name] : e.target.value});
            }else if(type === 'signup'){

            }
        }
        const isValid = () => {
            if(signInData.email == undefined || signInData.email === '' || !signInData.email.match(EMAIL_REGEX)){
                setError({email:"Please enter valid email!"});
                return false;
            }else if(signInData.password == undefined || signInData.password === ''){
                setError({password:"Please enter password!"});
                return false;
            }else{
                return true;
            }
        }
        const handleSignInSubmit = async (e) => {
            setLoading(true);
            e.preventDefault();
            setError({});
            try{
                if(isValid()){
                    var url = Host + Endpoints.signIn;
                    const result = await axios.post(url, signInData);
                    if(result.data.error === true){
                        notify(result.data.title, 'error');
                    }else{
                        localStorage.setItem(userTokenName, JSON.stringify(result.data));
                        notify(result.data.title, 'success');
                    }
                }
            }catch(error){
                notify(catchError, 'error');
            }
            setLoading(false);
        }

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
                                    <input className="form-control" type="email" id="si-email" name="email" placeholder="rahulmore@gmail.com" onChange={(e) => handleChange(e, 'signin')} />
                                    <div className="text-danger">{error.email}</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="si-password">Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" name="password" id="si-password" onChange={(e) => handleChange(e, 'signin')} />
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
                                <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Sign in {loading ? (<Spinner size="spinner-border-sm"/>) : ('')} </button>
                            </form>
                            <form className="needs-validation tab-pane fade" autoComplete="off" noValidate id="signup-tab">
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-name">Full name</label>
                                    <input className="form-control" type="text" id="su-name" placeholder="John Doe" required />
                                    <div className="invalid-feedback">Please fill in your name.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="su-email">Email address</label>
                                    <input className="form-control" type="email" id="su-email" placeholder="johndoe@example.com" required />
                                    <div className="invalid-feedback">Please provide a valid email address.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-password">Password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="su-password" required />
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="su-password-confirm">Confirm password</label>
                                    <div className="password-toggle">
                                        <input className="form-control" type="password" id="su-password-confirm" required />
                                        <label className="password-toggle-btn" aria-label="Show/hide password">
                                            <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                                        </label>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-shadow d-block w-100" type="submit">Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthModel
