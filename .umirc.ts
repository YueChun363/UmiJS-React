import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  routes: [
    {
      name: '登录',
      path: '/login',
      component: '@/pages/UserLogin',
    },
    {
      name: '注册页',
      path: '/register',
      component: './UserRegister',
    },
    {
      path: '/',
      component: '@/pages/LayoutResponsive',
      routes: [
        { path: '/', component: '@/pages' },
        { path: '/pageA', component: '@/pages/PageA' },
      ],
    },
    {
      name: 'NotFound',
      path: '/404',
      component: './NotFound',
    },
  ],
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  fastRefresh: {},
});
