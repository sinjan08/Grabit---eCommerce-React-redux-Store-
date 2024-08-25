import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from '../slice/categorySlicer'

const store = configureStore({
    reducer: {
        categories: categoryReducer,
    },
})

export default store
