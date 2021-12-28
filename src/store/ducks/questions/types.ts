import type { Action } from 'redux';

import type { TemplateProps } from '~/@types/entities/TamplateQuests';

export enum QuestionsTypes {
  GET_QUESTION = '@questions/GET_QUESTION',
  GET_TEMPLATE = '@questions/GET_TEMPLATE',
  GET_QUESTION_SUCCESS = '@questions/GET_QUESTION_SUCCESS',
  GET_QUESTION_ERROR = '@questions/GET_QUESTION_ERROR',
}

export interface QuestionsState {
  template: TemplateProps[];
  questionsList: any[];
  loadingQuestions: boolean;
  errorGetQuestions: boolean;
}

export interface GetQuestionsTemplateProps extends Action {
  type: QuestionsTypes.GET_TEMPLATE;
  payload: { template: TemplateProps[] };
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
