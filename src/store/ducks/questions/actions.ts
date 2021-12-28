import { action } from 'typesafe-actions';

import type { TemplateProps } from '~/@types/entities/TamplateQuests';

import type {
  GetQuestionsActionProps,
  GetQuestionsErrorActionProps,
  GetQuestionsSuccessActionProps,
  GetQuestionsTemplateProps,
} from './types';
import { QuestionsTypes } from './types';

export const getQuestionsTemplateAction = (
  template: TemplateProps[],
): GetQuestionsTemplateProps =>
  action(QuestionsTypes.GET_TEMPLATE, { template });

export const getQuestionsAction = (
  idCategory: number,
  difficulty: string,
): GetQuestionsActionProps =>
  action(QuestionsTypes.GET_QUESTION, { idCategory, difficulty });

export const getQuestionsSuccessAction = (
  questionsList: any[],
): GetQuestionsSuccessActionProps =>
  action(QuestionsTypes.GET_QUESTION_SUCCESS, { questionsList });

export const getQuestionsErrorAction = (): GetQuestionsErrorActionProps =>
  action(QuestionsTypes.GET_QUESTION_ERROR);
