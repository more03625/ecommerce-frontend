import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spinner from './components/layouts/Spinner';
const App = () => {

    const Home              = lazy(() => import('./components/pages/Home'));
    const Product           = lazy(() => import('./components/pages/Product'));
    const Productdetails    = lazy(() => import('./components/pages/Productdetails'));
    const PageNotFound      = lazy(() => import('./components/pages/PageNotFound'));
    
    return (
        <Router>
            <Suspense fallback={<Spinner/>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/product/:slug/:productID" component={Productdetails} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App
