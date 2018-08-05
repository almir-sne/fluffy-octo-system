import { fork } from 'redux-saga/effects';
import spotifyWatcher from './spotifySaga'

const sagas = [
    spotifyWatcher
];

export default function* root() {
    yield sagas.map(saga => fork(saga));
}