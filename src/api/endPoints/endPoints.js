export const baseURL = 'https://api.chec.io/v1' // base url of api

export const token = 'sk_58063b926cbade6cec3b1c7ea32865e93350747b5ecd2'     // token for all api of header

export const endPoints = {
    //    all categori endpoints
    categories: {
        /**
        * Endpoint to fetch category along with child category
        * @example
        * curl--request GET \
        * --get "https://api.chec.io/v1/categories?depth=2" \
        * --header "X-Authorization: {token}"
        */
        all_categories: `/categories`   // to fetch all categories
    },
    products: {},
    orders: {}
}
