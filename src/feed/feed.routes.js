import { lazy } from 'react';

const FeedPage = lazy(() => import('./pages/feed-page/FeedPage'));
const feedRoutes = [
    {
        exact: true,
        path: '/',
        component: FeedPage
    }
];

export default feedRoutes;