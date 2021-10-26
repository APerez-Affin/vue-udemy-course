import { createRouter, createWebHashHistory } from 'vue-router'

/* Modules - Routes */
import daybookRouter from '@/modules/daybook/router';

const routes = [

  {
    path: '/daybook',
    alias: ['/', '/daybook'],
    ...daybookRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router