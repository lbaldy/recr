import ImageDetailsReducer from "../src/redux/reducers/ImageDetailsReducer";
import {IMAGE_DETAILS_LOADED} from "../src/redux/actions/ActionTypes";

test('test IMAGE_DETAILS_LOADED details in reducer', () => {
    const action = {
        type: IMAGE_DETAILS_LOADED,
        payload: {
            id: 123,
            imageUri: 'http://example.com/someimage.png',
            title: 'some title'
        },
    };

    const actual = ImageDetailsReducer(undefined, action);

    const expected = {
        imageDetail: {
            id: 123,
            imageUri: 'http://example.com/someimage.png',
            title: 'some title'
        },
    };

    expect(actual).toEqual(expected);
});


test('test IMAGE_DETAILS_LOADED without payload', () => {
    const action = {
        type: IMAGE_DETAILS_LOADED
    };

    const actual = ImageDetailsReducer(undefined, action);

    const expected = {};

    expect(actual).toEqual(expected);
});
