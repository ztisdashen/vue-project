import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: "http://106.54.54.237:8000/api/hy",
        // baseURL: "http://123.207.32.32:8000/api/hy",
        // timeout: 5000
    });
    axios.interceptors.request.use(res => res, error => {
        console.log(error);
    });
    axios.interceptors.response.use(response => {
        return response.data
    }, error => {
        console.log(error);
    });
    return instance(config)
}