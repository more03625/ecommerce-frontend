import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const App = () => {
    const Home             = lazy(() => import('./components/pages/Home'));
    const Product          = lazy(() => import('./components/pages/Product'));
    const Productdetails   = lazy(() => import('./components/pages/Productdetails'));
    
    return (
        <Router>
            <Suspense fallback="Loading...">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/product/:slug/:productID" component={Productdetails} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default App
