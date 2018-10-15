import axios from 'axios';

// Put all your end point and 'API related things' here so that it won't be scattered. 
// Split it into files in this folder if it's too big.

export const DISCUSSION_THIS_WEEK_END_POINT = '/todos/1'; // dummy end point

var api = axios.create({baseURL: 'https://jsonplaceholder.typicode.com', timeout: 1000}); // this is free dummy online API
export default api;