import { lazy } from 'react';

const NewPage = lazy(() => import('./pages/new-page/NewPage'));
const newRoutes = [
    {
        exact: false,
        path: '/new',
        component: NewPage
    }
];

export default newRoutes;