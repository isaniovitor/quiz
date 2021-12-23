import api from './api';

// formatando url
function encodeParam(key: any, value: any) {
  if (value !== null && value !== undefined) return `${key}=${value}`;

  return `${key}=`;
}

function buildQuery(params: any) {
  return params
    ? Object.keys(params)
        .map(key => encodeParam(key, params[key]))
        .join('&')
    : '';
}

export default {
  async get(path?: string, params?: any) {
    const query = buildQuery(params);
    const url = `${path && `/${path}`}${query && `?${query}`}`;

    return api.get(url);
  },
};
