import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spinner from './components/layouts/Spinner';
const App = () => {

    const Home              = lazy(() => import('./components/pages/Home'));
    const Productdetails    = lazy(() => import('./components/pages/Productdetails'));
    const Cart              = lazy(() => import('./components/pages/Cart'));
    const Checkoutdetails   = lazy(() => import('./components/pages/Checkoutdetails'));
    const Thankyoufororder   = lazy(() => import('./components/pages/Thankyoufororder'));
    const PageNotFound      = lazy(() => import('./components/pages/PageNotFound'));

    // Admin
    const Dashboard         = lazy(() => import('./components/admin/pages/Dashboard'))
    const Addproduct        = lazy(() => import('./components/admin/pages/Addproducts'));
    const Products          = lazy(() => import('./components/admin/pages/Products'));
    
    return (
        <Router>
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product/:slug/:productID" component={Productdetails} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/checkout-details" component={Checkoutdetails} />
                    <Route exact path="/review-cart" component={Cart} />
                    <Route exact path="/thank-you-for-order" component={Thankyoufororder} />
                    {/* Admin */}
                    <Route exact path="/admin/dashboard" component={Dashboard} />
                    <Route exact path="/admin/products" component={Products} />
                    <Route exact path="/admin/add-product" component={Addproduct} />
                    <Route exact path="/admin/edit-product/:productID" component={Addproduct} />

                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App
