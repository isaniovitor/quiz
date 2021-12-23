import { all, fork } from 'redux-saga/effects';

import category from '../ducks/category/sagas';
import questions from '../ducks/questions/sagas';

export default function* rootSaga() {
  // yield == await
  yield all([fork(category), fork(questions)]);
}
