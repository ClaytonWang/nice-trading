import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 4 * 60 * 1000,
});

instance.defaults.headers.get['Content-Type'] = 'application/json';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
instance.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.request.use(
  (config) => {
    // config.headers['x-apigw-api-id'] = 'es66pgme7k';
    return config;
  },
  (err) => { return err;},
);

instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  },
);

export default {
  get(api, params = {}, withCredentials = true) {
    return instance.get(api, {
      params: params,
      withCredentials: withCredentials,
    });
  },
  post(api, params = {}, withCredentials = true) {
    return instance.post(api, params, {
      withCredentials: withCredentials,
    });
  },
  delete(api, params = {}, withCredentials = true) {
    return instance.delete(api, { data: params }, { withCredentials: withCredentials });
  },
};
