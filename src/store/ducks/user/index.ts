import type { Reducer } from 'redux';

import { UserTypes } from './types';
import type { UserState } from './types';

const INITIAL_STATE: UserState = {
  username: '',
  password: '',
  userimage: '',
  email: '',
  islogged: false,
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case UserTypes.USER_LOGIN:
      return {
        // isso q faz deixar visível?
        // pegando estado antigo
        ...state,
        // atualizando
        username: payload.username,
        password: payload.password,
        userimage: payload.userimage,
        email: payload.email,
        islogged: true,
      };
    default:
      return state;
  }
};

export default reducer;
