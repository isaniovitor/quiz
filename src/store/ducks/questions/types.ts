import type { Action } from 'redux';

import type { TemplateProps } from '~/@types/entities/TamplateQuests';

export enum QuestionsTypes {
  GET_QUESTION = '@questions/GET_QUESTION',
  GET_CORRECTQUESTIONS = '@questions/GET_CORRECTQUESTIONS',
  GET_INCORRECTQUESTIONS = '@questions/GET_INCORRECTQUESTIONS',
  GET_TEMPLATE = '@questions/GET_TEMPLATE',
  GET_QUESTION_SUCCESS = '@questions/GET_QUESTION_SUCCESS',
  GET_QUESTION_ERROR = '@questions/GET_QUESTION_ERROR',
}

export interface QuestionsState {
  template: TemplateProps[];
  correctQuestions: number;
  incorrectQuestions: number;
  questionsList: any[];
  loadingQuestions: boolean;
  errorGetQuestions: boolean;
}

export interface GetQuestionsCorrectQuestionsProps extends Action {
  type: QuestionsTypes.GET_CORRECTQUESTIONS;
  payload: { correctQuestions: number };
}

export interface GetQuestionsIncorrectQuestionsProps extends Action {
  type: QuestionsTypes.GET_INCORRECTQUESTIONS;
  payload: { incorrectQuestions: number };
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
