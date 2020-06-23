
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/my', component: () => import('pages/My.vue') },
      { path: '/wallet', component: () => import('pages/Wallet.vue') }
    ],
  }, {
    path: '/a',
    component: () => import('layouts/WhiteLayout.vue'),
    children: [
      {path: '/author', component: () => import('pages/Author.vue')},
      {path: '/order_list', component: () => import('pages/OrderList.vue')},
    ]
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
