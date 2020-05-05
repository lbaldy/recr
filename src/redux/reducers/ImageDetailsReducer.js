import {IMAGE_DETAILS_LOADED} from "../actions/ActionTypes";

const initialState = {
    imageDetail: [],
};

const ImageDetailsReducer = (state = initialState, action) => {

    switch (action.type) {
        case IMAGE_DETAILS_LOADED:
            return {
                ...state,
                imageDetail: action.payload,
            }
        default:
            return state;
    }
}

export default ImageDetailsReducer;
