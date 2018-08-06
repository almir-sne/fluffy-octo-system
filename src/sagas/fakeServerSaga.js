import {put, takeLatest, call} from 'redux-saga/effects'
import { addFavorite, loadFavorites, removeFavorite} from "../api/fakeServerAPI"

function* addFavoriteWatcher({id}) {
    yield call(addFavorite, id);
    yield put({
        type: 'LOAD_FAVORITES'
    });
}

function* loadFavoritesWatcher() {
    const response = yield call(loadFavorites);
    yield put({
        type: 'LOAD_FAVORITES_SUCCESS',
        favorites: response
    });
}

function* removeFavoriteWatcher({id}) {
    yield call(removeFavorite, id);
    yield put({
        type: 'LOAD_FAVORITES'
    });
}

export default function* fakeServerWatcher() {
    yield [
        takeLatest('ADD_FAVORITE', addFavoriteWatcher),
        takeLatest('LOAD_FAVORITES', loadFavoritesWatcher),
        takeLatest('REMOVE_FAVORITE', removeFavoriteWatcher)
    ]
};