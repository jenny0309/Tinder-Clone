import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-cavin.herokuapp.com/',
})

export default instance
