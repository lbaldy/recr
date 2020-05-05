import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/index';
import sagas from './saga/index';

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(sagas);

export default Store;
