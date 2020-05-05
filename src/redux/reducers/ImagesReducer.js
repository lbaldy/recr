import {IMAGES_LOADED} from "../actions/ActionTypes";

const initialState = {
    images: [],
};

const ImagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case IMAGES_LOADED:
            return {
                ...state,
                images: action.payload,
            }
        default:
            return state;
    }
}

export default ImagesReducer;
