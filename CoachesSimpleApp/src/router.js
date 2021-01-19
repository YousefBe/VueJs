import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachRegisteration from './pages/coaches/CoachRegisteration.vue';

import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecived from './pages/requests/RequestsRecived.vue';
import NotFoundPage from './pages/notFound.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }]
    },
    { path: '/register', component: CoachRegisteration },
    { path: '/requests', component: RequestsRecived },
    { path: '/:notFound(.*)', component: NotFoundPage }
  ]
});

export default router;
