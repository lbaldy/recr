import {all, fork} from 'redux-saga/effects';
import ImagesSaga from '../saga/ImagesSaga';


export default function* saga() {
    yield all([
        fork(ImagesSaga),
    ]);
}
