import { all, call, takeLatest, put } from 'redux-saga/effects';

import { getCategory } from '~/services/category';

import {
  getCategorySubjectSuccessAction,
  getCategorySubjectErrorAction,
} from './actions';
import { CategorySubjectTypes } from './types';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getCategorySubjectSagas() {
  try {
    const response: ResponseGenerator = yield call(getCategory);

    if (response.status >= 200 && response.status < 300) {
      const categoryListSubject = response.data.trivia_categories;
      yield put(getCategorySubjectSuccessAction(categoryListSubject));
    } else {
      yield put(getCategorySubjectErrorAction());
    }
  } catch {
    yield put(getCategorySubjectErrorAction());
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(CategorySubjectTypes.GET_CATEGORY, getCategorySubjectSagas),
  ]);
}
