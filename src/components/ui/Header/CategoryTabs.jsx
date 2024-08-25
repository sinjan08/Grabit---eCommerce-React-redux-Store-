import React from 'react';
import { useSelector } from 'react-redux';

const CategoryTabs = () => {
    const { categories } = useSelector(state => state.categories)
    return (
        <>
            <div className="gi-tab-list nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {categories?.map((category, index) => (
                    <button
                        key={category.id}
                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                        id={`v-${category.slug}-tab`}
                        data-bs-toggle="pill"
                        data-bs-target={`#v-${category.slug}`}
                        type="button"
                        role="tab"
                        aria-controls={`v-${category.slug}`}
                        aria-selected={index === 0 ? 'true' : 'false'}
                    >
                        <img src="assets/img/category/c-1.png" alt={category.name} />
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="tab-content" id="v-pills-tabContent">
                {categories?.map((category, index) => (
                    <div
                        key={category.id}
                        className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                        id={`v-${category.slug}`}
                        role="tabpanel"
                        aria-labelledby={`v-${category.slug}-tab`}
                    >
                        <div className="tab-list row">
                            {[0, 1, 2].map((colIndex) => (
                                <div className="col" key={colIndex}>
                                    <ul className="cat-list">
                                        {category.children?.slice(colIndex * 4, (colIndex + 1) * 4).map((cat_child) => (
                                            <li key={cat_child.id}>
                                                <a href={`products?category=${cat_child.slug}`}>{cat_child.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CategoryTabs;
