import { takeEvery, put, call } from 'redux-saga/effects';
import { ALL_HEROES_FETCHED } from '../constants/heroesTypes';
import * as actions from '../actions/heroesActions';
import { getHeroStats } from '../service/api';

// Saga Watcher
export default function* watchAllUsers() {
  yield takeEvery(ALL_HEROES_FETCHED, fetchAllHeroesWorker);
}

// Saga Worker
function* fetchAllHeroesWorker() {
  try {
    yield console.log('Start Fetching!');
    yield put(actions.requestAllHeroes());
    const heroes = yield call(() => getHeroStats());
    yield console.log('Fetched!', heroes);
    yield put(actions.requestAllHeroesSuccess(heroes));
  } catch (err) {
    console.error(`${err.message} - ${err.response.data.message}`);
    yield put(actions.requestAllHeroesFailure());
  }
}
