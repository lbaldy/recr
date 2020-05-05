import {all, call, put, takeEvery} from 'redux-saga/effects';
import ImageService from "../../services/ImageService";
import {
    GET_IMAGE_SAGA_REQUEST,
    GET_IMAGES_SAGA_REQUEST,
    HIDE_LOADER, IMAGE_DETAILS_LOADED,
    IMAGES_LOADED,
    SHOW_LOADER
} from "../actions/ActionTypes";


export function* doGetImagesSaga() {
    yield put({type: SHOW_LOADER});
    const images = yield call(ImageService.getImages);
    yield put({
        type: IMAGES_LOADED,
        payload: images,
    });
    yield put({type: HIDE_LOADER});
}

export function* doGetImageSaga(action) {

    const {payload} = action;
    yield put({type: SHOW_LOADER});
    const {imageses} = yield call(ImageService.getImage, payload);
    yield put({
        type: IMAGE_DETAILS_LOADED,
        payload: imageses[0],
    });
    yield put({type: HIDE_LOADER});
}

function* getImagesRequest() {
    yield takeEvery(GET_IMAGES_SAGA_REQUEST, doGetImagesSaga);
}

function* getImageRequest() {
    yield takeEvery(GET_IMAGE_SAGA_REQUEST, doGetImageSaga);
}

export default function* allSagas() {
    yield all([getImageRequest(), getImagesRequest()]);
}
