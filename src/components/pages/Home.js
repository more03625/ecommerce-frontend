import React from 'react'
import Header from '../layouts/Header';
import Brands from '../sections/home/Brands';
import Blog from '../sections/home/Blog';
import Footer from '../layouts/Footer';
import Banner from '../sections/home/BannerAd';
import Product from '../sections/home/Product';
import Holiday from '../sections/home/Holiday';

const Home = () => {
    return (
        <>
            <Header />
            <Product />
            <Banner />
            <Holiday />
            <Brands />
            <Blog />
            <Footer />
        </>
    )
}

export default Home
