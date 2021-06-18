import axios from 'axios'

const axiosInstance = axios.create(
    {
        baseURL: 'http://localhost:4000',
        withCredentials: true // this option will store received cookies from API & send cookies to API
    }
)

export default axiosInstance