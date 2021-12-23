import { action } from 'typesafe-actions';

import type {
  GetCategoryActionProps,
  GetCategoryErrorActionProps,
  GetCategorySuccessActionProps,
} from './types';
import { CategoryTypes } from './types';

export const getCategoryAction = (): GetCategoryActionProps =>
  action(CategoryTypes.GET_CATEGORY);

export const getCategorySuccessAction = (
  categoryList: any[],
): GetCategorySuccessActionProps =>
  action(CategoryTypes.GET_CATEGORY_SUCCESS, { categoryList });

export const getCategoryErrorAction = (): GetCategoryErrorActionProps =>
  action(CategoryTypes.GET_CATEGORY_ERROR);
