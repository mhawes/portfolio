import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'portfolio', component: () => import('pages/PortfolioPage.vue') },
      { path: 'portfolio/particle-life', component: () => import('pages/projects/ParticleLifePage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
