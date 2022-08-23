import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
    meta: {
      title: 'Home page',
    },
  },
  {
    name: 'about',
    path: '/about',
    component: About,
    meta: {
      title: 'About page',
    },
  },
];
