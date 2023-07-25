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
      201: '新建或修改数据成功。',
      202: '一个请求已经进入后台排队（异步任务）。',
      204: '删除数据成功。',
      400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
      401: '用户没有权限（令牌、用户名、密码错误）。',
      403: '用户得到授权，但是访问是被禁止的。',
      404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
      406: '请求的格式不可得。',
      410: '请求的资源被永久删除，且不会再得到的。',
      422: '当创建一个对象时，发生一个验证错误。',
      500: '服务器发生错误，请检查服务器。',
      502: '网关错误。',
      503: '服务不可用，服务器暂时过载或维护。',
      504: '网关超时。',
      521: '用户没有权限（令牌、用户名、密码错误）。',
    };
    message.error(codeMaps[response.status] || '请求出错了！');
  }

  return response;
});

export default request;
