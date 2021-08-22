import { Db, ObjectId } from 'mongodb';
import { Request } from 'express';
import createHttpError from 'http-errors';

import { validateSchema, validateRouteParams, useRepository } from '../../utils';

import { User } from './user';
import userService from './users.service';
import userSchemas from './users.schema';

const userRepository = (database: Db) => useRepository<User>(database, 'models');

const list = async (database: Db): Promise<User[]> => {
  return userService.list(userRepository(database));
};

const findOne = async (database: Db, request: Request): Promise<User> => {
  const [ id ] = validateRouteParams(request.params.id);

  const user = await userService.findOne(userRepository(database), id);

  if (!user) {
    throw createHttpError(404, 'Invalid user id');
  }

  return user;
};

const create = async (database: Db, request: Request): Promise<{ id: ObjectId }> => {
  const user = validateSchema(userSchemas.createUserSchema, request.body);
  return userService.create(userRepository(database), user);
};

export default { list, create, findOne };
