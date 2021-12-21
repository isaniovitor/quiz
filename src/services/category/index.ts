import { GET_CATEGORY } from '~/constants/api';

import request from '../request';

export async function getCategory() {
  try {
    const response = await request.get(GET_CATEGORY);
    return response;
  } catch {
    return null;
  }
}
