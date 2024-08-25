import { axiosInstance } from '../axiosInstance/axiosInstance'
import { endPoints } from '../endPoints/endPoints'

export const fetchAllProducts = async (skip) => {
    try {
        const response = await axiosInstance.get(endPoints.products(skip))
        return response.data
    } catch (error) {
        console.error(error)
    }
}
