import {runSaga} from 'redux-saga';
import {doGetImagesSaga} from "../src/redux/saga/ImagesSaga";
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
const mock = new MockAdapter(axios);

test('should test doGetImagesSaga dispatching the loader show and loader hide action', async () => {

    const images_resp = {
        "imageses": [{
            "id": "ck9s19laet53q0940ufq2i016",
            "title": "birdy bird",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/56/Aegithalos_caudatus_front-on_2.jpg"
        }, {
            "id": "ck9s1a1pn06yz091102rem6w3",
            "title": "Birdiddy Bird",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Scrub_wren_peering444.jpg"
        }, {
            "id": "ck9s1ackt072g09117dbkcdas",
            "title": "Birdy the birdelot",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Scrub_wren_female_Vocalising444.jpg/1600px-Scrub_wren_female_Vocalising444.jpg"
        }, {
            "id": "ck9s1amc6075l0911uibsjxhj",
            "title": "Little Birdie Bird",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Inland_Thornbill_%285669197054%29_-_edit.jpg"
        }]
    }

    mock.onPost().reply(200, {data: JSON.stringify(images_resp)});

    const dispatchedActions = [];
    await runSaga(
        {
            dispatch: action => dispatchedActions.push(action),
        },
        doGetImagesSaga
    ).toPromise();

    expect(3).toEqual(dispatchedActions.length);
    expect(dispatchedActions[0].type).toEqual(
        'SHOW_LOADER',
    );
    expect(dispatchedActions[1].type).toEqual('IMAGES_LOADED');
    expect(dispatchedActions[2].type).toEqual(
        'HIDE_LOADER',
    );
})
;
