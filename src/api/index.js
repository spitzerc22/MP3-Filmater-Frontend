import axios from 'axios';

const url = 'http://localhost:4242/genres/:id'

export const fetchPosts = () =>axios.get(url);