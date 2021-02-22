import { createAsyncAction } from 'typesafe-actions';
import { House } from '@api/house';

const FETCH_HOUSES_REQUEST = 'HOUSES/FETCH_HOUSES_REQUEST';
const FETCH_HOUSES_SUCCESS = 'HOUSES/FETCH_HOUSES_SUCCESS';
const FETCH_HOUSES_FAILURE = 'HOUSES/FETCH_HOUSES_FAILURE';

const DELETE_HOUSE_REQUEST = 'DELETE_HOUSE_REQUEST';
const DELETE_HOUSE_SUCCESS = 'DELETE_HOUSE_SUCCESS';
const DELETE_HOUSE_FAILURE = 'DELETE_HOUSE_FAILURE';

export const fetchHouses = createAsyncAction(
  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAILURE
)<void, House[], Error>();

export const deleteHouse = createAsyncAction(
  DELETE_HOUSE_REQUEST,
  DELETE_HOUSE_SUCCESS,
  DELETE_HOUSE_FAILURE
)<string, House[], Error>();
