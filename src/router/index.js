import routes from '@/router/routes';
import { createRouter, createWebHashHistory } from 'vue-router';
import setPageTitle from '@/router/middleware/set-page-title';

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.afterEach(setPageTitle);

export default router;
