import type { Action } from 'redux';

export enum CategoryTypes {
  GET_CATEGORY = '@category/GET_CATEGORY',
  GET_CATEGORY_SUCCESS = '@category/GET_CATEGORY_SUCCESS',
  GET_CATEGORY_ERROR = '@category/GET_CATEGORY_ERROR',
}

export interface CategoryState {
  categoryList: any[];
  loadingCategory: boolean;
  errorGetCategory: boolean;
}

export interface GetCategoryActionProps extends Action {
  type: CategoryTypes.GET_CATEGORY;
}

export interface GetCategorySuccessActionProps extends Action {
  type: CategoryTypes.GET_CATEGORY_SUCCESS;
  payload: { categoryList: any[] };
}

export interface GetCategoryErrorActionProps extends Action {
  type: CategoryTypes.GET_CATEGORY_ERROR;
}
