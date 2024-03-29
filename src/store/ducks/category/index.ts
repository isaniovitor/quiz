import type { Reducer } from 'redux';

import type { CategoryState } from './types';
import { CategoryTypes } from './types';

const INITIAL_STATE: CategoryState = {
  categoryList: [],
  loadingCategory: false,
  errorGetCategory: false,
};

const reducer: Reducer<CategoryState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CategoryTypes.GET_CATEGORY:
      return {
        ...state,
        loadingCategory: true,
      };
    case CategoryTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryList: payload.categoryList,
        loadingCategory: false,
        errorGetCategory: false,
      };
    case CategoryTypes.GET_CATEGORY_ERROR:
      return {
        ...state,
        categoryList: [],
        loadingCategory: false,
        errorGetCategory: true,
      };
    default:
      return state;
  }
};

export default reducer;
