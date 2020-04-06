export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

/**
 * 资源文件服务器地址
 */
const ASSETS_HOST = '';

// eslint-disable-next-line import/no-mutable-exports
let APIPREFIX = 'http://localhost:2000/api/';

if (process.env.NODE_ENV === 'production') {
  APIPREFIX = 'http://localhost:2000/api/';
}

export { APIPREFIX, ASSETS_HOST };

export const REACH_BOTTOM_EVENT = 'reach_bottom_event';
export const PULL_DOWN_REFRESH_EVENT = 'pull_down_refresh_event';

export const THROTTLE_DELAY = 1500;
