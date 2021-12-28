import { all, call, takeLatest, put } from 'redux-saga/effects';

import { getQuestions } from '~/services/questions';

import { getQuestionsSuccessAction, getQuestionsErrorAction } from './actions';
import type { GetQuestionsActionProps } from './types';
import { QuestionsTypes } from './types';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getQuestionsSagas(action: GetQuestionsActionProps) {
  try {
    const response: ResponseGenerator = yield call(
      getQuestions,
      action.payload.idCategory,
      action.payload.difficulty,
    );

    // console.tron.log('res', response);
    // console.tron.log('res', response.results);

    if (response.status >= 200 && response.status < 300) {
      const questionsList = response.data.results;
      // const tamplate = [];
      console.tron.log('questionsList', questionsList);
      yield put(getQuestionsSuccessAction(questionsList));
    } else {
      yield put(getQuestionsErrorAction());
    }
  } catch {
    yield put(getQuestionsErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(QuestionsTypes.GET_QUESTION, getQuestionsSagas)]);
}
