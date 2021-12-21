import { action } from 'typesafe-actions';

import type {
  GetCategorySubjectActionProps,
  GetCategorySubjectSuccessActionProps,
  GetCategorySubjectErrorActionProps,
} from './types';
import { CategorySubjectTypes } from './types';

export const getCategorySubjectAction = (): GetCategorySubjectActionProps =>
  action(CategorySubjectTypes.GET_CATEGORY);

export const getCategorySubjectSuccessAction = (
  categoryListSubject: any[],
): GetCategorySubjectSuccessActionProps =>
  action(CategorySubjectTypes.GET_CATEGORY_SUCCESS, { categoryListSubject });

export const getCategorySubjectErrorAction =
  (): GetCategorySubjectErrorActionProps =>
    action(CategorySubjectTypes.GET_CATEGORY_ERROR);
