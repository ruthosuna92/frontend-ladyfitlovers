import axios from "axios";
const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;

const checkout = (cart, cost) => {
    
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${API_URL_BASE}/payment/createOrder`, { products: cart, shippingCost: cost })
            window.location.href = data.response.init_point;
        } catch (error) {
            console.log(error);
        }
    }
}

export default checkout