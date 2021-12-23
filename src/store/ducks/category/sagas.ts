import { all, call, takeLatest, put } from 'redux-saga/effects';

import { getCategory } from '~/services/category';

import { getCategoryErrorAction, getCategorySuccessAction } from './actions';
import { CategoryTypes } from './types';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getCategorySagas() {
  try {
    const response: ResponseGenerator = yield call(getCategory);

    if (response.status >= 200 && response.status < 300) {
      const categoryList = response.data.trivia_categories;
      yield put(getCategorySuccessAction(categoryList));
    } else {
      yield put(getCategoryErrorAction());
    }
  } catch {
    yield put(getCategoryErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(CategoryTypes.GET_CATEGORY, getCategorySagas)]);
}
