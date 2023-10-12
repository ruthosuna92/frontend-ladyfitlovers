const API_URL_BASE = import.meta.env.VITE_VERCEL_API_URL_BASE;
const endpoint = `${API_URL_BASE}/favorite/`;

const getFavoritesByIdUser = (key) => {
    console.log(key);
}

export default getFavoritesByIdUser
