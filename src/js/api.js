import axios from 'axios';
import config from './config';

export function getInfo() {
    
    return axios.get(config.apiEndPoint.getInfo + 'posts/1', {
        headers: {
          'Accept': 'application/json'
        }
    });
}

export function getUsers() {    
    return axios.get(config.apiEndPoint.getUsers);
}