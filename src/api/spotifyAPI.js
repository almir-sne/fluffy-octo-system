import axios from "axios";
import {client_id, redirect_uri} from "../secrets";
import {stringify} from "../tools/query-string";
const response_type = 'token';

const instance = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {common: {Accept: "application/json"}}
});

export const authorize = () => {
    window.location = `https://accounts.spotify.com/authorize?${stringify({client_id, redirect_uri, response_type})}`;
};

export const search = (query, type, token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return instance.get('search', {params: {q: query, type}})
};