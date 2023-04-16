import axios from 'axios';
import qs from 'qs';
import { stringInterpolate } from '@formatters/stringInterpolate';
import { EMPTY_OBJECT } from '@constants/app.constants';

const API_BASE_URL = 'https://openlibrary.org'; // TODO: can be rerieved from configs or envs
const TIMEOUT = 20000;
const HEADERS = {
    // 'X-XXX-Key': '',
};

const defaultConfig = {
    paramsSerializer: params => qs.stringify(params),
    timeout: TIMEOUT,
};

const prefixEndpoint = (endpoint, options) => stringInterpolate(endpoint, options);

const api = ((args) => {
    const instance = axios.create();
    // Intercepting response before actual handling, This to serve response/error handling across application
    instance.interceptors.response.use(response => { return { ...response.data, responseHeaders: response?.headers || {}}}, error => Promise.reject(error));

    return {
      getConfig() {
        return {
          baseURL: API_BASE_URL,
          headers: HEADERS,
          ...args,
        };
      },

      get(url, params = {}, config = EMPTY_OBJECT, options = {}) {
        const endpoint = prefixEndpoint(url, options);
        const updatedConfig = { ...this.getConfig(), ...config };
        return instance.get(endpoint, { ...updatedConfig, params });
      },
      patch(url, data = {}, config = EMPTY_OBJECT, options = {}) {
        const endpoint = prefixEndpoint(url, options);
        const updatedConfig = { ...this.getConfig(), ...config };
        return instance.patch(endpoint, data, updatedConfig);
      },
      post(url, data = {}, config = EMPTY_OBJECT, options = {}) {
        const endpoint = prefixEndpoint(url, options);
        const updatedConfig = { ...this.getConfig(), ...config };
        return instance.post(endpoint, data, updatedConfig);
      },
      put(url, data = {}, config = EMPTY_OBJECT, options = {}) {
        const endpoint = prefixEndpoint(url, options);
        const updatedConfig = { ...this.getConfig(), ...config };
        return instance.put(endpoint, data, updatedConfig);
      },
    };
  })(defaultConfig);
  
  export default api;
  