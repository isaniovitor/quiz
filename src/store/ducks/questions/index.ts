import type { Reducer } from 'redux';

import type { QuestionsState } from './types';
import { QuestionsTypes } from './types';

const INITIAL_STATE: QuestionsState = {
  template: [],
  correctQuestions: 0,
  incorrectQuestions: 0,
  questionsList: [],
  loadingQuestions: false,
  errorGetQuestions: false,
};

const reducer: Reducer<QuestionsState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case QuestionsTypes.GET_QUESTION:
      return {
        ...state,
        loadingQuestions: true,
      };
    case QuestionsTypes.GET_QUESTION_SUCCESS:
      return {
        ...state,
        questionsList: payload.questionsList,
        loadingQuestions: false,
        errorGetQuestions: false,
      };
    case QuestionsTypes.GET_QUESTION_ERROR:
      return {
        ...state,
        questionsList: [],
        loadingQuestions: false,
        errorGetQuestions: true,
      };
    case QuestionsTypes.GET_TEMPLATE:
      return {
        ...state,
        template: payload.template,
      };
    case QuestionsTypes.GET_CORRECTQUESTIONS:
      return {
        ...state,
        correctQuestions: payload.correctQuestions,
      };
    case QuestionsTypes.GET_INCORRECTQUESTIONS:
      return {
        ...state,
        incorrectQuestions: payload.incorrectQuestions,
      };
    default:
      return state;
  }
};

export default reducer;
