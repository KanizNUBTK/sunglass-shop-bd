import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';
import ShopGallery from '../ShopGallery/ShopGallery';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <ShopGallery></ShopGallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;