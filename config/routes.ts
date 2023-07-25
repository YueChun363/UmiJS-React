export default [
  {
    path: '/login',
    component: '@/pages/UserLogin',
  },
  {
    path: '/register',
    component: '@/pages/UserRegister',
  },
  {
    name: 'TAGS',
    path: '/tags',
    component: '@/pages/Tags',
  },
  { path: '/', component: '@/pages/Index' },
  { name: 'pageA', path: '/pageA', component: '@/pages/PageA' },
];
