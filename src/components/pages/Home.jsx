import React from 'react'
import Categories from '../ui/Home/Categories'
import HomeBanner from '../ui/Home/HomeBanner'
import Products from '../ui/Home/Products'

const Home = () => {
    return (
        <>
            <HomeBanner />
            <Categories />
            <div className="gi-banner padding-tb-40 wow fadeInUp" data-wow-duration="2s">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gi-animated-banner banner-3" data-aos="fade-up" data-aos-duration="2000"
                                data-aos-delay="200">
                                <h2 className="d-none">Offers</h2>
                                <div className="gi-bnr-detail">
                                    <div className="gi-bnr-info">
                                        <h3>30% off sale</h3>
                                        <h2>Latest Exclusive <br />Summer Collection</h2>
                                        <a href="shop-left-sidebar-col-3.html" className="gi-btn-2">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Products />
        </>
    )
}

export default Home