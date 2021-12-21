import { all, fork } from 'redux-saga/effects';

import category from '../ducks/category/sagas';

export default function* rootSaga() {
  // yield == await
  yield all([fork(category)]);
}
