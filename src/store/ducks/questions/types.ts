import type { Action } from 'redux';

export enum QuestionsTypes {
  GET_QUESTION = '@questions/GET_QUESTION',
  GET_QUESTION_SUCCESS = '@questions/GET_QUESTION_SUCCESS',
  GET_QUESTION_ERROR = '@questions/GET_QUESTION_ERROR',
}

export interface QuestionsState {
  questionsList: any[];
  loadingCategory: boolean;
  errorGetCategory: boolean;
}

export interface GetQuestionsActionProps extends Action {
  type: QuestionsTypes.GET_QUESTION;
  payload: { idCategory: number; difficulty: string };
}

export interface GetQuestionsSuccessActionProps extends Action {
  type: QuestionsTypes.GET_QUESTION_SUCCESS;
  payload: { questionsList: any[] };
}

export interface GetQuestionsErrorActionProps extends Action {
  type: QuestionsTypes.GET_QUESTION_ERROR;
}
