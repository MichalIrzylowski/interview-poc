import { createReducer, ActionType } from 'typesafe-actions';

import { House } from '@api/house';

import * as actions from './actions';

type Actions = ActionType<typeof actions>;

interface State {
  houses: House[];
  loading: boolean;
  error?: string;
}

const initialState = {
  houses: [],
  loading: false,
};

export const houses = createReducer<State, Actions>(initialState)
  .handleAction(actions.fetchHouses.request, (state) => ({
    ...state,
    loading: true,
  }))
  .handleAction(actions.fetchHouses.success, (state, { payload }) => ({
    ...state,
    houses: payload,
    loading: false,
    error: '',
  }))
  .handleAction(actions.fetchHouses.failure, (state, { payload }) => ({
    ...state,
    error: payload.message,
  }));
