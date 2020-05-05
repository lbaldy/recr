import {GET_IMAGE_SAGA_REQUEST, GET_IMAGES_SAGA_REQUEST} from "./ActionTypes";

export const getImages = () => {
    return {
        type: GET_IMAGES_SAGA_REQUEST
    }
}

export const getImage = (imageId) => {
    console.log("GET_IMAGE_SAGA_REQUEST", imageId)
    return {
        type: GET_IMAGE_SAGA_REQUEST,
        payload: imageId
    }
}
