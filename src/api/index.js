import axios from 'axios'

const API = axios.create({ baseURL: 'https://www.reddit.com' })

export const fetchPosts = () => API.get('/r/pics.json?limit=100&count=N&after=t3_XXXXX')