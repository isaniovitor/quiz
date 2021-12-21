import type { Action } from 'redux';

export enum CategorySubjectTypes {
  GET_CATEGORY = '@categorySubject/GET_CATEGORY',
  GET_CATEGORY_SUCCESS = '@categorySubject/GET_CATEGORY_SUCCESS',
  GET_CATEGORY_ERROR = '@categorySubject/GET_CATEGORY_ERROR',
}

export interface CategorySubjectState {
  categoryListSubject: any[];
  loadingCategorySubject: boolean;
  errorGetCategory: boolean;
}

export interface GetCategorySubjectActionProps extends Action {
  type: CategorySubjectTypes.GET_CATEGORY;
}

export interface GetCategorySubjectSuccessActionProps extends Action {
  type: CategorySubjectTypes.GET_CATEGORY_SUCCESS;
  payload: { categoryListSubject: any[] };
}

export interface GetCategorySubjectErrorActionProps extends Action {
  type: CategorySubjectTypes.GET_CATEGORY_ERROR;
}
