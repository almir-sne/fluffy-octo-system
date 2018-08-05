import {put, takeLatest, call} from 'redux-saga/effects'
import { authorize, search }from '../api/spotifyAPI';

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


export default function* spotifyWatcher() {
    yield [
        takeLatest('OAUTH_LOGIN', oauthLoginWatcher),
        takeLatest('SEARCH', searchWatcher)
    ]
};