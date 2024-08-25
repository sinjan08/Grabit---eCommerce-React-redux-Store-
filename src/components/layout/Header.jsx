import React, { useEffect, useState } from 'react';
import { fetch_categories } from '../../api/functions/categoryHandler';
import CategoryTabs from '../ui/Header/CategoryTabs';

const Header = () => {

    const [categories, setCategories] = useState([])

    /**
     * To fetch categories from api
     * @param {}
     * @returns {}
     */
    const getCategories = async () => {
        // calling fetch_categories function to get data from api
        const { error, data } = await fetch_categories()
        // checking error. If error is false then saving data into state
        if (error === false) {
            setCategories(data)       // category data is saving into state 
        }
    }

    useEffect(() => { getCategories() }, [categories])      // fetching data if catgories changes

    return (
        <header className="gi-header">
            {/* <!-- Header Top Start --> */}
            <div className="header-top">
                <div className="container">
                    <div className="row align-itegi-center">
                        {/* <!-- Header Top social Start --> */}
                        <div className="col text-left header-top-left d-lg-block">
                            <div className="header-top-social">
                                <ul className="mb-0">
                                    <li className="list-inline-item">
                                        <a ><i className="fi fi-rr-phone-call"></i></a>+91 987 654 3210
                                    </li>
                                    <li className="list-inline-item">
                                        <a ><i className="fi fi-brands-whatsapp"></i></a>+91 987 654
                                        3210
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Header Top social End --> */}
                        {/* <!-- Header Top Message Start --> */}
                        <div className="col text-center header-top-center">
                            <div className="header-top-message">
                                World's Fastest Online Shopping Destination
                            </div>
                        </div>
                        {/* <!-- Header Top Message End --> */}
                        {/* <!-- Header Top Language Currency --> */}
                        <div className="col header-top-right d-none d-lg-block">
                            <div className="header-top-right-inner d-flex justify-content-end">
                                <a className="gi-help" href="faq.html">Help?</a>
                                <a className="gi-help" href="track-order.html">Track Order?</a>
                                {/* <!-- Language Start --> */}
                                <div className="header-top-lan-curr header-top-lan dropdown">
                                    <button className="dropdown-toggle" data-bs-toggle="dropdown">English
                                        <i className="fi-rr-angle-small-down" aria-hidden="true"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li className="active"><a className="dropdown-item" href="#">English</a></li>
                                        <li><a className="dropdown-item" href="#">Italiano</a></li>
                                    </ul>
                                </div>
                                {/* <!-- Language End --> */}
                                {/* <!-- Currency Start --> */}
                                <div className="header-top-lan-curr header-top-curr dropdown">
                                    <button className="dropdown-toggle" data-bs-toggle="dropdown">Dollar
                                        <i className="fi-rr-angle-small-down" aria-hidden="true"></i>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li className="active"><a className="dropdown-item" href="#">USD $</a></li>
                                        <li><a className="dropdown-item" href="#">EUR €</a></li>
                                    </ul>
                                </div>
                                {/* <!-- Currency End --> */}
                            </div>
                        </div>
                        {/* <!-- Header Top Language Currency --> */}
                    </div>
                </div>
            </div>
            {/* <!-- Header Top  End --> */}

            {/* <!-- Header Bottom  Start --> */}
            <div className="gi-header-bottom d-lg-block">
                <div className="container position-relative">
                    <div className="row">
                        <div className="gi-flex">
                            {/* <!-- Header Logo Start --> */}
                            <div className="align-self-center gi-header-logo">
                                <div className="header-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="Site Logo" /></a>
                                </div>
                            </div>
                            {/* <!-- Header Logo End --> */}
                            {/* <!-- Main Menu Start --> */}
                            <div id="gi-main-menu-desk" className="d-none d-lg-block sticky-nav">
                                <div className="nav-desk">
                                    <div className="row">
                                        <div className="col-md-12 align-self-center">
                                            <div className="gi-main-menu">
                                                <ul>
                                                    <li className="dropdown drop-list">
                                                        <a className="dropdown-arrow">Home<i
                                                            className="fi-rr-angle-small-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="index.html">Grocery</a></li>
                                                            <li><a href="demo-2.html">Fashion</a></li>
                                                            <li><a href="demo-3.html">Fashion 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown drop-list position-static">
                                                        <a className="dropdown-arrow">Categories<i
                                                            className="fi-rr-angle-small-right"></i></a>
                                                        <ul className="mega-menu d-block">
                                                            <li className="d-flex">
                                                                <span className="bg"></span>
                                                                {
                                                                    categories?.map(category => (
                                                                        <ul className="d-block mega-block" key={category.id}>
                                                                            <li className="menu_title">
                                                                                <a href="">{category.name}</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href={`products?category=${category.slug}`}>{category.name}</a>
                                                                            </li>
                                                                            {
                                                                                category.children && category.children.map(cat_child => (
                                                                                    <li key={cat_child.id}>
                                                                                        <a href={`products?category=${cat_child.slug}`}>
                                                                                            {cat_child.name}
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    ))
                                                                }
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown drop-list">
                                                        <a className="dropdown-arrow">Products<i
                                                            className="fi-rr-angle-small-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li className="dropdown position-static"><a
                                                            >Product page
                                                                <i className="fi-rr-angle-small-right"></i></a>
                                                                <ul className="sub-menu sub-menu-child">
                                                                    <li><a href="product-left-sidebar.html">Product left
                                                                        sidebar</a></li>
                                                                    <li><a href="product-right-sidebar.html">Product right
                                                                        sidebar</a></li>
                                                                </ul>
                                                            </li>
                                                            <li className="dropdown position-static"><a
                                                            >Product Accordion
                                                                <i className="fi-rr-angle-small-right"></i></a>
                                                                <ul className="sub-menu sub-menu-child">
                                                                    <li><a href="product-accordion-left-sidebar.html">left
                                                                        sidebar</a></li>
                                                                    <li><a href="product-accordion-right-sidebar.html">right
                                                                        sidebar</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="product-full-width.html">Product full width</a>
                                                            </li>
                                                            <li><a href="product-accordion-full-width.html">accordion full
                                                                width</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown drop-list">
                                                        <a className="dropdown-arrow">Blog<i
                                                            className="fi-rr-angle-small-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="blog-left-sidebar.html">left sidebar</a></li>
                                                            <li><a href="blog-right-sidebar.html">right sidebar</a></li>
                                                            <li><a href="blog-full-width.html">Full Width</a></li>
                                                            <li><a href="blog-detail-left-sidebar.html">Detail left
                                                                sidebar</a>
                                                            </li>
                                                            <li><a href="blog-detail-right-sidebar.html">Detail right
                                                                sidebar</a></li>
                                                            <li><a href="blog-detail-full-width.html">Detail Full Width</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown drop-list">
                                                        <a className="dropdown-arrow">Pages<i
                                                            className="fi-rr-angle-small-right"></i></a>
                                                        <ul className="sub-menu">
                                                            <li><a href="about-us.html">About Us</a></li>
                                                            <li><a href="contact-us.html">Contact Us</a></li>
                                                            <li><a href="cart.html">Cart</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                            <li><a href="compare.html">Compare</a></li>
                                                            <li><a href="faq.html">FAQ</a></li>
                                                            <li><a href="login.html">Login</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="non-drop"><a href="shop-banner-left-sidebar-col-3.html">
                                                        <i className="fi-rr-badge-percent"></i>Offers</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Main Menu End --> */}

                            {/* <!-- Header Button Start --> */}
                            <div className="gi-header-action align-self-center">
                                <div className="gi-header-buttons">
                                    {/* <!-- Header User Start --> */}
                                    <div className="gi-acc-drop">
                                        <a
                                            className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle"
                                            title="Account">
                                            <div className="header-icon">
                                                <i className="fi-rr-user"></i>
                                            </div>
                                            <div className="gi-btn-desc">
                                                <span className="gi-btn-title">Account</span>
                                                <span className="gi-btn-stitle">Login</span>
                                            </div>
                                        </a>
                                        <ul className="gi-dropdown-menu">
                                            <li><a className="dropdown-item" href="register.html">Register</a></li>
                                            <li><a className="dropdown-item" href="checkout.html">Checkout</a></li>
                                            <li><a className="dropdown-item" href="login.html">Login</a></li>
                                            <li><a className="dropdown-item" href="forgot-password.html">Forgot</a></li>
                                            <li><a className="dropdown-item" href="reset-password.html">Reset</a></li>
                                        </ul>
                                    </div>
                                    {/* <!-- Header User End --> */}
                                    {/* <!-- Header wishlist Start --> */}
                                    <a href="wishlist.html" className="gi-header-btn gi-wish-toggle" title="Wishlist">
                                        <div className="header-icon">
                                            <i className="fi-rr-heart"></i>
                                        </div>
                                        <div className="gi-btn-desc">
                                            <span className="gi-btn-title">Wishlist</span>
                                            <span className="gi-btn-stitle"><b className="gi-wishlist-count">3</b>-items</span>
                                        </div>
                                    </a>
                                    {/* <!-- Header wishlist End --> */}
                                    {/* <!-- Header Cart Start --> */}
                                    <a className="gi-header-btn gi-cart-toggle" title="Cart">
                                        <div className="header-icon">
                                            <i className="fi-rr-shopping-bag"></i>
                                            <span className="main-label-note-new"></span>
                                        </div>
                                        <div className="gi-btn-desc">
                                            <span className="gi-btn-title">Cart</span>
                                            <span className="gi-btn-stitle"><b className="gi-cart-count">3</b>-items</span>
                                        </div>
                                    </a>
                                    {/* <!-- Header Cart End --> */}
                                </div>
                            </div>

                            {/* <!-- Header Top responsive Action --> */}
                            <div className="col header-top-res d-lg-none">
                                <div className="gi-header-buttons">
                                    <div className="right-icons">
                                        {/* <!-- Header User Start --> */}
                                        <a href="login.html" className="gi-header-btn gi-header-user">
                                            <div className="header-icon"><i className="fi-rr-user"></i></div>
                                        </a>
                                        {/* <!-- Header User End --> */}
                                        {/* <!-- Header Wishlist Start --> */}
                                        <a href="wishlist.html" className="gi-header-btn gi-wish-toggle">
                                            <div className="header-icon"><i className="fi-rr-heart"></i></div>
                                            <span className="gi-header-count gi-wishlist-count">3</span>
                                        </a>
                                        {/* <!-- Header Wishlist End --> */}
                                        {/* <!-- Header Cart Start --> */}
                                        <a className="gi-header-btn gi-cart-toggle">
                                            <div className="header-icon"><i className="fi-rr-shopping-bag"></i>
                                                <span className="main-label-note-new"></span>
                                            </div>
                                            <span className="gi-header-count gi-cart-count">3</span>
                                        </a>
                                        {/* <!-- Header Cart End --> */}
                                        {/* <!-- Header menu Start --> */}
                                        <a className="gi-header-btn gi-site-menu-icon d-lg-none">
                                            <i className="fi-rr-menu-burger"></i>
                                        </a>
                                        {/* <!-- Header menu End --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Header Top responsive Action --> */}

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header Button End --> */}

            {/* <!-- Header menu --> */}
            <div className="gi-header-cat d-none d-lg-block">
                <div className="container position-relative">
                    <div className="gi-nav-bar">
                        {/* <!-- Category Toggle --> */}
                        <div className="gi-category-icon-block">
                            <div className="gi-category-menu">
                                <div className="gi-category-toggle">
                                    <i className="fi fi-rr-apps"></i>
                                    <span className="text">All Categories</span>
                                    <i className="fi-rr-angle-small-down d-1199 gi-angle" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="gi-cat-dropdown">
                                <div className="gi-cat-block">
                                    <div className="gi-cat-tab">
                                        <CategoryTabs categories={categories} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Header Search Start --> */}
                        <div className="align-self-center gi-header-search">
                            <div className="header-search">
                                <form className="gi-search-group-form" action="#">
                                    <input className="form-control gi-search-bar" placeholder="Search Products..." type="text" />
                                    <button className="search_submit" type="submit"><i className="fi-rr-search"></i></button>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Header Search End --> */}

                        <div className="gi-location-block">
                            <div className="gi-location-menu">
                                <div className="gi-location-toggle">
                                    <i className="fi fi-rr-marker location"></i>
                                    <span className="gi-location-title d-1199 gi-location">New York</span>
                                    <i className="fi-rr-angle-small-down d-1199 gi-angle" aria-hidden="true"></i>
                                </div>
                                <div className="gi-location-content">
                                    <div className="gi-location-dropdown">
                                        <div className="row gi-location-wrapper">
                                            <ul className="loc-grid">
                                                <li className="loc-list current">
                                                    <i className="fi fi-rr-map-marker-plus"></i>
                                                    <span className="gi-detail-current">current Location</span>
                                                </li>
                                                <li className="loc-list">
                                                    <i className="fi fi-rr-map-marker-plus"></i>
                                                    <span className="gi-detail">Los Angeles</span>
                                                </li>
                                                <li className="loc-list">
                                                    <i className="fi fi-rr-map-marker-plus"></i>
                                                    <span className="gi-detail">Chicago</span>
                                                </li>
                                                <li className="loc-list">
                                                    <i className="fi fi-rr-map-marker-plus"></i>
                                                    <span className="gi-detail">Houston</span>
                                                </li>
                                                <li className="loc-list">
                                                    <i className="fi fi-rr-map-marker-plus"></i>
                                                    <span className="gi-detail">Phoenix</span>
                                                </li>
                                                <li className="loc-list">
                                                    <i className="fi fi-rr-map-marker-plus"></i>
                                                    <span className="gi-detail">San Diego</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header menu End --> */}

            {/* <!-- Mobile Menu sidebar Start --> */}
            <div className="gi-mobile-menu-overlay"></div>
            <div id="gi-mobile-menu" className="gi-mobile-menu">
                <div className="gi-menu-title">
                    <span className="menu_title">My Menu</span>
                    <button className="gi-close-menu">x</button>
                </div>
                <div className="gi-menu-inner">
                    <div className="gi-menu-content">
                        <ul>
                            <li className="dropdown drop-list">
                                <a className="dropdown-arrow">Home</a>
                                <ul className="sub-menu">
                                    <li><a href="index.html">Grocery</a></li>
                                    <li><a href="demo-2.html">Fashion</a></li>
                                    <li><a href="demo-3.html">Fashion 2</a></li>
                                </ul>
                            </li>
                            <li><a >Categories</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a >classNameic Variation</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-left-sidebar-col-3.html">Left sidebar 3 column</a></li>
                                            <li><a href="shop-left-sidebar-col-4.html">Left sidebar 4 column</a></li>
                                            <li><a href="shop-right-sidebar-col-3.html">Right sidebar 3 column</a></li>
                                            <li><a href="shop-right-sidebar-col-4.html">Right sidebar 4 column</a></li>
                                            <li><a href="shop-full-width.html">Full width 4 column</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a >classNameic Variation</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-banner-left-sidebar-col-3.html">Banner left sidebar 3
                                                column</a></li>
                                            <li><a href="shop-banner-left-sidebar-col-4.html">Banner left sidebar 4
                                                column</a></li>
                                            <li><a href="shop-banner-right-sidebar-col-3.html">Banner right sidebar 3
                                                column</a></li>
                                            <li><a href="shop-banner-right-sidebar-col-4.html">Banner right sidebar 4
                                                column</a></li>
                                            <li><a href="shop-banner-full-width.html">Banner Full width 4 column</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a >Columns Variation</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-full-width-col-3.html">3 Columns full width</a></li>
                                            <li><a href="shop-full-width-col-4.html">4 Columns full width</a></li>
                                            <li><a href="shop-full-width-col-5.html">5 Columns full width</a></li>
                                            <li><a href="shop-full-width-col-6.html">6 Columns full width</a></li>
                                            <li><a href="shop-banner-full-width-col-3.html">Banner 3 Columns</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a >List Variation</a>
                                        <ul className="sub-menu">
                                            <li><a href="shop-list-left-sidebar.html">Shop left sidebar</a></li>
                                            <li><a href="shop-list-right-sidebar.html">Shop right sidebar</a></li>
                                            <li><a href="shop-list-banner-left-sidebar.html">Banner left sidebar</a></li>
                                            <li><a href="shop-list-banner-right-sidebar.html">Banner right sidebar</a></li>
                                            <li><a href="shop-list-full-col-2.html">Full width 2 columns</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a >Products</a>
                                <ul className="sub-menu">
                                    <li>
                                        <a >Product page</a>
                                        <ul className="sub-menu">
                                            <li><a href="product-left-sidebar.html">Product left sidebar</a></li>
                                            <li><a href="product-right-sidebar.html">Product right sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a >Product accordion</a>
                                        <ul className="sub-menu">
                                            <li><a href="product-accordion-left-sidebar.html">left sidebar</a></li>
                                            <li><a href="product-accordion-right-sidebar.html">right sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="product-full-width.html">product full width</a></li>
                                    <li><a href="product-accordion-full-width.html">accordion full width</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a >Blog</a>
                                <ul className="sub-menu">
                                    <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                    <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                                    <li><a href="blog-detail-left-sidebar.html">Blog detail left sidebar</a></li>
                                    <li><a href="blog-detail-right-sidebar.html">Blog detail right sidebar</a></li>
                                    <li><a href="blog-full-width.html">Blog full width</a></li>
                                    <li><a href="blog-detail-full-width.html">Blog detail full width</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a >Pages</a>
                                <ul className="sub-menu">
                                    <li><a href="about-us.html">About Us</a></li>
                                    <li><a href="contact-us.html">Contact Us</a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="compare.html">Compare</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="login.html">Login</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="header-res-lan-curr">
                        {/* <!-- Social Start --> */}
                        <div className="header-res-social">
                            <div className="header-top-social">
                                <ul className="mb-0">
                                    <li className="list-inline-item"><a href="#"><i className="gicon gi-facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="gicon gi-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="gicon gi-instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="#"><i className="gicon gi-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Social End --> */}
                    </div>
                </div>
            </div>
            {/* <!-- Mobile Menu sidebar End --> */}
        </header>
    )
}

export default Header