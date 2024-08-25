import React from 'react'
import { useSelector } from 'react-redux'

const Categories = () => {

    const { categories } = useSelector(state => state.categories)

    return (
        <section className="gi-category body-bg padding-tb-40 wow fadeInUp" data-wow-duration="2s" style={{ visibility: "visible", animationDuration: "2s", animationName: "fadeInUp" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 border-content-color">
                        <div className="gi-category-block owl-carousel owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div className="owl-stage" >
                                    {
                                        categories?.map((category, index) => (
                                            <div key={category.id} className="owl-item active" style={{
                                                width: "204px",
                                                padding: "24px",
                                                justifyContent: "center",  // Centers horizontally
                                                alignItems: "center",  // Centers vertically
                                                textAlign: "center",  // Ensures text is centered within the div
                                            }}>
                                                <div className={`gi-cat-box gi-cat-box-${index + 1}`} >
                                                    <div className="gi-cat-icon">
                                                        <img src={category.assets[0].url} alt={`${category.name} category image`} />
                                                        <div className="gi-cat-detail">
                                                            <a href={`products?category=${category.slug}`}>
                                                                <h4 className="gi-cat-title">{category.name}</h4>
                                                            </a>
                                                            <p className="items">{category.products} Items</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Categories