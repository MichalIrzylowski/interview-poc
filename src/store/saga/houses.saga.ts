import { all, put, takeLatest, call, select } from 'redux-saga/effects';
import * as actions from '../houses/actions';
import { House } from '@api/house';

const requestUrl = 'http://mobile-reality-backend.sadek.usermd.net/houses/';

const fetchHouses = () =>
  fetch(requestUrl + 'all')
    .then((res) => res.json())
    .then((data) => data.results as House[])
    .catch((err) => err);

function* fetchHosues() {
  try {
    const data = yield call(fetchHouses);
    yield put(actions.fetchHouses.success(data));
  } catch (error) {
    yield put(actions.fetchHouses.failure(error));
  }
}

const callDeleteHouse = (id: string) =>
  fetch(requestUrl + id, { method: 'Delete' })
    .then((data) => data)
    .catch((err) => err);

function* deleteHouse(action: any) {
  const { houses } = yield select((state) => state);

  try {
    yield call(callDeleteHouse, action.payload);

    const newHouses: House[] = houses.houses.filter(
      (house: House) => house._id !== action.payload
    );
    yield put(actions.fetchHouses.success(newHouses));
  } catch (error) {
    console.log(error);
  }
}

export default function* () {
  yield all([
    takeLatest([actions.fetchHouses.request], fetchHosues),
    takeLatest([actions.deleteHouse.request], deleteHouse),
  ]);
}
