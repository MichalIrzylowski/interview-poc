import { createAsyncAction } from 'typesafe-actions';
import { House } from '@api/house';

const FETCH_HOUSES_REQUEST = 'HOUSES/FETCH_HOUSES_REQUEST';
const FETCH_HOUSES_SUCCESS = 'HOUSES/FETCH_HOUSES_SUCCESS';
const FETCH_HOUSES_FAILURE = 'HOUSES/FETCH_HOUSES_FAILURE';

export const fetchHouses = createAsyncAction(
  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE
)<void, House[], Error>();
