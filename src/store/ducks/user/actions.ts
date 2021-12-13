import { action } from 'typesafe-actions';

import type { LoginActionProps } from './types';
import { UserTypes } from './types';

export const changeProfileAction = (
  username: string,
  password: string,
  userimage: string,
  email: string,
): LoginActionProps =>
  action(UserTypes.USER_LOGIN, { username, password, userimage, email });
