import { action } from 'typesafe-actions';

import type {
  GetQuestionsActionProps,
  GetQuestionsErrorActionProps,
  GetQuestionsSuccessActionProps,
} from './types';
import { QuestionsTypes } from './types';

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
