import { all, AllEffect } from 'redux-saga/effects';
import houseSaga from './houses.saga';

export type RootSaga = ReturnType<typeof houseSaga>;

export function* rootSaga(): Iterator<AllEffect<RootSaga>> {
  yield all([houseSaga()]);
}
