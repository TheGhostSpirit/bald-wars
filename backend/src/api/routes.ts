import { buildRoutes, Path } from '../utils';

import usersRoutes from './users/users.routes';

/**
 * The routes to mount on /api.
 */
const paths: Path[] = [
  { path: '/users', routes: usersRoutes }
];

const router = buildRoutes(paths);

export default router;
