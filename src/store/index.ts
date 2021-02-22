import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './saga';

import { houses } from './houses';

const sagaMiddleware = createSagaMiddleware();
export const reducers = combineReducers({
  houses,
});

export type AppState = ReturnType<typeof reducers>;

export const createAppStore = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
