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
    component: '@/layouts/LayoutResponsive',
    routes: [
      { path: '/', component: '@/pages/Index' },
      { path: '/pageA', component: '@/pages/PageA' },
    ],
  },
  {
    name: 'NotFound',
    path: '/404',
    component: '@/pages/NotFound',
  },
];
