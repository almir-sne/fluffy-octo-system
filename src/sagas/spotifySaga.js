import {put, takeLatest, call} from 'redux-saga/effects'
import { authorize, search, searchAlbumsByArtist, searchTracksByAlbum }from '../api/spotifyAPI';

function* oauthLoginWatcher() {
    yield call(authorize);
}

function* searchWatcher({query, queryType}) {
    const accessToken = sessionStorage.getItem("accessToken");
    const response = yield call(search, query, queryType, accessToken);
    yield put({
        type: 'SEARCH_SUCCESS',
        result: response.data
    });
}

function* albumsByArtistWatcher({selectedId}) {
    const accessToken = sessionStorage.getItem("accessToken");
    const response = yield call(searchAlbumsByArtist, selectedId, accessToken);
    console.log(response)
    yield put({
        type: 'ALBUMS_BY_ARTIST_SUCCESS',
        result: response.data
    });
}

function* tracksByAlbumWatcher({selectedId}) {
    const accessToken = sessionStorage.getItem("accessToken");
    const response = yield call(searchTracksByAlbum, selectedId, accessToken);
    console.log(response)
    yield put({
        type: 'TRACKS_BY_ALBUM_SUCCESS',
        result: response.data
    });
}

export default function* spotifyWatcher() {
    yield [
        takeLatest('OAUTH_LOGIN', oauthLoginWatcher),
        takeLatest('SEARCH', searchWatcher),
        takeLatest('ALBUMS_BY_ARTIST', albumsByArtistWatcher),
        takeLatest('TRACKS_BY_ALBUM', tracksByAlbumWatcher)
    ]
};