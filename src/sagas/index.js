import { all } from 'redux-saga/effects';

import watchAllHeroes from './heroesSaga';

export default function*() {
  yield all([watchAllHeroes()]);
}
