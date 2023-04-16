/**
 * Added redux configurations if needed in future
 */
import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import { rootReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware({
  onError: (_err) => {
    // handle error here: _err
  }
});
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export { store };
