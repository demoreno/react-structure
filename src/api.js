import axios from 'axios';
import config from './config';

export function getInfo() {
    
    return axios.get(config.API.getInfo + 'posts/1', {
        headers: {
          'Accept': 'application/json'
        }
    }).then((response) => {
        return response;
    });
}

export function getUsers() {    
    return axios.get(config.API.getUsers)
        .then((response) => {
            return response;
        });
}

export function removeUser(){
    return [];
}