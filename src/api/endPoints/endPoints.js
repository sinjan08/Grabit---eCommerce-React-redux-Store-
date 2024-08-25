export const baseURL = 'https://dummyjson.com'

export const endPoints = {
    products: (skip) => `/products?limit=10&skip=${skip}&select=title,thumbnail,description,price`,
    getProductDetails: (id) => `/products/${id}`,
    searchProducts: (keyword) => `/products/search?q=${keyword}`
}
