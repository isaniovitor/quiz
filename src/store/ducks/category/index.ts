import type { Reducer } from 'redux';

import type { CategorySubjectState } from './types';
import { CategorySubjectTypes } from './types';

const INITIAL_STATE: CategorySubjectState = {
  categoryListSubject: [],
  loadingCategorySubject: false,
  errorGetCategory: false,
};

const reducer: Reducer<CategorySubjectState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CategorySubjectTypes.GET_CATEGORY:
      return {
        ...state,
        loadingCategorySubject: true,
      };
    case CategorySubjectTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryListSubject: payload.categoryListSubject,
        loadingCategorySubject: false,
        errorGetCategory: false,
      };
    case CategorySubjectTypes.GET_CATEGORY_ERROR:
      return {
        ...state,
        categoryListSubject: [],
        loadingCategorySubject: false,
        errorGetCategory: true,
      };
    default:
      return state;
  }
};

export default reducer;
