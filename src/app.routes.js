import feedRoutes from './feed/feed.routes';
import newRoutes from './new/new.routes';

const appRoutes = [
    ...feedRoutes,
    ...newRoutes
];

export default appRoutes;