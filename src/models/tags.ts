// dva model的名字要和UI组件对应，例如这里的组件是DVA.tsx
import { request } from 'umi';

const getTags = () => {
  return request('/api/getTags');
};

export default {
  // 调用model时，通过命名空间调用，唯一
  namespace: 'tags',
  state: {
    tagList: [],
  },
  // 调用接口获取服务器数据
  effects: {
    // payload: ui组件调用此方法穿过来的参数；callback：执行一些额外操作需要使用的回调函数
    // put：将api获取的数据传递给reducer； call：访问外部获取数据的方法例如请求
    *fetchTags({ payload, callback }, { put, call }) {
      const res = yield call(getTags, payload);
      yield put({
        type: 'setTagList',
        payload: res, //和上面的形参payload不是一个东西
      });
    },
  },
  // 更新state
  reducers: {
    setTagList(state, action) {
      return {
        ...state,
        tagList: action.payload,
      };
    },
  },
};
