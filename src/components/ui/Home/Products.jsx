import React from 'react'

const Products = () => {
    return (
        <>
            <div class="gi-product-tab gi-products padding-tb-40 wow fadeInUp" data-wow-duration="2s">
                <div class="container">
                    <div class="gi-tab-title">
                        <div class="gi-main-title">
                            <div class="section-title">
                                <div class="section-detail">
                                    <h2 class="gi-title">New <span>Arrivals</span></h2>
                                    <p>Shop online for new arrivals and get free shipping!</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Tab Start --> */}
                        <div class="gi-pro-tab">
                            <ul class="gi-pro-tab-nav nav">
                                <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" aria-selected="true" href="#all">All</a></li>
                                <li class="nav-item"><a class="nav-link " data-bs-toggle="tab" href="#clothe">Clothes</a></li>
                                <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#footwear">Footwear</a></li>
                                <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#accessories">accessories</a></li>
                            </ul>
                        </div>
                        {/* <!-- Tab End --> */}
                    </div>
                    {/* <!-- New Product --> */}
                    <div class="row m-b-minus-24px">
                        <div class="col">
                            <div class="tab-content">
                                {/* <!-- 1st Product tab start --> */}
                                <div class="tab-pane fade" id="all">
                                    <div class="row">
                                        <div class="col-md-4 col-sm-6 col-xs-6 gi-col-5 gi-product-box">
                                            <div class="gi-product-content">
                                                <div class="gi-product-inner">
                                                    <div class="gi-pro-image-outer">
                                                        <div class="gi-pro-image">
                                                            <a href="product-left-sidebar.html" class="image">
                                                                <span class="label veg">
                                                                    <span class="dot"></span>
                                                                </span>
                                                                <img class="main-image" src="assets/img/product-images/32_1.jpg"
                                                                    alt="Product" />
                                                                <img class="hover-image"
                                                                    src="assets/img/product-images/32_2.jpg" alt="Product" />
                                                            </a>
                                                            <div class="gi-pro-actions">
                                                                <a class="gi-btn-group wishlist" title="Wishlist"><i
                                                                    class="fi-rr-heart"></i></a>
                                                                <a href="#" class="gi-btn-group quickview"
                                                                    data-link-action="quickview" title="Quick view"
                                                                    data-bs-toggle="modal"
                                                                    data-bs-target="#gi_quickview_modal"><i
                                                                        class="fi-rr-eye"></i></a>
                                                                <a href="javascript:void(0)" class="gi-btn-group compare"
                                                                    title="Compare"><i class="fi fi-rr-arrows-repeat"></i></a>
                                                                <a href="javascript:void(0)" title="Add To Cart"
                                                                    class="gi-btn-group add-to-cart"><i
                                                                        class="fi-rr-shopping-basket"></i></a>
                                                            </div>
                                                            <div class="gi-pro-option">
                                                                <ul class="colors">
                                                                    <li class="color-1">
                                                                        <a href="javascript:void(0)"></a>
                                                                    </li>
                                                                    <li class="color-2">
                                                                        <a href="javascript:void(0)"></a>
                                                                    </li>
                                                                    <li class="color-3">
                                                                        <a href="javascript:void(0)"></a>
                                                                    </li>
                                                                </ul>
                                                                <ul class="sizes">
                                                                    <li>
                                                                        <a href="javascript:void(0)">s</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="javascript:void(0)">m</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="gi-pro-content">
                                                        <a href="shop-left-sidebar-col-3.html">
                                                            <h6 class="gi-pro-stitle">men's wear</h6>
                                                        </a>
                                                        <h5 class="gi-pro-title"><a href="product-left-sidebar.html">Men's
                                                            stylish
                                                            printed shirt</a></h5>
                                                        <div class="gi-pro-rat-price">
                                                            <span class="gi-pro-rating">
                                                                <i class="gicon gi-star fill"></i>
                                                                <i class="gicon gi-star fill"></i>
                                                                <i class="gicon gi-star fill"></i>
                                                                <i class="gicon gi-star fill"></i>
                                                                <i class="gicon gi-star"></i>
                                                            </span>
                                                            <span class="gi-price">
                                                                <span class="new-price">$59.00</span>
                                                                <span class="old-price">$87.00</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- 1st Product tab end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products