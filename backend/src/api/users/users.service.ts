import { ObjectId } from 'mongodb';

import { Repository } from '../../utils';

import { defaultUser, User } from './user';
import { CreateUserType } from './users.schema';

const list = async (
  repository: Repository<User>
): Promise<User[]> => {
  return repository.find(
    {}, { characters: 0 }
  );
};

const findOne = async (
  repository: Repository<User>,
  id: ObjectId
): Promise<User | undefined> => {
  return repository.findById(id);
};

const create = async (
  repository: Repository<User>,
  user: CreateUserType
): Promise<{ id: ObjectId }> => {
  return repository.insertOne({ ...defaultUser(), ...user });
};

export default { list, findOne, create };
