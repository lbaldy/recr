import {HIDE_LOADER, SHOW_LOADER} from "../actions/ActionTypes";

const LoaderReducer = (state = {loading: false}, action) => {

    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                loading: true
            }
        case HIDE_LOADER:
            return {

                ...state,
                loading: false
            }
        default:
            return state;
    }
}

export default LoaderReducer;
