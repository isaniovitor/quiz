import type { Reducer } from 'redux';

import type { QuestionsState } from './types';
import { QuestionsTypes } from './types';

const INITIAL_STATE: QuestionsState = {
  questionsList: [],
  loadingCategory: false,
  errorGetCategory: false,
};

const reducer: Reducer<QuestionsState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case QuestionsTypes.GET_QUESTION:
      return {
        ...state,
        loadingCategory: true,
      };
    case QuestionsTypes.GET_QUESTION_SUCCESS:
      return {
        ...state,
        questionsList: payload.questionsList,
        loadingCategory: false,
        errorGetCategory: false,
      };
    case QuestionsTypes.GET_QUESTION_ERROR:
      return {
        ...state,
        questionsList: [],
        loadingCategory: false,
        errorGetCategory: true,
      };
    default:
      return state;
  }
};

export default reducer;
