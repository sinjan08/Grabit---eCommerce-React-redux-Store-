import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const { categories } = useSelector(state => state.categories)
    return (
        <>
            <footer className="gi-footer m-t-40">
                <div className="footer-container">
                    <div className="footer-top padding-tb-80">
                        <div className="container">
                            <div className="row m-minus-991">
                                <div className="col-sm-12 col-lg-3 gi-footer-cat wow fadeInUp">
                                    <div className="gi-footer-widget gi-footer-company">
                                        <img src="assets/img/logo/logo.png" className="gi-footer-logo" alt="footer logo" />
                                        <p className="gi-footer-detail">Grabit is the biggest market of grocery products. Get your
                                            daily needs from our store.</p>
                                        <div className="gi-app-store">
                                            <a href="#" className="app-img"><img src="assets/img/app/android.png" className="adroid"
                                                alt="android" /></a>
                                            <a href="#" className="app-img"><img src="assets/img/app/apple.png" className="apple"
                                                alt="apple" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-2 gi-footer-info wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="gi-footer-widget">
                                        <h4 className="gi-footer-heading">Category</h4>
                                        <div className="gi-footer-links gi-footer-dropdown">
                                            <div className="row">
                                                {categories?.reduce((resultArray, category, index) => {
                                                    const columnIndex = Math.floor(index / 6);

                                                    if (!resultArray[columnIndex]) {
                                                        resultArray[columnIndex] = []; // start a new column
                                                    }

                                                    resultArray[columnIndex].push(
                                                        <li key={category.id} className="gi-footer-link">
                                                            <a href={`products?category=${category.slug}`}>
                                                                {category.name}
                                                            </a>
                                                        </li>
                                                    );

                                                    return resultArray;
                                                }, []).map((column, columnIndex) => (
                                                    <div className="col-6" key={columnIndex}>
                                                        <ul className="align-items-center">
                                                            {column}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-2 gi-footer-account wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="gi-footer-widget">
                                        <h4 className="gi-footer-heading">Company</h4>
                                        <div className="gi-footer-links gi-footer-dropdown">
                                            <ul className="align-items-center">
                                                <li className="gi-footer-link"><a href="about-us.html">About us</a></li>
                                                <li className="gi-footer-link"><a href="track-order.html">Delivery</a></li>
                                                <li className="gi-footer-link"><a href="privacy-policy.html">Legal Notice</a></li>
                                                <li className="gi-footer-link"><a href="terms-condition.html">Terms & conditions</a>
                                                </li>
                                                <li className="gi-footer-link"><a href="checkout.html">Secure payment</a></li>
                                                <li className="gi-footer-link"><a href="contact-us.html">Contact us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-2 gi-footer-service wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="gi-footer-widget">
                                        <h4 className="gi-footer-heading">Account</h4>
                                        <div className="gi-footer-links gi-footer-dropdown">
                                            <ul className="align-items-center">
                                                <li className="gi-footer-link"><a href="register.html">Sign In</a></li>
                                                <li className="gi-footer-link"><a href="cart.html">View Cart</a></li>
                                                <li className="gi-footer-link"><a href="privacy-policy.html">Return Policy</a></li>
                                                <li className="gi-footer-link"><a href="#">Become a Vendor</a></li>
                                                <li className="gi-footer-link"><a href="#">Affiliate Program</a></li>
                                                <li className="gi-footer-link"><a href="checkout.html">Payments</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-3 gi-footer-cont-social wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="gi-footer-contact">
                                        <div className="gi-footer-widget">
                                            <h4 className="gi-footer-heading">Contact</h4>
                                            <div className="gi-footer-links gi-footer-dropdown">
                                                <ul className="align-items-center">
                                                    <li className="gi-footer-link gi-foo-location">
                                                        <span>
                                                            <i className="fi fi-rr-marker location svg_img foo_svg"></i>
                                                        </span>
                                                        <p>2548 Broaddus Maple Court, Madisonville KY 4783, USA.</p>
                                                    </li>
                                                    <li className="gi-footer-link gi-foo-call">
                                                        <span>
                                                            <i className="fi fi-brands-whatsapp svg_img foo_svg"></i>
                                                        </span>
                                                        <a href="tel:+009876543210">+00 9876543210</a>
                                                    </li>
                                                    <li className="gi-footer-link gi-foo-mail">
                                                        <span>
                                                            <i className="fi fi-rr-envelope"></i>
                                                        </span>
                                                        <a href="mailto:example@email.com">example@email.com</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gi-footer-social">
                                        <div className="gi-footer-widget">
                                            <div className="gi-footer-links gi-footer-dropdown">
                                                <ul className="align-items-center">
                                                    <li className="gi-footer-link"><a href="#"><i className="gicon gi-facebook"
                                                        aria-hidden="true"></i></a></li>
                                                    <li className="gi-footer-link"><a href="#"><i className="gicon gi-twitter"
                                                        aria-hidden="true"></i></a></li>
                                                    <li className="gi-footer-link"><a href="#"><i className="gicon gi-linkedin"
                                                        aria-hidden="true"></i></a></li>
                                                    <li className="gi-footer-link"><a href="#"><i className="gicon gi-instagram"
                                                        aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="gi-bottom-info">
                                    <div className="footer-copy">
                                        <div className="footer-bottom-copy">
                                            <div className="gi-copy">Copyright © <a className="site-name" href="index.html">Grabit</a>
                                                all rights reserved. Powered by Grabit.</div>
                                        </div>
                                    </div>
                                    <div className="footer-bottom-right">
                                        <div className="footer-bottom-payment d-flex justify-content-center">
                                            <div className="payment-link">
                                                <img src="assets/img/hero-bg/payment.png" alt="payment" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="modal fade quickview-modal" id="gi_quickview_modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <button type="button" className="btn-close qty_close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-5 col-sm-12 col-xs-12 mb-767">
                                    <div className="single-pro-img single-pro-img-no-sidebar">
                                        <div className="single-product-scroll">
                                            <div className="single-slide zoom-image-hover">
                                                <img className="img-responsive" src="assets/img/product-images/32_1.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 col-xs-12">
                                    <div className="quick-view-pro-content">
                                        <h4 className="product-title"><a href="#">Quality Freshness assurance</a></h4>
                                        <div className="price">
                                            <span className="price-now">₹220.00</span>
                                            <span className="price-old">₹240.00</span>
                                        </div>
                                        <div className="quick-availability">
                                            <span className="availability">Availability:</span>
                                            <span className="in-stock">In Stock</span>
                                        </div>
                                        <div className="quick-product-des">
                                            <p>In auctor ex id urna faucibus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque.</p>
                                        </div>
                                        <div className="product-quantity">
                                            <div className="quantity d-inline-block">
                                                <button type="button" className="minus-btn"><img src="assets/img/icon-img/minus.svg"
                                                    className="svg_img pro_svg" alt="" /></button>
                                                <input type="text" name="name" />
                                                <button type="button" className="plus-btn"><img src="assets/img/icon-img/plus.svg"
                                                    className="svg_img pro_svg" alt="" /></button>
                                            </div>
                                            <div className="pro-actions d-inline-block">
                                                <a href="#" className="gi-cart"><img src="assets/img/icon-img/cart.svg" className="svg_img pro_svg"
                                                    alt="" /> Add To Cart</a>
                                            </div>
                                        </div>
                                        <div className="gi-pro-wishlist">
                                            <ul className="align-items-center">
                                                <li className="gi-pro-wlist"><a href="wishlist.html"><i className="fi fi-rr-heart"></i> Add to
                                                    Wishlist</a></li>
                                                <li className="gi-pro-wlist"><a href="compare.html"><i className="fi fi-rr-shuffle"></i> Compare</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="gi-share-pro">
                                            <ul className="align-items-center">
                                                <li className="gi-pro-share"><span>Share :</span></li>
                                                <li className="gi-pro-share"><a href="#"><i className="gicon gi-facebook"
                                                    aria-hidden="true"></i></a></li>
                                                <li className="gi-pro-share"><a href="#"><i className="gicon gi-twitter"
                                                    aria-hidden="true"></i></a></li>
                                                <li className="gi-pro-share"><a href="#"><i className="gicon gi-linkedin"
                                                    aria-hidden="true"></i></a></li>
                                                <li className="gi-pro-share"><a href="#"><i className="gicon gi-instagram"
                                                    aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="gi-pro-tags">
                                            <ul className="align-items-center">
                                                <li className="gi-pro-tag"><span>Tags :</span></li>
                                                <li className="gi-pro-tag"><a href="#">Grocery</a></li>
                                                <li className="gi-pro-tag"><a href="#">Vegetables</a></li>
                                                <li className="gi-pro-tag"><a href="#">Fruits</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
