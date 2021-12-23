import { combineReducers } from 'redux';

import category from './category';
import font from './font';
import questions from './questions';
import theme from './theme';
import user from './user';

export default combineReducers({ theme, user, font, category, questions });
