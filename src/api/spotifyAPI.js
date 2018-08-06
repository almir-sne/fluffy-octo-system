import axios from "axios";
import {client_id, redirect_uri} from "../secrets";
import {stringify} from "../tools/query-string";
const response_type = 'token';

function createInstance(token) {
    return axios.create({
        baseURL: 'https://api.spotify.com/v1/',
        headers: {common: {Accept: "application/json", Authorization: `Bearer ${token}`}}
    });
}

export const authorize = () => {
    window.location = `https://accounts.spotify.com/authorize?${stringify({client_id, redirect_uri, response_type})}`;
};

export const search = (query, type, token) => {
    return createInstance(token).get('search', {params: {q: query, type}});
};

export const searchTracksByAlbum = (id, token) => {
    return createInstance(token).get(`albums/${id}/tracks`);
};

export const searchAlbumsByArtist = (id, token) => {
    return createInstance(token).get(`artists/${id}/albums`, {params: {limit: 5}});
};