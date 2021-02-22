import { all, put, takeLatest, call } from 'redux-saga/effects';
import * as actions from '../houses/actions';
import { House } from '@api/house';

const requestUrl = 'http://mobile-reality-backend.sadek.usermd.net/houses/all';

const fetchApi = () =>
  fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => data.results as House[])
    .catch((err) => err);

function* fetchHosues() {
  try {
    const data = yield call(fetchApi);
    yield put(actions.fetchHouses.success(data));
  } catch (error) {
    yield put(actions.fetchHouses.failure(error));
  }
}

export default function* () {
  yield all([takeLatest([actions.fetchHouses.request], fetchHosues)]);
}
