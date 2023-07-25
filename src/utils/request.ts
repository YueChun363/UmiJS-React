import request from 'umi-request';
import { message } from 'antd';

// 请求拦截器
request.interceptors.request.use((url, options) => {
  return {
    url: `${url}`,
    options: {
      ...options,
      interceptors: true,
      headers: { AuthorizeToken: 'MyTest Token' },
    },
  };
});

// 响应拦截器
request.interceptors.response.use((response) => {
  if (response.status > 400) {
    const codeMaps = {
      404: '未找到。',
      502: '网关错误。',
      503: '服务不可用，服务器暂时过载或维护。',
      504: '网关超时。',
    };
    message.error(codeMaps[response.status] || '请求出错了！');
  }

  return response;
});

export default request;
