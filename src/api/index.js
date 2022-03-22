import axios from 'axios'

const API = axios.create({ baseURL: 'https://www.reddit.com' })

export const fetchPosts = () => API.get('/r/worldnews/top.json?count=N&after=t3_XXXXX')