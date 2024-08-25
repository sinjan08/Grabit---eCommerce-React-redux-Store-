import { axiosInstance } from '../axiosInstance/axiosInstance';
import { endPoints } from '../endPoints/endPoints';

/**
 * Fetches all categories along with child categories
 * @returns {Promise<{ error: boolean, data: any[] }>}
 */
export const fetch_categories = async () => {
    try {
        // GET request to fetch all categories
        const response = await axiosInstance.get(endPoints.categories.all_categories);

        // Check if the response status is 200 (OK)
        if (response.status === 200 && response.data) {
            const res = {
                error: false,
                data: response.data.data
            }
            return res;
        } else {
            console.warn(`Unexpected response status: ${response.status}`);
            return { error: true, data: [] };
        }
    } catch (error) {
        console.error('Error fetching categories:', error);
        return { error: true, data: [] };
    }
};
