import { fork } from 'redux-saga/effects';
import spotifyWatcher from './spotifySaga'
import fakeServerWatcher from "./fakeServerSaga"

const sagas = [
    spotifyWatcher,
    fakeServerWatcher
];

export default function* root() {
    yield sagas.map(saga => fork(saga));
}