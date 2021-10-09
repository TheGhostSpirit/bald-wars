import { Route } from '../../utils';

import charactersController from './characters.controller';

/**
 * The models routes to mount on /models.
 */
const routes: Route[] = [
  {
    method: 'get',
    path: '/characters',
    handler: charactersController.findAllPublic
  },
  {
    method: 'get',
    path: '/users/:email/characters',
    handler: charactersController.findAllOfUser
  },
  {
    method: 'get',
    path: '/users/:email/characters/:id',
    handler: charactersController.findOneOfUser
  },
  {
    method: 'post',
    path: '/users/:email/characters',
    handler: charactersController.create
  },
  {
    method: 'put',
    path: '/users/:email/characters/:id',
    handler: charactersController.update
  },
  {
    method: 'delete',
    path: '/users/:email/characters/:id',
    handler: charactersController.remove
  }
];

export default routes;
