import api from './api';

export default {
  async get(path?: string, params?: string) {
    const url = `${path && `/${path}`}`;

    return api.get(url);
  },
};
