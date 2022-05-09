import axios from 'axios'

const guestInstance = axios.create({
    baseURL: 'https://server-part-suka.herokuapp.com/api/',
    withCredentials: true
})

const authInstance = axios.create({
    baseURL: 'https://server-part-suka.herokuapp.com/api/',
    withCredentials: true
})

// добавляем в запрос данные для авторизации с помощью перехватчика (interceptor)
const authInterceptor = (config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.authorization = 'Bearer ' + localStorage.getItem('token')
    }
    return config
}
authInstance.interceptors.request.use(authInterceptor)

export {
    guestInstance,
    authInstance
}