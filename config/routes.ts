export default [
  {
    name: '登录',
    path: '/login',
    component: '@/pages/UserLogin',
  },
  {
    name: '注册页',
    path: '/register',
    component: '@/pages/UserRegister',
  },
  {
    name: 'TAGS',
    path: '/tags',
    component: '@/pages/Tags',
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
    component: '@/pages/NotFound',
  },
];
